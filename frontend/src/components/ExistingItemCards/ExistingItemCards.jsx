import { useQuery } from "react-query";

import fetchItems from "../api/fetchItems";
import ExistingItemCard from "../ExistingItemCard/ExistingItemCard";

export default function ExistingItemCards() {
    let { data, isLoading, isError } = useQuery(["items"], fetchItems);
  
    if (isLoading) {
      return <p>Retrieving records...</p>
    }
  
    if (isError) {
      return <p>Error!</p>
    }
  
    return <>{
        data.map(item => <ExistingItemCard {...item} />)
      }</>
}