const { request, response } = require("express");
const axios = require("axios");

const itemGet = (req = request, res = response) => {
    const {id} = req.params;
    axios.get(`https://api.mercadolibre.com/items/${id}`)
        .then(response => {
            const data_item = response.data;
            axios.get(`https://api.mercadolibre.com/items/${id}/description`)
                .then(response => {
                    salida = parsearSalidaItemGet(response.data, data_item);
                    res.json({
                        ...salida
                    });
                })
                .catch(error => {
                    res.status(400).json({
                        error: "error de conexion a api "
                    });
                });
        })
        .catch(error => {
            res.status(400).json({
                error: "error de conexion a api "
            });
        });
};


const itemsSearch = (req = request, res = response) => {
    const {q,category} = req.query;
    let url;
    if (q){
        url = `https://api.mercadolibre.com/sites/MLA/search?q=${q}`;
    }else if (category){
        url = `https://api.mercadolibre.com/sites/MLA/search?category=${category}`;
    }
    axios.get(url)
        .then(response => {
            if (response.data.results.length == 0) {
                res.status(201).json({
                    error: "sin resultados"
                });
                return ;
            }
            [categorias, items] = parsearSalidaItemsSearch(response.data);
            res.json({
                author,
                categorias,
                items
            });
        })
        .catch(error => {
            res.status(400).json({
                error: "error de conexion a api "
            });
        });
};

function parsearSalidaItemGet(data_item_descrition, {id, title, price, currency_id,  pictures, condition, shipping, description, category_id} = data_item){
    [currency, amount, decimals] = formato_precio(currency_id, price);
    picture = pictures[0].url;
    free_shipping = shipping.free_shipping;
    description = data_item_descrition.plain_text;
    return {
        author,
        id,
        title,
        price: {
            currency,
            amount,
            decimals
        },
        picture,
        condition,
        free_shipping,
        description,
        category_id 
    };
}


function parsearSalidaItemsSearch(data){
    categorias = [];
    if (data.available_filters[0].values[0].id === "all"){
        categorias.push(data.filters[0].values[0].id);
    }else{
        data.available_filters[0].values.slice(0, 4).forEach(function (element) {
            categorias.push(element.id);
        });
    }
    
    items = data.results.slice(0,4).map(mapItem);
    return [categorias, items];
}

function mapItem({ id, title, price, currency_id,  thumbnail, condition, shipping, address }) {
    [currency, amount, decimals] = formato_precio(currency_id, price);
    picture = thumbnail;
    free_shipping = shipping.free_shipping;
    state_name = address.state_name;
    return {
        id,
        title,
        precio : price,
        price: {
            currency,
            amount,
            decimals
        },
        picture,
        condition,
        free_shipping,
        state_name
    };
}

const author = {
    nombre: "alexis",
    apellido: "baeza",
};

function formato_precio(currency_id, price){
    precio = String(price).split(".");
    amount= "" ;
    decimals = "" ;
    if (precio.length == 2){
        amount = parseInt(precio[0]);
        decimals = parseInt(precio[1]);
    }else{
        amount = parseInt(precio[0]);
        decimals = 0;
    }
    return [currency_id, amount, decimals];
}
module.exports = {
    itemGet,
    itemsSearch
};