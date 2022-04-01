import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodContext";

function MainDishMenu() {
  const [foods] = useFood();
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    setMainMenu(
      foods
        .filter((p) => {
          return p.category === "үндсэн хоол"
        })
        .slice(0, 4)
    )
    console.log(foods);

  }, [foods])
  return (
    <Container>
      <div className="row">
        {mainMenu.map((data) => {
          return (
            <Card
              // data={data}
              img={data.img}
              name={data.name}
              discountPrice={data.discountPrice}
              price={data.price}
              sales={data.sales}
              percent={data.discountPercentage}
              ingredients={data.ingredients}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default MainDishMenu;
