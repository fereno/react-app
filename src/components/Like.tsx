import React, {useState} from "react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({onClick}: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart size={40} onClick={toggle} />;

  return <AiOutlineHeart size={40} onClick={toggle} />;
};

export default Like;
