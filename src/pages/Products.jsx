import React from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>

        <button
          onClick={() => {
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순정렬
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {location.state.map((product) => {
            return (
              <Link to={`/products/${product.id}`} state={product}>
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <p>{product.name}</p>
                  <p>{product.price} 원</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
