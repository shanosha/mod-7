// Custom Error class
class ApiError extends Error {
  status;
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

// Checks the error type, and changes the message if it matches one of the custom classes.
function handleError(e) {

    if(e instanceof ApiError) {
        console.error(`API Error (${e.status}):`, e.message);
    }
    else {
        console.error("Unknown error:", e);
    }
    
}

export { ApiError, handleError }