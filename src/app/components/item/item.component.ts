import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbModel } from 'src/app/models/breadcrumb.models';
import { ItemModel } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: ItemModel;
  breadcrumb: BreadcrumbModel[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService,
    private title: Title,
    private seoService: SeoService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.itemsService.getItem(params['id']).subscribe((resp: ItemModel) => {
        this.item = resp;
        this.itemsService.getBreadcrumb(this.item.category_id).subscribe((resp: any) => {
          this.breadcrumb = resp.path_from_root.map((resp: BreadcrumbModel) => ({
            id: resp.id,
            name: resp.name
          }));
        });
        this.optimizarSeo(this.item, this.breadcrumb);
      });
    });
  }

  optimizarSeo(item: ItemModel, breadCrumb: BreadcrumbModel[]) {
    const seo_title: string = `${item.title} | Mercado Libre`;
    let seo_keywords = `Mercado Libre, ${item.title},`;
    let seo_description = `Mercado Libre - ${item.title} -`;
    const seo_slug = `items/${item.id}`;
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
