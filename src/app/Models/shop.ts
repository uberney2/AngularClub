import { Product } from "./Product";

export class Shop {
    Products : Product[] = [{
        id : 1,
        name : "Almuerzo",
        price : 12000,
        img : "../../assets/imagenes/card1.jpg"
    },
    {
        id : 2,
        name : "Papas",
        price : 1000,
        img : "../../assets/imagenes/card2.jpg"
    },
    {
        id : 3,
        name : "Soda",
        price : 12000,
        img : "../../assets/imagenes/card3.jpg"
    },
    {
        id : 4,
        name : "Jugo",
        price : 12000,
        img : "../../assets/imagenes/card4.jpg"
    }
    ];
}