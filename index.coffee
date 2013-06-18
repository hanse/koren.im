express = require "express"
stylus  = require "stylus"
nib     = require "nib"
app     = module.exports = express()

app.configure ->
  app.set "views", "#{__dirname}/views"
  app.set "view engine", "jade"
  app.use express.logger()
  app.use express.cookieParser()
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use stylus.middleware(
    src: "#{__dirname}/public/css",
    compile: (str, path) ->
      stylus(str).set("filename", path).set("compress", no).use(nib())
  )
  
  app.use express.static(__dirname + "/public")
  app.locals.pretty = yes


app.get "/", (req, res) ->
  res.render "index", projects: []

app.listen (process.env.port or 5000), ->
  console.log "up and running"


