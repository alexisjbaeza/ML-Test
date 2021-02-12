import { AuthorModel } from "./author.model";
import { ItemModel } from "./item.model";

export interface SearchModel {
    author: AuthorModel;
    categorias: string[];
    items: ItemModel[];
}
