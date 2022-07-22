import { useState } from "react";
import { useQuery, useMutation, useQueryClient} from 'react-query'
import axios from "axios";

import './App.scss';

// TODO: relocate components and styles to /components. 

async function postItem(item) {
  return axios.post("http://127.0.0.1:2740/write", item)
}

async function fetchItems() {
  return axios.get("http://127.0.0.1:2740/read")
    .then(response => response.data)
    .catch(error => error);
}

async function deleteItem(item_id) {
  return axios.post("http://127.0.0.1:2740/delete", {"item_id": item_id})
}

function DeleteButton({item_id}) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items")
    },
  });

  return <button
    className="item-card--button delete"
    onClick={() => deleteMutation.mutate(item_id)}>
    Delete
  </button>
}

function ItemCard({item_id, description}) {
  return <li key={item_id}>
    <div className="item-card--content">{description}</div>
    <DeleteButton item_id={item_id}/>
  </li>
}

function NewItemCard() {
  let [item, setItem] = useState({
    description: ""
  });

  const queryClient = useQueryClient();

  const postMutation = useMutation(postItem, {
    onSuccess: () => {
      setItem({ description: "" });
      queryClient.invalidateQueries("items")
    },
  });

  return <li className="item-card new">
    <input
      autoFocus
      type="text"
      className="item-card--input"
      value={item.description}
      onChange={ (event) => setItem({
          ...item,
          description: event.target.value
        })}
    />
    <button className="item-card--button add"
      onClick={() => {
        postMutation.mutate(item)
      }
    }
    >
      Add
    </button>
  </li>
}

function ExistingItemCard({description, item_id, timestamp}) {
  return <li className="item-card existing">
    <div className="item-card--content">
        <div className="item-card--description">
          {description}
        </div>
        <div className="item-card--timestamp">
          {timestamp}
        </div>
      </div>
    <DeleteButton item_id={item_id}/>
  </li>
}

function ExistingItemCards() {
  let { data, isLoading, isError } = useQuery(["items"], fetchItems);

  if (isLoading) {
    return <p>Retrieving records...</p>
  }

  if (isError) {
    return <p>Error!</p>
  }

  return <>
    {
      data.map(item => <ExistingItemCard {...item} />)
    }
  </>
}


function App() {

  return (
    <div className="App">
      <h1>Boilerplate.</h1>
      <ul>
        <NewItemCard />
        <ExistingItemCards />
      </ul>
    </div>
  );
}

export default App;
