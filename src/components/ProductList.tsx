import React, {useEffect, useState} from "react";

// interface Props {
//   category: string;
// }
const ProductList = ({category}: {category: string}) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in", {category});
    setProducts(["clothing", "household"]);
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
