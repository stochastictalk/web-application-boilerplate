import DeleteItemButton from "../DeleteItemButton/DeleteItemButton";
import "./ExistingItemCard.scss"

import Item from "../../types/Item";

export default function ExistingItemCard({item}: {item: Item}) {
    return <li className="ExistingItemCard">
      <div className="ExistingItemCard--content">
          <div className="ExistingItemCard--description">
            {item.description}
          </div>
          <div className="ExistingItemCard--timestamp">
            {item.timestamp}
          </div>
        </div>
      <DeleteItemButton item_id={item.item_id}/>
    </li>
}
  