import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { 
  }

  generarTags(config) {
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content : "index" });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Mercado Libre' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: "https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" });
    this.meta.updateTag({ property: 'og:url', content: `localhost:4200/#/${config.slug}` });

  }
}
