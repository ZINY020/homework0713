import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Product() {
  // url의 id가 달라지면 다른 상품을 보이게 하자!

  const location = useLocation();
  const product = location.state;
  console.log(product);

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {product.name}
          </div>
          <div>
            <h3>가격: {product.price}</h3>
            <h3>좋아요: {product.likes}</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
                height: "30px",
                fontSize: "15px",
              }}
            >
              {product.options.map((opt) => {
                return <option>{opt}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
