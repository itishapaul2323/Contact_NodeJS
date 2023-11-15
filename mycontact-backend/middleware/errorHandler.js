const constants = require('../constants');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode) {
        case constants.VALIDATION_ERROR: 
            res.json ({
                title: "Validation Failed", 
                messgae: err.message, 
                stackTrace : err.stack
            });
            break;
        case constants.NOT_FOUND:  
            res.json ({
                title: "Not Found", 
                messgae: err.message, 
                stackTrace : err.stack
            });
            break;
        case constants.UNAUTHORISED:  
            res.json ({
                title: "Unauthorised", 
                messgae: err.message, 
                stackTrace : err.stack
            });
            break;
        case constants.FORBIDDEN:  
            res.json ({
                title: "Forbidden", 
                messgae: err.message, 
                stackTrace : err.stack
            });
            break;
        case constants.SERVER_ERROR:  
            res.json ({
                title: "Server Error", 
                messgae: err.message, 
                stackTrace : err.stack
            });
            break;
        default:
            console.log('No Error');
            break;
    }

   
    res.json ({title: "Validation Failed", messgae: err.message, stackTrace : err.stack});
}

module.exports = errorHandler;
