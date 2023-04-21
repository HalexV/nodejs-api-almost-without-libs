export default function buildRegexPath(path) {
  const paramsRegex = /:([a-zA-Z\-_]+)/g;
  path = `^${path}$`;
  const replacementeString = "(?<$1>[\\w\\d\\-]+)";

  return path.replaceAll(paramsRegex, replacementeString);
}
