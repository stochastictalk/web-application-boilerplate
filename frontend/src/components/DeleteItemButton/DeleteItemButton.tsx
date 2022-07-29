import { useMutation, useQueryClient} from "react-query";

import deleteItem from "../api/deleteItem";

import "./DeleteItemButton.scss";


export default function DeleteItemButton({item_id}: {item_id: string}) {
    const queryClient = useQueryClient();
  
    const deleteMutation = useMutation(deleteItem, {
      onSuccess: () => {
        queryClient.invalidateQueries(["items"])
      },
    });
  
    return <button
      className="DeleteItemButton"
      onClick={() => deleteMutation.mutate(item_id)}>
      Delete
    </button>
}