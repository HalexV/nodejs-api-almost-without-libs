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

  async select({ table, filters, exact = false }) {
    const filterArray =
      typeof filters === "object" ? Object.entries(filters) : [];

    if (filterArray.length === 0) return this.#database[table];

    if (exact) {
      const result = this.#database[table].filter((data) => {
        const result = true;

        for (const [key, value] of filterArray) {
          if (!data[key]) return false;

          const doesInclude = data[key].toLowerCase() === value.toLowerCase();

          if (!doesInclude) return false;
        }

        return result;
      });

      return result;
    }

    const result = this.#database[table].filter((data) => {
      const result = true;

      for (const [key, value] of filterArray) {
        if (!data[key]) return false;

        const doesInclude = data[key]
          .toLowerCase()
          .includes(value.toLowerCase());

        if (!doesInclude) return false;
      }

      return result;
    });

    return result;
  }

  async update(table, data, id) {
    const index = this.#database[table].findIndex((task) => {
      return task.id === id;
    });

    this.#database[table][index] = data;

    await this.#persist();
  }

  async delete(table, id) {
    const index = this.#database[table].findIndex((task) => {
      return task.id === id;
    });

    if (index < 0) throw new Error("Index does not exist");

    this.#database[table].splice(index, 1);

    await this.#persist();
  }
}

const database = new Database();

export default database;
