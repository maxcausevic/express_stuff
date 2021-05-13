const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


app.use(cors());
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



app.get("/api/users", (req, res) => {
    res.json(users);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
