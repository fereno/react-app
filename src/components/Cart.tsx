import Button from "./Button";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

function Cart({cartItems, onClear}: Props) {
  return (
    <>
      <div>cart</div>
      {cartItems.map((item) => (
        <li key={item}>item</li>
      ))}
      <Button onClick={onClear}>clear cart</Button>
    </>
  );
}

export default Cart;
