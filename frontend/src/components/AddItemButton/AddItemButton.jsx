import { useMutation, useQueryClient} from "react-query";

import postItem from "../api/postItem";

import "./AddItemButton.scss";

export default function AddItemButton({item, setItem}) {
    const queryClient = useQueryClient();
  
    const postMutation = useMutation(postItem, {
      onSuccess: () => {
        setItem({ description: "" });
        queryClient.invalidateQueries("items")
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
  