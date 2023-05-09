
/**Catalogo de productos divido por categorias */
export const elMenu: Categoria[] = [
    {
        categoria: "hojaldre",
        productos: [
            {
                id: 1,
                nombre: "croissant de almendras",
                descripcion: "9 cm aproximadamente.",
                precio: 6,
                img: "nolin.png",
                opcional: "Version mini 5 centimetros por 3k"
            },
            {
                id: 2,
                nombre: "croissant de pistacho",
                descripcion: "9 cm aproximadamente.",
                precio: 6,
                img: "nolin.png",
                opcional: "Version mini 5 centimetros por 3k"
            },
            {
                id: 3,
                nombre: "croissant de arequipe",
                descripcion: "9 cm aprox. Version mini: 5cm.",
                precio: 5,
                img: "nolin.png",
                opcional: "Version mini 5 centimetros por 2.6k"
            },
            {
                id: 4,
                nombre: "rollo capresse",
                descripcion: "",
                precio: 5,
                img: "nolin.png",
                opcional: "Mini rollo 2.6k"
            },
            {
                id: 5,
                nombre: "croissant de mantequilla",
                descripcion: "9 cm aproximadamente.",
                precio: 3.4,
                img: "nolin.png",
                opcional: "Version mini 5 centimetros por 1.8k"
            },
            {
                id: 6,
                nombre: "pan de chocolate",
                descripcion: "",
                precio: 5,
                img: "nolin.png",
                opcional: "Version mini por 2.6k"
            },
            {
                id: 7,
                nombre: "rollo de canela",
                descripcion: "",
                precio: 4.5,
                img: "nolin.png",
                opcional: "Version mini por 2.3k"
            },
            {
                id: 8,
                nombre: "pan danes",
                descripcion: "relleno de strudel de manzana",
                precio: 4.5,
                img: "nolin.png",
            },
            {
                id: 9,
                nombre: "pan danes",
                descripcion: "relleno de durazno",
                precio: 4.5,
                img: "nolin.png",
            },
            {
                id: 10,
                nombre: "cruffin de matcha",
                descripcion: "",
                precio: 5,
                img: "nolin.png",
            },
            {
                id: 11,
                nombre: "cruffin de coffe toffe",
                descripcion: "",
                precio: 5,
                img: "nolin.png",
            },
            {
                id: 12,
                nombre: "Mini pan babka",
                descripcion: "con chocolate y avellanas de 9 cm",
                precio: 6.5,
                img: "nolin.png",
            },
            {
                id: 13,
                nombre: "rollo de canela brioche",
                descripcion: "",
                precio: 4.5,
                img: "nolin.png",
            },
        ]
    },
    {
        categoria: "Masa Madre",
        productos: [
            {
                id: 1,
                nombre: "pan campesino",
                descripcion: "900 gr (peso en crudo)",
                precio: 12,
                img: "nolin.png"
            },
            {
                id: 2,
                nombre: "pan campesino mogolla",
                descripcion: "100 gr (peso en crudo)",
                precio: 1.2,
                img: "nolin.png"
            },
            {
                id: 3,
                nombre: "pan campesino de chocolate",
                descripcion: "900 gr (peso en crudo)",
                precio: 24,
                img: "nolin.png"
            },
            {
                id: 4,
                nombre: "pan campesino de chocolate mogolla",
                descripcion: "100 gr (peso en crudo)",
                precio: 2.7,
                img: "nolin.png"
            },
            {
                id: 5,
                nombre: "pan de moztaza, datiles y tocineta",
                descripcion: "900 gr (peso en crudo)",
                precio: 23,
                img: "nolin.png"
            },
            {
                id: 6,
                nombre: "pan de avena, chocolate y datiles",
                descripcion: "650 gr (peso en crudo)",
                precio: 17,
                img: "nolin.png"
            },
            {
                id: 7,
                nombre: "pan vietnamita espinaca",
                descripcion: "120 gr (peso en crudo)",
                precio: 1.4,
                img: "nolin.png"
            },
            {
                id: 8,
                nombre: "pan campesino de curry",
                descripcion: "120 gr (peso en crudo)",
                precio: 1.4,
                img: "nolin.png"
            },
            {
                id: 9,
                nombre: "pan campesino de remolacha",
                descripcion: "120 gr (peso en crudo)",
                precio: 1.4,
                img: "nolin.png"
            },
            {
                id: 10,
                nombre: "pan de papa, romero y ajo",
                descripcion: "mogolla de 100 gr (peso en crudo)",
                precio: 1.3,
                img: "nolin.png"
            },
            {
                id: 11,
                nombre: "ciabatta",
                descripcion: "200 gr (peso en crudo)",
                precio: 3.8,
                img: "nolin.png"
            },
            {
                id: 12,
                nombre: "pan cubano",
                descripcion: "120 gr (peso en crudo)",
                precio: 2.3,
                img: "nolin.png"
            },
            {
                id: 13,
                nombre: "pan campesino de ajo y romero",
                descripcion: "120 gr (peso en crudo)",
                precio: 1.4,
                img: "nolin.png"
            },
        ]
    },
    {
        categoria: "Otros",
        productos: [
            {
                id: 1,
                nombre: "focaccia",
                descripcion: "500 gr (peso en crudo)",
                precio: 20,
                img: "nolin.png"
            },
            {
                id: 2,
                nombre: "pan baguette",
                descripcion: "320 gr (peso en crudo)",
                precio: 3.5,
                img: "nolin.png"
            },
            {
                id: 3,
                nombre: "pan brioche hamburguesa",
                descripcion: "100 gr (peso en crudo)",
                precio: 1.9,
                img: "nolin.png"
            },
            {
                id: 4,
                nombre: "pan brioche hotdog",
                descripcion: "75 gr (peso en crudo)",
                precio: 1.6,
                img: "nolin.png"
            },
            {
                id: 5,
                nombre: "pan brioche de papa",
                descripcion: "100 gr (peso en crudo)",
                precio: 2,
                img: "nolin.png"
            },
            {
                id: 6,
                nombre: "pan babka de chocolate con avellanas",
                descripcion: "250 gr (peso en crudo)",
                precio: 34,
                img: "nolin.png"
            },
        ]
    },
]

export interface Producto {
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    img: string,
    opcional?: string
}

export interface Categoria {
    categoria: string,
    productos: Producto[]
}