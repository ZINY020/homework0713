import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Main() {
  // useNavigate import해서 사용
  const navigate = useNavigate();

  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likes: 100,
    },
    {
      id: 2,
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    {
      id: 3,
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likes: 300,
    },
  ]);

  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              // a 태그 X & 추가적인 코드 짤 수 있음
              alert("진짜 이동할꺼야??");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>

          {/* 링크 코드로 페이지를 이동 */}
          {/* {products페이지에 state로 productList 전달} */}
          <Link to="/products" state={productList}>
            더보기
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {productList.map((product) => {
              return (
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
              );
            })}
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
