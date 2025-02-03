import Product from "../Models/product.js";

export function addProduct(req, res){
    console.log(req.user);

    if(req.user == null){
        res.status(401).json({
            messsage: "Please login and try again"
        })
        return
    }
    if(req.user.role != "admin"){
        res.status(403).json({
            messsage: "You are not allowed"
        })
        return
    }

    const data = req.body;
    const newProduct = new Product(data);

    newProduct.save()
    .then(()=>{
        res.json({
            messsage: "Product added"
        })
    })
    .catch((error)=>{
        res.status(500).json({
            error: "Product failed"
        });
    });
}