# URL-Shortener


### URL-Shortener is composed from Nodejs, MongoDB, EJS. this repo is simple with no fancy error handling, but covers the concept of link-shortener

#

### Preview
```
https://url-shortener-one-rho.vercel.app/
```

## Installation

### Run npm install (Install All packages)

```
npm install
```

#


## Folder Structure

```
- models
  - shortUrls.js
- views
  - index.ejs
- server.js
```

#

## Endpoint: ***/*** Request-Type: ***GET***
```
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls });

  # Renders index.html to the home screen
```


## Endpoint: ***/shortUrls*** Request-Type: ***POST***
```
  const fullUrl = req.body.fullUrl;
  const shortID = ShortId.generate();               # Generate random code
  
  await ShortUrl.create({ full: fullUrl, short: shortID });
  res.redirect("/");

  # Creates fullUrl & shortURl in the Database
```

## Endpoint: ***/shortUrls*** Request-Type: ***POST***
```
app.get("/:shortUrl", async (req, res) => {
  const paramsURL = req.params.shortUrl;
  const shortUrl = await ShortUrl.findOne({ short: paramsURL });

  if (shortUrl == null) return res.status(404);

  shortUrl.clicks++;                                # increment clicks
  shortUrl.save();                                  # save doc

  res.redirect(shortUrl.full);                      # redirect to long-url
});

  # Find one full-URL in the DB from the short-url coming from the params, if it exists redirect to the given full url and also increment clicks, else return 404
```

## 🚀 About Me

**Swaraj Kumar Singh** - Android, IOS & Flutter Developer, Full Stack Web developer, Also interested in AI models, Machine Learning and WEB 3.0.


## 🛠 Skills
Javascript, HTML, CSS, REACT, ANGULAR, BOOTSTRAP, TAILWIND, TYPESCRIPT, PHP, NODEJS, DJANGO, EXPRESSJS, MONGODB, FIREBASE, REDIS, WORDPRESS, DYNAMODB, AWS, PYTHON, WEB SCRAPING, SOCKET.IO, JAVA, KOTLIN, DART, FLUTTER, PYTORCH
