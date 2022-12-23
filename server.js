const express = require("express");
const { graphqlUploadExpress } = require("graphql-upload");
const stream = require("stream");

const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser());
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");

require("dotenv").config();
const mongoose = require("mongoose");
const ImagesCollection = require("./models/imageSchema");

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT } = process.env;
const mongoURL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(mongoURL)
  .then(() => console.log("successfully connect to the database Atlas"))
  .catch((err) => console.log(`error connecting to the database Atlas ${err}`));

app.use(graphqlUploadExpress());

app.use(express.static(__dirname + "/build"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});
//serving image from databse
app.get("/db/images/:filename", async (req, res) => {
  const image = await ImagesCollection.findOne({
    filename: req.params.filename,
  });
  if (image) {
    const readStream = stream.Readable.from(image.data);
    readStream.pipe(res);
  } else {
    res.send("no image found");
  }
});

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen(PORT, () =>
    console.log(`🚀 apolloServer Server ready at  ${PORT}`)
  );
});
