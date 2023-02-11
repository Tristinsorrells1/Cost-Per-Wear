const express = require("express");
const app = express();

// to start sever => node server js

app.set("port", process.env.PORT || 3000);
app.locals.title = "Cost Per Wear";

app.locals.data = [
  {
    id: 1,
    name: "Jane",
    tops: [
      {
        id: 1,
        name: "Seamless Bodysuit",
        store: "Abercrombie & Fitch",
        price: 39.95,
        color: "Green",
        type: "Shirts ",
      },
    ],
    bottoms: [],
    dresses: [],
  },
];

app.use(express.static("public"));

app.get("/api/v1/data/:id", (request, response) => {
  const { id } = request.params;
  const user = app.locals.data.find((user) => user.id === parseInt(id));
  if (!user) {
    return response.sendStatus(404);
  }

  response.status(200).json(user);
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
