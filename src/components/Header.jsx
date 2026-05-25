import logoImg from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

  return <header id="main-header">
    <div id="title">
      <img src={logoImg} alt="A restaurant"/>
      <h1>GudratliFood</h1>
    </div>
    <nav>
      <Button textOnly>Cart ({totalCartItems})</Button>
    </nav>
  </header>
}