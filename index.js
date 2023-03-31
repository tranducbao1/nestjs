import express from "express";
const app = express();

app.get("", (req, res) => {
  res.send("Thanh cong");
});

app.get("/users", (req, res, next) => {
  res.json([
    {
      id: 1,
      name: "Giang",
      address: "QN",
    },
    {
      id: 1,
      name: "Vu",
      address: "QN",
    },
  ]);
});
//
app.listen(3333, "localhost", () => {
  console.log("connect OK");
});
