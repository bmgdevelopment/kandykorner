import React from 'react'; 
import './KandyKorner.css';
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"

export const KandyKorner = () => (
    <> 
        <h1>🍬 Kandy Korner 🍬 </h1>

        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider >
        </article>

        <h2>Products</h2>
        <article className="products">
            <ProductProvider>
                <ProductList />
            </ProductProvider >
        </article>
    </>
)