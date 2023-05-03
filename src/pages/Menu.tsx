const Menu = () => {
    return (
        <div></div>
    );
}

export default Menu;

const elMenu: Producto[] = [
    {
        id: 1,
        producto: "Brioche",
        descripcion: "Bread is a bakery that specuakuzes in handcrafted breads ade wth only the freshest and finest ingredients",
        precio: 35,
        img: "https://www.thearionsas.com/wp-content/uploads/2020/08/unnamed-1.jpg"
    },
    {
        id: 2,
        producto: "Pan de masa madre",
        descripcion: "Bread is a bakery that specuakuzes in handcrafted breads ade wth only the freshest and finest ingredients",
        precio: 35,
        img: "https://www.thearionsas.com/wp-content/uploads/2020/08/unnamed-1.jpg"
    },
    {
        id: 3,
        producto: "Corissant de oreo",
        descripcion: "Bread is a bakery that specuakuzes in handcrafted breads ade wth only the freshest and finest ingredients",
        precio: 35,
        img: "https://www.thearionsas.com/wp-content/uploads/2020/08/unnamed-1.jpg"
    },
    {
        id: 4,
        producto: "PAn de hamrbuguesa",
        descripcion: "Bread is a bakery that specuakuzes in handcrafted breads ade wth only the freshest and finest ingredients",
        precio: 35,
        img: "https://www.thearionsas.com/wp-content/uploads/2020/08/unnamed-1.jpg"
    },
    {
        id: 5,
        producto: "MEdia luna francesa",
        descripcion: "Bread is a bakery that specuakuzes in handcrafted breads ade wth only the freshest and finest ingredients",
        precio: 35,
        img: "https://www.thearionsas.com/wp-content/uploads/2020/08/unnamed-1.jpg"
    },
    {
        id: 6,
        producto: "Brazo de reinao de rey mi rey",
        descripcion: "Bread is a bakery that specuakuzes in handcrafted breads ade wth only the freshest and finest ingredients",
        precio: 35,
        img: "https://www.thearionsas.com/wp-content/uploads/2020/08/unnamed-1.jpg"
    },
]

interface Producto {
    id: number,
    producto: string,
    descripcion: string,
    precio: number,
    img: string
}