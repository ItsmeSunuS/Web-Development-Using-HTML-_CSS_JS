import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;
const DB_FILE = "./db.json";

app.use(express.json());


// Read students from db.json
const readStudents = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
};

// Write students to db.json
const writeStudents = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};


// Home route (optional, for browser)
app.get("/", (req, res) => {
  res.send("Student Management System API is running");
});

// GET all students
app.get("/students", (req, res) => {
  const students = readStudents();
  res.json(students);
});

// POST add new student
app.post("/students", (req, res) => {
  const students = readStudents();
  const { id, name, course, year } = req.body;

  if (!id || !name || !course || !year) {
    return res.status(400).json({
      message: "All fields (id, name, course, year) are required",
    });
  }

  const exists = students.find((s) => s.id === id);
  if (exists) {
    return res.status(400).json({ message: "Student with this ID already exists" });
  }

  students.push({ id, name, course, year });
  writeStudents(students);

  res.status(201).json({ message: "Student added successfully" });
});

// PUT update student by id
app.put("/students/:id", (req, res) => {
  const students = readStudents();
  const id = Number(req.params.id);
  const { name, course, year } = req.body;

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) students[index].name = name;
  if (course) students[index].course = course;
  if (year) students[index].year = year;

  writeStudents(students);
  res.json({ message: "Student updated successfully" });
});

// DELETE student by id
app.delete("/students/:id", (req, res) => {
  const students = readStudents();
  const id = Number(req.params.id);

  const newStudents = students.filter((s) => s.id !== id);

  if (newStudents.length === students.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  writeStudents(newStudents);
  res.json({ message: "Student deleted successfully" });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
