import fs from "node:fs/promises";
const databasePath = new URL("./db.json", import.meta.url);

class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  async #persist() {
    await fs.writeFile(databasePath, JSON.stringify(this.#database), "utf-8");
  }

  async insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    await this.#persist();

    return data;
  }

  async select({ table, filters }) {
    return this.#database[table];
  }
}

const database = new Database();

export default database;
