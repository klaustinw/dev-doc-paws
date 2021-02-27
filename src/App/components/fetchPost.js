import Swal from "sweetalert2";
import { base_url, config } from "../../variables";

async function fetchPost(resource_page, payload, method) {
  if (localStorage.getItem("loading")) Swal.fire("Please Wait", "Requests can take up a second or two", "info");
  method ? method = method : method = "POST";
  if (method.toLowerCase() == "get") throw new Error("Please use useFetch hook or ES6 fetch function instead");
  config.method = method;
  config.body = JSON.stringify(payload);
  try {
    localStorage.setItem("loading", true);
    const response = await fetch(base_url + resource_page, config);
    localStorage.removeItem("loading");
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    Swal.fire("Error", "Failed to fetch data, please check console for more information", "error");
    console.log(error);
    return false;
  }
}

export default fetchPost;
