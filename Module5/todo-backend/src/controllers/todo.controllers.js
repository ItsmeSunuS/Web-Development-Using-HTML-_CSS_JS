import TodoModel from '../models/todo.model.js';
import ApiError from '../utils/ApiError.js';

export const getTodos = async (req, res, next) => {
  try {
    const todos = TodoModel.getAll();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const getTodoById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const todo = TodoModel.getById(id);

    if (!todo) {
      throw new ApiError(404, 'Todo not found');
    }

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      throw new ApiError(400, 'Title is required');
    }

    const todo = TodoModel.create(title);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const todo = TodoModel.update(id, req.body);

    if (!todo) {
      throw new ApiError(404, 'Todo not found');
    }

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const deleted = TodoModel.delete(id);

    if (!deleted) {
      throw new ApiError(404, 'Todo not found');
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
