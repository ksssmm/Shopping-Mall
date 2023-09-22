import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart, incQty, decQty } from "../redux/action";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="mb-5">장바구니</h2>
      <style jsx>{`
        .tiny-btn {
          padding: 0.1rem 0.2rem;
          margin: 0 0.5rem;
        }
        th:nth-child(4),
        td:nth-child(4) {
          width: 100px;
          text-align: center;
        }
        .total-amount {
          font-size: 1.5rem;
          text-align: right;
        }
        .proceed-section {
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          align-items: flex-end;
        }
        .product-image {
          width: 70px;
          height: 80px;
          object-fit: contain;
        }
      `}</style>

      {cartItems.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            fontSize: "1.5rem",
          }}
        >
          장바구니가 비어 있습니다.
        </div>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>제품명</th>
                <th>가격</th>
                <th>수량</th>
                <th>총액</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      className="product-image"
                      src={item.image}
                      alt={item.title}
                      width="50"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-dark tiny-btn"
                      onClick={() => dispatch(decQty(item))}
                    >
                      -
                    </button>
                    <strong>{item.qty}</strong>
                    <button
                      className="btn btn-dark tiny-btn"
                      onClick={() => dispatch(incQty(item))}
                    >
                      +
                    </button>
                  </td>
                  <td>${item.price * item.qty}</td>
                  <td>
                    <button
                      className="btn btn-dark btn-sm"
                      onClick={() => dispatch(delCart(item))}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="proceed-section mt-5">
            <div className="total-amount mb-2">
              <strong>주문 총액: ${totalAmount.toFixed(2)}</strong>
            </div>
            <button className="btn btn-dark">다음 진행</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
