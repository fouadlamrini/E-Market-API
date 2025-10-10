
function errorHandler(err, req, res, next) {
    console.log('error:',err.message);
    console.error(err.stack); 
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
         path: req.originalUrl,
        method: req.method
    });
}

module.exports = errorHandler;