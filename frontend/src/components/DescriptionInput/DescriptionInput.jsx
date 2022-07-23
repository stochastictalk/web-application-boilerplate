import "./DescriptionInput.scss";

export default function DescriptionInput({item, setItem}) {
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
  