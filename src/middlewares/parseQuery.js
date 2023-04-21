export default async function parseQuery(req, res) {
  const { url } = req;
  const regex = /\?/;

  if (!regex.test(url)) {
    req.query = {};
    return;
  }

  const decodedURI = decodeURIComponent(url);

  const queryList = decodedURI.split("?")[1];

  const queries = queryList.split("&");

  const query = {};

  queries.forEach((queryString) => {
    const [key, value] = queryString.split("=");

    query[key] = value;
  });

  req.query = query;
}
