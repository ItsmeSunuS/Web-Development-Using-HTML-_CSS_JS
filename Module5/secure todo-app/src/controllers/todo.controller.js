import supabase from "../config/supabase.js";

/* CREATE TODO */
export const createTodo = async (req, res) => {
  const { title } = req.body;
  const { userId } = req.user;

  const { data, error } = await supabase.from("todos").insert([
    { title, userId }
  ]);

  if (error) return res.status(400).json({ message: "Error creating todo" });

  res.status(201).json({ message: "Todo created" });
};

/* GET TODOS */
export const getTodos = async (req, res) => {
  const { userId } = req.user;

  const { data } = await supabase
    .from("todos")
    .select("*")
    .eq("userId", userId);

  res.json(data);
};

/* UPDATE TODO */
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const { userId } = req.user;

  const { data } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", id)
    .eq("userId", userId);

  if (!data.length) {
    return res.status(403).json({ message: "Not authorized" });
  }

  res.json({ message: "Todo updated" });
};

/* DELETE TODO */
export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  const { data } = await supabase
    .from("todos")
    .delete()
    .eq("id", id)
    .eq("userId", userId);

  if (!data.length) {
    return res.status(403).json({ message: "Not authorized" });
  }

  res.json({ message: "Todo deleted" });
};
