import http from "node:http";

const app = http.createServer((req, res) => {
  res.end("OK");
});

export default app;
