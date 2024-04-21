import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:4321/",
});

export default server;
