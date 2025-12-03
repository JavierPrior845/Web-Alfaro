import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy, NgZone, ViewChild, HostListener, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

interface MasonryItem {
  id: number;
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  naturalWidth: number;
  naturalHeight: number;
}


@Component({
  selector: 'app-masonry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './masonry.html',
  styleUrls: ['./masonry.css'],
  encapsulation: ViewEncapsulation.None
})
export class MasonryComponent implements OnInit, AfterViewInit, OnDestroy {
  // --- INPUTS (Configuración igual a React) ---
  @Input() items: string[] = []; // Tu entrada: array de strings
  
  @Input() gap = 20; // Espacio entre fotos
  @Input() duration = 0.6;
  @Input() stagger = 0.05;
  @Input() animateFrom: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random' = 'bottom';
  @Input() scaleOnHover = true;
  @Input() hoverScale = 0.95;
  @Input() blurToFocus = true;
  @Input() colorShiftOnHover = false;

  // Variables de estado
  gridItems: MasonryItem[] = [];
  containerHeight = 0;
  private resizeObserver: ResizeObserver | null = null;
  private initialized = false;

  selectedImage: string | null = null;

  @ViewChild('masonryContainer') containerRef!: ElementRef;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // No hacemos nada aquí, esperamos a la vista
  }

  async ngAfterViewInit() {
    // 1. Pre-cargar imágenes para saber sus dimensiones reales
    const loadedItems = await this.preloadImages(this.items);
    this.gridItems = loadedItems;
    this.initialized = true;

    // 2. Observar cambios de tamaño en el contenedor
    this.resizeObserver = new ResizeObserver(() => {
      if (this.initialized) {
        this.calculateLayout(false); // Recalcular posiciones sin animación de entrada
      }
    });
    this.resizeObserver.observe(this.containerRef.nativeElement);

    // 3. Cálculo inicial y animación de entrada
    // Pequeño timeout para asegurar que el contenedor tiene ancho
    setTimeout(() => this.calculateLayout(true), 50);
  }

  // --- LÓGICA CORE ---

  private preloadImages(urls: string[]): Promise<MasonryItem[]> {
  const promises = urls.map((src, index) => {
    return new Promise<MasonryItem>((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve({
          id: index,
          src,
          x: 0, y: 0, w: 0, h: 0,
          naturalWidth: img.width,
          naturalHeight: img.height
        });
      };
      img.onerror = () => {
        resolve({
          id: index,
          src,
          x: 0, y: 0, w: 0, h: 0,
          naturalWidth: 500,
          naturalHeight: 500
        });
      };
    });
  });
  return Promise.all(promises);
}

// En ngAfterViewInit usa preloadImages(this.items) como ya hacías.



  calculateLayout(isFirstRender: boolean) {
    if (!this.containerRef) return;
    const containerWidth = this.containerRef.nativeElement.offsetWidth;
    if (!containerWidth) return;

    let yPos = 0;
    const newGridItems = this.gridItems.map(item => {
      const x = 0;
      const w = containerWidth;

      let h = 0;

      
        // imagen
        if (item.naturalWidth && item.naturalHeight) {
          const aspectRatio = item.naturalHeight / item.naturalWidth;
          h = w * aspectRatio;
        } else {
          h = 200; // fallback altura
        }
      

      const y = yPos;
      yPos += h + this.gap;

      return { ...item, x, y, w, h };
    });

    this.gridItems = newGridItems;
    this.containerHeight = yPos - this.gap; // sin gap al final
    this.cdr.detectChanges();

    this.animateItems(isFirstRender);
  }


  animateItems(isFirstRender: boolean) {
  // 1. Forzar a Angular a pintar el HTML antes de que GSAP busque los elementos
  this.cdr.detectChanges(); 

  this.ngZone.runOutsideAngular(() => {
    this.gridItems.forEach((item, index) => {
      
      // CORRECCIÓN 1: Búsqueda segura dentro del contenedor del componente
      // En lugar de buscar por string global, buscamos el nodo HTML específico
      const element = this.containerRef.nativeElement.querySelector(`[data-id="${item.id}"]`);

      // CORRECCIÓN 2: Chequeo de seguridad
      // Si por alguna razón el elemento no existe (timing), no hacemos nada para evitar el crash
      if (!element) {
        console.warn(`Elemento con id ${item.id} no encontrado para animar.`);
        return;
      }
      
      // CORRECCIÓN 3: Tipado explícito (opcional, pero ayuda a evitar errores rojos en VSCode)
      const targetProps: gsap.TweenVars = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
        duration: this.duration,
        ease: 'power3.out',
        overwrite: 'auto'
      };

      if (isFirstRender) {
        const initialPos = this.getInitialPosition(item);
        
        // Pasamos el 'element' (nodo HTML) directamente, no el string selector
        gsap.fromTo(element, 
          { 
            x: initialPos.x, 
            y: initialPos.y, 
            width: item.w, 
            height: item.h, 
            opacity: 0,
            // Comprobamos si blurToFocus es true para aplicar el filtro
            filter: this.blurToFocus ? 'blur(10px)' : 'blur(0px)' 
          },
          {
            ...targetProps,
            opacity: 1,
            filter: 'blur(0px)',
            delay: index * this.stagger
          }
        );
      } else {
        // Solo mover a nueva posición
        gsap.to(element, targetProps);
      }
    });
  });
}

  // Traducido del switch case de React
  getInitialPosition(item: MasonryItem) {
    const rect = this.containerRef.nativeElement.getBoundingClientRect();
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    let dir = this.animateFrom;

    if (dir === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'] as const;
      dir = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (dir) {
      case 'top': return { x: item.x, y: -500 }; // Fuera por arriba
      case 'bottom': return { x: item.x, y: winH + 500 }; // Fuera por abajo
      case 'left': return { x: -500, y: item.y };
      case 'right': return { x: winW + 500, y: item.y };
      case 'center': return { 
        x: rect.width / 2 - item.w / 2, 
        y: rect.height / 2 - item.h / 2 
      };
      default: return { x: item.x, y: item.y + 200 };
    }
  }

  // --- EVENTOS HOVER ---
  onMouseEnter(e: MouseEvent, item: MasonryItem) {
    const el = e.currentTarget as HTMLElement;
    if (this.scaleOnHover) {
      gsap.to(el, { scale: this.hoverScale, duration: 0.3, ease: 'power2.out', zIndex: 10 });
    }
    if (this.colorShiftOnHover) {
      gsap.to(el.querySelector('.color-overlay'), { opacity: 0.3, duration: 0.3 });
    }
  }

  onMouseLeave(e: MouseEvent, item: MasonryItem) {
    const el = e.currentTarget as HTMLElement;
    if (this.scaleOnHover) {
      gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out', zIndex: 1 });
    }
    if (this.colorShiftOnHover) {
      gsap.to(el.querySelector('.color-overlay'), { opacity: 0, duration: 0.3 });
    }
  }

  openImage(url: string) {
    this.selectedImage = url;
  }

  closeModal() {
    this.selectedImage = null;
  }
  ngOnDestroy() {
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }
}