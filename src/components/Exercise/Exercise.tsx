//from App component

import {useState} from "react";
import NavBar from "../NavBar";
import Cart from "../Cart";

function Exercise() {
  const [cartItems, setCartItems] = useState(["product1", "product2"]);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {id: 1, title: "p1", quantity: 1},
      {id: 2, title: "p2", quantity: 1},
    ],
  });

  const handelClick = () => {
    // setGame({...game, player: {...game.player, name: "farno"}});
    //setPizza({...pizza, toppings: [...pizza.toppings, "potato"]});

    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? {...item, quantity: item.quantity + 1} : item
      ),
    });
    console.log(cart);
  };

  return (
    <div>
      <input value="click" type="button" onClick={handelClick} />
      <NavBar productCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    </div>
  );
}

export default Exercise;
