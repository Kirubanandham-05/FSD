const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); // serve HTML from public folder

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

const Student = mongoose.model("Student", studentSchema);


// Get all students
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});


// Add student
app.post("/add", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/");
});


// Delete student
app.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});


// Get student for edit
app.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});


// Update student
app.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

// Server start
app.listen(3000, () => console.log("Server running on port 3000"));