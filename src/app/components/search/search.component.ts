import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { BreadcrumbModel } from 'src/app/models/breadcrumb.models';
import { ItemModel } from 'src/app/models/item.model';
import { SearchModel } from 'src/app/models/search.model';
import { ItemsService } from 'src/app/services/items.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  categoria = String;
  items: ItemModel[] = [];
  breadcrumb: BreadcrumbModel[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService,
    private title: Title,
    private seoService : SeoService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['search']){
        this.mostrarItems(params['search'], false);
      } else if (params['category']){
        this.mostrarItems(params['category'], true);
      }
    });
  }

  mostrarItems(termino: string, por_categoria : boolean){
    console.log(termino, por_categoria);
    this.itemsService.buscarItem(termino, por_categoria).subscribe((resp: SearchModel) => {
      this.items = resp.items;
      this.itemsService.getBreadcrumb(resp.categorias[0]).subscribe((resp: any) => {
        this.breadcrumb = resp.path_from_root.map((resp: BreadcrumbModel) => ({
          id: resp.id,
          name: resp.name
        }));
        this.optimizarSeo(termino, this.breadcrumb, por_categoria);
      });
    });

  }

  optimizarSeo(termino_busqueda: String, breadCrumb: BreadcrumbModel[], por_categoria: boolean) {
    let seo_title, seo_keywords, seo_description, seo_slug;
    const ml_str = "Mercado Libre";
    if (por_categoria) {
      seo_title = `${breadCrumb[0].name} | ${ml_str}`;
      seo_keywords = `${ml_str} ,`;
      seo_description = `${ml_str} -`;
      seo_slug = `items?category=${termino_busqueda}`;
    } else {
      seo_title = `${termino_busqueda} | ${ml_str}`;
      seo_keywords = `${ml_str}, ${termino_busqueda},`;
      seo_description = `${ml_str} - ${termino_busqueda} -`;
      seo_slug = `items?search=${termino_busqueda}`;
    }
    breadCrumb.forEach(element => {
      seo_description = seo_description.concat(` ${element.name} -`)
      seo_keywords = seo_keywords.concat(` ${element.name},`)
    })
    seo_description = seo_description.slice(0, -1);
    seo_keywords = seo_keywords.slice(0, -1);
    this.title.setTitle(seo_title);
    this.seoService.generarTags({
      title: seo_title,
      description: seo_description,
      slug: seo_slug,
      keywords: seo_keywords
    });
  }
}
