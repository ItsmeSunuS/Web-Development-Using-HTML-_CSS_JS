let todos = [];
let idCounter = 1;

export default class TodoModel {
  static getAll() {
    return todos;
  }

  static getById(id) {
    return todos.find(todo => todo.id === id);
  }

  static create(title) {
    const todo = { id: idCounter++, title, completed: false };
    todos.push(todo);
    return todo;
  }

  static update(id, data) {
    const todo = this.getById(id);
    if (!todo) return null;

    Object.assign(todo, data);
    return todo;
  }

  static delete(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return false;

    todos.splice(index, 1);
    return true;
  }
}
