import axios from "axios";

const BASEURL = "http://localhost:5000/api";

const http = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
});

export { BASEURL };
