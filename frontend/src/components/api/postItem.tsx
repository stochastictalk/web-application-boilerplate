import axios from "axios";

import Item from "../../types/Item";

export default async function postItem(item: Item) {
    return axios.post("http://127.0.0.1:2740/write", item)
}
  