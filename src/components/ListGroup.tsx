import {MouseEvent, useState} from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  //Event handler
  //const handleClick = (index: Number, event: MouseEvent) => console.log(event);
  // {items.length === 0 && <p>list is empty</p>} //! it is new solution

  const [selectedIndex, setSelectedIndex] = useState(-1); //Hook

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length == 0 ? <p>list has no items</p> : null} */}
      {items.length === 0 && <p>list is empty</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => (
              setSelectedIndex(index), console.log(index), onSelectItem(item)
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
