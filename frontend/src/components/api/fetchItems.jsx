import axios from "axios";

export default async function fetchItems() {
    return axios.get("http://127.0.0.1:2740/read")
      .then(response => response.data)
      .catch(error => error);
}