import jwt from "jsonwebtoken";
import User from "../database/models/users.js";

const isAuthenticated = async (req, res, next) =>{
    const { userLoginToken } = req.cookies;
    if(userLoginToken) {
        const userDatabaseId = jwt.verify(userLoginToken, process.env.JWT_BUFFER);
        next();
    } else{
        res.redirect('/login')
    }
};

export default isAuthenticated