import axios from "axios";

export default async function deleteItem(item_id) {
    return axios.post("http://127.0.0.1:2740/delete", {"item_id": item_id})
  }
  