import React from "react";

interface Props {
  productCount: number;
}
const NavBar = ({productCount}: Props) => {
  return <div>NavBar {productCount} products</div>;
};

export default NavBar;
