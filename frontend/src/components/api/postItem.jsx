import axios from "axios";

export default async function postItem(item) {
    return axios.post("http://127.0.0.1:2740/write", item)
}
  