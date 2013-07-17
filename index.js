var express = require("express")
  , stylus  = require("stylus")
  , nib     = require("nib")
  , app     = module.exports = express();

app.configure(function() {
  app.set("port", process.env.PORT || 5000);
  app.set("view engine", "jade");
  app.set("views", __dirname + "/views");
  app.use(express.logger("dev"));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  if (app.get('env') == "development") {
    app.use(stylus.middleware({
      src: __dirname + "/public",
      dest: __dirname + "/public",
      compile: function(str, path) {return stylus(str).set("filename", path).use(nib());}
    }));

    app.use(express.static(__dirname + "/public"));
  }
  app.locals.pretty = true;
});

app.configure("development", function() {
  app.use(express.errorHandler());
});

app.get("/", function(req, res) {
  return res.render("index", {projects: require("./projects.json")});
});

app.listen(app.get('port'), function() {
  console.log("listening on port " + app.get('port') + " in env " + app.get("env"));
});
