import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbModel } from 'src/app/models/breadcrumb.models';
import { ItemModel } from 'src/app/models/item.model';
import { SearchModel } from 'src/app/models/search.model';
import { ItemsService } from 'src/app/services/items.service';

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
    private itemsService: ItemsService
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.itemsService.buscarItem(params['search']).subscribe((resp: SearchModel) => {
        this.items = resp.items;
        this.itemsService.getBreadcrumb(resp.categorias[0]).subscribe((resp: any) => {
          this.breadcrumb = resp.path_from_root.map((resp: BreadcrumbModel) => ({
            id: resp.id,
            name: resp.name
          }));
        });
      });

    });
  }
}
