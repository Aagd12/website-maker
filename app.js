const express = require("express");
const app = express();
const port = 80;
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile);

app.get("/", (req, res) => {
    res.render('index.html');
});
app.get("/about", (req, res) => {
    res.send('about');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});