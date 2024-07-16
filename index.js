import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.post("/submit", (req, res) =>{
    const noun = getRandomItem(adj);
    res.render("index.ejs", {noun});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const adj = ["Tokopedia", "Shopee", "Blibli", "Lazada", "OLX", "Alibaba"];
function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
}