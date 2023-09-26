const express = require('express');
const fs = require('fs');
const router = express.Router();
router.get("/", (req, res, next) => {
    if (req.query.message === "success") {
        let data = fs.readFile("chat.txt", (err, data) => {
            if (data === undefined) {
                data = "No Chats Exist!"
            }
            res.send(`
                <html>
                <body>
                    <form action='/message' method='POST'>
                    <div>
                    ${data}
                    </div>
                        <input placeholder='Enter message' type='text' name='message'/>
                        <input type='hidden' name='username' id='username'/>
                        <button type='submit'>send</button>
                    </form>
                    <script>
                        const username = localStorage.getItem("username");
                        document.getElementById("username").value = username;
                    </script>
                </body>
                </html>
            `);
        })
    }
    else {
        res.send("<h1>Please Login...</h1>")
    }
})
router.post("/message", (req, res, next) => {
    let Uname = req.body.username;
    const message = req.body.message;
    fs.appendFileSync("chat.txt", `${Uname}:${message}`);
    res.redirect("/?message=success");
})
module.exports = router;