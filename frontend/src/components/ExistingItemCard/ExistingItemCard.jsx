import DeleteItemButton from "../DeleteItemButton/DeleteItemButton";
import "./ExistingItemCard.scss"

export default function ExistingItemCard({description, item_id, timestamp}) {
    return <li className="ExistingItemCard">
      <div className="ExistingItemCard--content">
          <div className="ExistingItemCard--description">
            {description}
          </div>
          <div className="ExistingItemCard--timestamp">
            {timestamp}
          </div>
        </div>
      <DeleteItemButton item_id={item_id}/>
    </li>
}
  