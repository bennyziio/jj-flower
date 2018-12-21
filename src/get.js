import axios from "axios";

export function getData() {
  return axios.get("http://localhost/jj_tutorial/showUser.php");
}
