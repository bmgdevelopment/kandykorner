import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext) //the function using the productContext deconstructs the arguments content/context

    useEffect(() => {
        console.log("ProductList: useEffect - getproducts")
        getProducts()
    }, [])

    return (
        <section className="products">
        {
            products.map(product => {
                return (
                    <div className="product" id={`product--${product.id}`}>
                        <div className="product__name">
                            Name: <b>{ product.name }</b>
                        </div>
                        <div className="product__typeId">
                            Product Id : {product.id}
                        </div>
                        <div className="product__type">
                            Product Type: {product.productType.type}
                            </div>
                        <div className="product__typeId">
                            Product Type Id : {product.productTypeId}
                            </div>
                        <div className="product__price">
                            Price: ${product.price}
                        </div>
                    </div>
                )
            })
        }
        </section>
    )
}