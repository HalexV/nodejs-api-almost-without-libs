export default async function parseJson(req, res) {
  const { "content-type": contentType } = req.headers;

  if (contentType === "application/json") {
    const chunks = [];

    for await (const chunk of req) {
      chunks.push(chunk);
    }

    try {
      req.body = JSON.parse(chunks.join().toString());
    } catch (error) {
      req.body = null;
    }

    res.setHeader("Content-type", "application/json");
  }
}
