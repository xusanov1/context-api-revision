import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import { NavLink } from "react-router-dom";
import axios from "../../api/axios";
import "./SingleProduct.css"

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const data = useParams();

  useEffect(() => {
    axios(`/shows/${data.productId}`)
      .then(response => setProduct(response.data))
  }, []);

  return (
    <div className="container">
            <div className="wrapper">
                {
                  product && (
                    <div className="products">
                        <div className="card">
                        <img src={product.image.original} alt={product.title} />
                        <div className="card-text">
                        <h2>{product.name}</h2>
                        <p>Data: {product.ended}</p>
                        <h3>Language: {product.language}</h3>
                        <span>{product.summary}</span>
                        </div>
                        </div>
                    </div>
                  )
                }
                
            </div>
        </div>
  )
}

export default SingleProduct