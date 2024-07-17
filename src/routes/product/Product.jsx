import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { NavLink } from "react-router-dom";
import "./Product.css";


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("/shows")
            .then((response) => setProducts(response.data))
            .catch((err) => console.log(err))
    }, [])


const [current, setCurrent] = useState(6)

const addMovie = () => {
    setCurrent(current + 3)
}
console.log(current);
  return (
        <div className="box">
            <div className="wrapper">
                {products.slice(0, current).map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image.original} alt={product.title} />
                        <h2>{product.name}</h2>
                        <p>Genres:  {product.genres[0,1,2]}</p>
                        <strong>Language:  {product.language}</strong>
                        <div className="btn">
                        <a href={product.url}>View Serial</a>
                        <NavLink to={`/single-product/${product.id}`}>Single Product</NavLink>
                    </div>
                    </div>
                ))}
                {
                    products.length === 0 && <h2>No products found</h2>
                }
            </div>

            <div className="singleButton">
                <button className="singleBtn" onClick={addMovie}>View All</button>
            </div>
        </div>
  )
}

export default Products