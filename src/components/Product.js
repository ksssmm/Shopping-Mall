import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.ok) {
          setProduct(await response.json());
        } else {
          console.error("API call failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return <></>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              <i className="fa fa-star"></i>
              {product.rating && product.rating.rate}
            </p>
            <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
            <p className="lead">{product.description}</p>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => addProduct(product)}
              >
                장바구니에 담기
              </button>
              <NavLink to="/cart" className="btn btn-dark">
                장바구니로 이동
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
