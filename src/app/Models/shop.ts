import { Additions } from "./Additions";
import { Product } from "./Product";

export class Shop {
    Products : Product[] = [{
        productType : 1,
        id : 1,
        name : "Torta de chocolate",
        price : 8000,
        img : "https://www.hogarmania.com/archivos/201903/postres-chocolate-668x400x80xX.jpg"
    },
    {
        productType : 1,
        id : 2,
        name : "Torta de zanahoria",
        price : 6000,
        img : "https://saboryestilo.com.mx/wp-content/uploads/2020/12/Pastel-Zanahoria.jpg"
    },
    {
        productType : 2,
        id : 3,
        name : "Corte de solomo",
        price : 38000,
        img : "https://cafamfloresta.com.co/wp-content/uploads/2021/04/SALOMITO-DE-CERDO.gif"
    },
    {
        productType : 2,
        id : 4,
        name : "Bandeja Paisa",
        price : 30000,
        img : "https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif"
    },
    {
        productType : 3,
        id : 5,
        name : "Humburguesa vegie",
        price : 30000,
        img : "https://cdn.cienradios.com/wp-content/uploads/sites/12/2018/09/hamburguesas-ricas.jpg"
    },
    {
        productType : 3,
        id : 6,
        name : "Lasagna vegie",
        price : 28000,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_pa4zlqRpXcXd6SMPwjJK0FC5D8AMA42XbhR1MIdv_4S6D1cO9MtI-G8HOzT54PRSzs&usqp=CAU"
    },

    {
        productType : 4,
        id : 7,
        name : "Jugo natural",
        price : 8000,
        img : "https://lirp.cdn-website.com/b4fb73a9/dms3rep/multi/opt/29256887321_51b21baab4_z-640x464-640w.jpg"
    },
    {
        productType : 5,
        id : 8,
        name : "Cerveza",
        price : 10000,
        img : "https://estaticos.miarevista.es/media/cache/1000x590_thumb/uploads/images/article/611fc0d65cafe835f70d66ac/cervezas.jpeg"
    },
    {
        productType : 6,
        id : 9,
        name : "Cafe",
        price : 7000,
        img : "https://statics-cuidateplus.marca.com/cms/images/cafe-salud.jpg"
    },
    {
        productType : 6,
        id : 10,
        name : "Milo",
        price : 7000,
        img : "https://i.pinimg.com/474x/c6/6e/24/c66e243a7a440d3e0f1e90d10336dccc.jpg"
    }
    ];

    Additions : Additions [] = [
        {
            productType : 7,
            id : 11,
            name : "Rosada",
            price : 0          
        },
        {
            productType : 7,
            id : 12,
            name : "Piña",
            price : 0           
        },
        {
            productType : 7,
            id : 13,
            name : "BBQ",
            price : 0           
        },
        {
            productType : 8,
            id : 14,
            name : "Mora",
            price : 0          
        },
        {
            productType : 8,
            id : 15,
            name : "Arequipe",
            price : 0           
        },
        {
            productType : 9,
            id : 16,
            name : "MarshMallows",
            price : 500           
        },
        {
            productType : 9,
            id : 17,
            name : "Crema chantilly",
            price : 1000          
        },
        {
            productType : 10,
            id : 18,
            name : "Carne de lentejas",
            price : 3000           
        },
        {
            productType : 10,
            id : 19,
            name : "Ensalada",
            price : 2500          
        },
    ]
}

