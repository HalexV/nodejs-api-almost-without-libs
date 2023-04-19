import { randomUUID } from "node:crypto";

export default class Task {
  constructor({ title, description }) {
    this.id = randomUUID();
    this.title = title;
    this.description = description;
    this.completed_at = null;
    this.created_at = new Date();
    this.updated_at = null;
  }
}
