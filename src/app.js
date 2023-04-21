import http from "node:http";
import parseJson from "./middlewares/parseJson.js";
import router from "./routes/router.js";
import parseQuery from "./middlewares/parseQuery.js";

const app = http.createServer(async (req, res) => {
  const { method, url } = req;

  await parseQuery(req, res);
  await parseJson(req, res);

  const uri = url.split("?")[0];

  const route = Array.from(router.entries()).find(([path, handler]) => {
    const result = `${method}${uri}`.match(path);
    if (result) {
      req.params = { ...result.groups } ?? {};
      return true;
    }
  });

  const routeHandler = route ? route[1] : null;

  if (routeHandler) return await routeHandler(req, res);

  return res.end();
});

export default app;
