/*
    - Complete the Middleware grantAccessTo to manage access control for userRoutes. 
    - The middleware takes an array of roles as the parameter
    - Access should be granted to all roles in the parameter
    - Throw an error 403(Forbidden), if the role doesnt have access, in the given format: 
    {
        "status": "error",
        "message": "Access Denied"
    }
*/

function grantAccessTo(roles) {
    try {
        /*
        Write your middleware here.
        Steps: 
        - Define a middleware function that takes the request, response, and next function as parameters.
        - Extract the 'role' from req.body.
        - Check if the required 'role' is present in the array.
        - Return a valid response if access cannot be granted.
        */
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "Unable to check access level"
        })
    }
}

// Export the middleware function as a module.
module.exports = { /*...*/ };