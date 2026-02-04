import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import supabase from "./supabaseClient.js";

dotenv.config();
const app = express();
app.use(express.json());

/* ---------------- SIGNUP API ---------------- */
app.post("/signup", async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    // Basic validation
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check duplicate email
    const { data: existingUser } = await supabase
      .from("authusers")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const { error } = await supabase.from("authusers").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword
      }
    ]);

    if (error) {
      return res.status(500).json({ message: "Error registering user" });
    }

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/* ---------------- PROFILE API ---------------- */
app.get("/myprofile", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Name query parameter required" });
    }

    const { data: user, error } = await supabase
      .from("authusers")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (error || !user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
