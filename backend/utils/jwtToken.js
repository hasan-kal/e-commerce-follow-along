const sendToken = (user, statuscode, res) => {
    const token = user.getJwtToken();
    const options = {
    expires: new Date(
    Date.now() + 90 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
    }) ;
    };
    
    module.exports = sendToken;