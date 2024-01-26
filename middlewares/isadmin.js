const isAdmin = (req, res, next) => {
    const adminCheck = currentUser.admin;
    if(adminCheck) {
        next();
    } else {
        res.send('unauthorized')
    };
};

export default isAdmin