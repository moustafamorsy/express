const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));
app.use(express.static(path.join(__dirname, "public")));

const workingdays = (req, res, next) => {
  const date = new Date();
  const days = date.getDay();
  const hour = date.getHours();

  const dayoff = [0, 6];
  const open = [9, 10, 11, 12, 13, 14, 15, 16];

  if (dayoff.includes(days)) {
    res.redirect("/closing");
  } else if (!open.includes(hour)) {
    res.redirect("/closing");
  }
 next();
};
app.get("/closing", (req, res) => {
  res.render("closing");
});


app.use(workingdays);

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/Aboutus", (req, res) => {
  res.render("Aboutus");
});
app.get("/Contact", (req, res) => {
  res.render("Contact");
});
app.listen(2000, () => {
  console.log("running on 2000");
});
