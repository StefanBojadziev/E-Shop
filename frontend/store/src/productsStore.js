//Coffee: price_1OvfGwJv4uA0vwan6DzfKDhq
//Sunglasses: price_1OvfLTJv4uA0vwaniqrPY93y
//Camera: price_1OvfMpJv4uA0vwanwm8IvFeL

const productsArray = [
  {
    id: "price_1OvfGwJv4uA0vwan6DzfKDhq",
    price: "price_1OvfGwJv4uA0vwan6DzfKDhq",
    title: "Coffee",
    priceFE: 4.99,
  },
  {
    id: "price_1OvfLTJv4uA0vwaniqrPY93y",
    price: "price_1OvfLTJv4uA0vwaniqrPY93y",
    title: "Sunglasses",
    priceFE: 9.99,
  },
  {
    id: "price_1OvfMpJv4uA0vwanwm8IvFeL",
    price: "price_1OvfMpJv4uA0vwanwm8IvFeL",
    title: "Camera",
    priceFE: 39.99,
  },
];

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);
    if(productData == undefined){
        console.log("Product data does not exist for Product ID: "+id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
