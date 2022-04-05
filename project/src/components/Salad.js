import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodContext";

function Salad() {
  const [foods] = useFood()
  const [salad, setSalad] = useState([])
  useEffect(() => {
    setSalad(
      foods
        .filter((p) => {
          return p.category === "Салад ба зууш"
        })
        .slice(0, 4)
    )
  }, [foods]);

  return (
    <Container>
      <div className="row">
        {salad.map((data, index) =>
        (
          <Card
            key={index}
            img={data.image}
            name={data.name}
            discountPrice={data.discountPrice}
            price={data.price}
            sales={data.sales}
            percent={data.discountPercentage}
            ingredients={data.ingredients}
          />
        )
        )}
      </div>

    </Container>
  );
}
export default Salad;
