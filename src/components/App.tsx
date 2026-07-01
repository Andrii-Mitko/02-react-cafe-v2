import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import Product from "./Product";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    //  Використовуємо setClicks для зміни стану clicks
    setClicks(clicks + 1);
  };
  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <button onClick={handleClick}>Current: {clicks}</button>;
    </>
  );
}
