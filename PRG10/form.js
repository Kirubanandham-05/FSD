const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"));
const Student = mongoose.model("Student", {
  name: String,
  age: Number,
  course: String
});
app.get("/", async (req, res) => {
  const students = await Student.find();
  let html = fs.readFileSync("./public/index.html", "utf8");
  let list = "<h2>Student List</h2><ul>";
  students.forEach(s => {
    list += `<li>
      ${s.name} - ${s.age} - ${s.course}
      <a href="/edit/${s._id}">Update</a>
      <a href="/delete/${s._id}">Delete</a>
    </li>`;
  });
  list += "</ul>";
  res.send(html + list);
});
app.post("/add", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/");
});
app.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
app.get("/edit/:id", async (req, res) => {
  const s = await Student.findById(req.params.id);
  res.send(`
    <h2>Update Student</h2>
    <form method="POST" action="/update/${s._id}">
    Name: <input type="text" name="name" value="${s.name}"><br><br>
    Age: <input type="number" name="age" value="${s.age}"><br><br>
    Course: <input type="text" name="course" value="${s.course}"><br><br>
    <button type="submit">Update</button>
    </form>
  `);
});
app.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});