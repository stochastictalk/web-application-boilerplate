import React from "react";
import { useMutation, useQueryClient} from "react-query";

import postItem from "../api/postItem";

import "./AddItemButton.scss";

import Item from "../../types/Item";

export default function AddItemButton(
  {item, setItem}: {item: Item, setItem:  React.Dispatch<React.SetStateAction<Item>>}
  ) {
    const queryClient = useQueryClient();
  
    const postMutation = useMutation(postItem, {
      onSuccess: () => {
        setItem({ description: "", item_id: ""});
        queryClient.invalidateQueries(["items"])
      },
    });
  
    return <button className="AddItemButton"
      onClick={() => {
        postMutation.mutate(item)
      }
    }>
      Add
    </button>
}
  