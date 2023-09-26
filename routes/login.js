const express = require('express');

const router = express.Router();

router.get("/login", (req, res, next) => {
    res.send("<form action='/auth' method='POST'><input placeholder='UserName' type='text' name='name'/><button type='submit'>Login</button></form>")
})
router.post("/auth", (req, res, next) => {
    res.send(`
    <html>
    <body>
        <script>
                localStorage.setItem("username", "${req.body.name}");
                window.location.href = "/?message=success";
        </script>
    </body>
    </html>
`);
})
module.exports = router;