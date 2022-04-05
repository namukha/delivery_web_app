import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFood } from "../contexts/FoodContext";

function Sales() {
  const [foods] = useFood();
  const [sale, setSale] = useState([]);
  useEffect(() => {
    setSale(
      foods
        .filter((p) => {
          return p.sales === true
        })
        .slice(0, 4)
    )
  }, [foods]);
  return (
    <Container>
      <div className="row ">
        {sale.map((i, index) => (
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
        ))}
      </div>
    </Container>
  );
}
export default Sales;
