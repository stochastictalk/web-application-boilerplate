import React from "react";
import { useState } from "react";

import DescriptionInput from "../DescriptionInput/DescriptionInput";
import AddItemButton from "../AddItemButton/AddItemButton";

import "./NewItemCard.scss";

import Item from "../../types/Item";

export default function NewItemCard() {
    let [item, setItem] = React.useState<Item>({
      description: "",
      item_id: ""
    });
  
    return <li className="NewItemCard">
      <DescriptionInput item={item} setItem={setItem}/>
      <AddItemButton item={item} setItem={setItem}/>
    </li>
}
  