import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title,
    private seoService: SeoService) { }

  ngOnInit(): void {
    this.optimizarSeo();
  }

  optimizarSeo() {
    const seo_title: string = `Mercado Libre`;
    const seo_keywords = `Mercado Libre, Compra, Vende`;
    const seo_description = `Mercado Libre - La comunidad de compra y venta online más grande de América Latina.`;
    const seo_slug = ``;
    this.title.setTitle(seo_title);
    this.seoService.generarTags({
      title: seo_title,
      description: seo_description,
      slug: seo_slug,
      keywords: seo_keywords
    });
  }

}
