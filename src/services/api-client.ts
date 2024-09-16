import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b90ad44c91f2416bb6443a7c30312bcd",
  },
});
