import axios from "axios";

export default {
  async getUsers() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  },
};
