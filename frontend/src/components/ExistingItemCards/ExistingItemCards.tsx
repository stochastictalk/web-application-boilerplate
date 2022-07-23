import { useQuery } from "react-query";

import fetchItems from "../api/fetchItems";
import ExistingItemCard from "../ExistingItemCard/ExistingItemCard";

import Item from "../../types/Item";

export default function ExistingItemCards() {
    let { data, isLoading, isError } = useQuery(["items"], fetchItems);
  
    if (isLoading) {
      return <p>Retrieving records...</p>
    }
  
    if (isError) {
      return <p>Error!</p>
    }
  
    return <>{
        data.map((item: Item) => <ExistingItemCard item={item} />)
      }</>
}