import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodContext";

function Desserts() {
  const [foods] = useFood();
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    setDesserts(
      foods
        .filter((p) => {
          return p.category === "Амттан"
        })
        .slice(0, 4)
    )
  }, [foods]);

  return (
    <Container>
      <div className="row">
        {desserts.map((i, index) => {
          return (
            <Card
              key={index}
              img={i.image}
              name={i.name}
              discountPrice={i.discountPrice}
              price={i.price}
              sales={i.sales}
              percent={i.discountPercentage}
              ingredients={i.ingredients}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default Desserts;
