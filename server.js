const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrls.js");
const ShortId = require("shortid");

const app = express();

mongoose.connect(
  "mongodb+srv://swaraj:mNTeaz8CSfTkc8FI@cluster0.xfyesc6.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

mongoose.set("strictQuery", true);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Render index.html
app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls });
});

// Create Short URL
app.post("/shortUrls", async (req, res) => {
  const fullUrl = req.body.fullUrl;
  const shortID = ShortId.generate();

  await ShortUrl.create({ full: fullUrl, short: shortID });
  res.redirect("/");
});

// Redirect to Long-Url
app.get("/:shortUrl", async (req, res) => {
  const paramsURL = req.params.shortUrl;
  const shortUrl = await ShortUrl.findOne({ short: paramsURL });

  if (shortUrl == null) return res.status(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

// APP SERVER
app.listen(5000, () => {
  console.log("Server listening on 5000");
});
