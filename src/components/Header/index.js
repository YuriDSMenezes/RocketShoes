import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

import { MdShoppingBasket } from "react-icons/md";

import Logo from "../../assets/images/logo.svg";

import { Container, Cart } from "./styles";

function Header({cartSize}) {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state=> ({
  cartSize: state.cart.length, //primeiro cart passamos como parametro e o segundo é o nome do reducer
}))(Header)