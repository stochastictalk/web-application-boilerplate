import { useState } from "react";

import DescriptionInput from "../DescriptionInput/DescriptionInput";
import AddItemButton from "../AddItemButton/AddItemButton";

import "./NewItemCard.scss";

export default function NewItemCard() {
    let [item, setItem] = useState({
      description: ""
    });
  
    return <li className="NewItemCard">
      <DescriptionInput item={item} setItem={setItem}/>
      <AddItemButton item={item} setItem={setItem}/>
    </li>
}
  