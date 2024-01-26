const isAuthenticated = async (req, res, next) =>{
    const { userLoginToken } = req.cookies;
    if(userLoginToken) {
        const userDatabaseId = jwt.verify(userLoginToken, process.env.JWT_BUFFER);
        const currentUser = await userModel.findOne({_id: userDatabaseId});
        next();
    } else{
        res.redirect('/login')
    }
};

export default isAuthenticated