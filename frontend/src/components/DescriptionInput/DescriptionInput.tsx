import "./DescriptionInput.scss";

import Item from "../../types/Item";

export default function DescriptionInput(
  {item, setItem}: {item: Item, setItem:  React.Dispatch<React.SetStateAction<Item>>}
  ) {
    return <input
      autoFocus
      type="text"
      className="DescriptionInput"
      value={item.description}
      onChange={ (event) => setItem({
          ...item,
          description: event.target.value
        })}
    />
}
  