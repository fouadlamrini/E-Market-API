
function errorHandler(err, req, res, next) {
    console.log('error:',err);
    console.error(err.stack); 
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
}

module.exports = errorHandler;