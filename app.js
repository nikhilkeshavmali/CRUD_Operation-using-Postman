import express from "express";

const app = express();

const users = ["Atul", "Nikhil", "Harish"];

app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/get-data", (req, res) => {
  let { name, pass } = req.query;
  res.json({
    message: `name ${name}, password ${pass}`,
  });
});

app.delete("/delete-user", (req, res) => {
  let delete_user = users.pop();
  res.json({
    message: "Suceessfuly delteeddd",
    data: delete_user,
    currentDta: users,
  });
});

app.patch("/update-user", (req, res) => {
  let { userName } = req.body;
  console.log(req.body);

  users.push(userName);

  res.json({
    massage: "Data Added",
    data: userName,
    current: users,
  });
});

app.post("/collect-data", (req, res) => {
  const data = req.body;
  console.log("Data received:", data);
  res.json({
    status: "success",
    received: data,
  });
});

app.listen(8080, () => {
  console.log(`running server on 8080`);
});
