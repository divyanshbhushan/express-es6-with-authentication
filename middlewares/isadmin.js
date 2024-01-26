import jwt from "jsonwebtoken";
import User from "../database/models/users.js";

const isAdmin = async (req, res, next) => {
    const { userLoginToken } = req.cookies;
    if(userLoginToken) {
        const userDatabaseId = jwt.verify(userLoginToken, process.env.JWT_BUFFER);
        const currentUser = await User.findOne({_id: userDatabaseId})
        const adminCheck = currentUser.admin;
        if(adminCheck) {
            next();
        } else {
            res.send('unauthorized')
        }
        next();
    } else{
        res.redirect('/login')
    }

};

export default isAdmin