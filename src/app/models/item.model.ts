export interface ItemModel {
    id: string;
    title: string;
    price: {
        currency : string;
        amount: number;
        decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    description?: string;
    category_id?: string;
    state_name: string;
}

