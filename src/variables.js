export const config = {
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token")
  }
};
export const base_url = "https://morning-citadel-22943.herokuapp.com";
