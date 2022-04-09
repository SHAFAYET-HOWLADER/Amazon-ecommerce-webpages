
const addData = (id)=>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    const quantity =shoppingCart[id];
    if(quantity){
        shoppingCart[id] = quantity + 1;
}
    else{
        shoppingCart[id]  = 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
}
const getStoredCart = ()=>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const removeData = (id)=>{
    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
      const shoppingCart = JSON.parse(storedCart);
      if(id in shoppingCart){
       delete shoppingCart[id];
        localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
      }
    }
}
export{addData, getStoredCart, removeData};

