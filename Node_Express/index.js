const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send("hallo ihr schueler");
});
app.listen(3000, () => console.log("Example REST gestartet"));
