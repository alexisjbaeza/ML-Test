import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbModel } from 'src/app/models/breadcrumb.models';
import { ItemModel } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item : ItemModel;
  div_item = false;
  breadcrumb: BreadcrumbModel[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.itemsService.getItem(params['id']).subscribe((resp : ItemModel) => {
        this.div_item = true;
        this.item = resp;
        this.itemsService.getBreadcrumb(this.item.category_id).subscribe((resp: any) => {
        this.breadcrumb = resp.path_from_root.map((resp: BreadcrumbModel) => ({
            id: resp.id,
            name: resp.name
          }));
        });
        

      });
    });
  }

}
