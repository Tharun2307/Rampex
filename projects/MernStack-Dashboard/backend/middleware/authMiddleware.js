const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = res.cookies.token;

    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    };

    const decoded = jwt.verify(token, "Secret123");

    req.userId = decoded.id;
    next();
}