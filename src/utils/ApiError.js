class ApiError extends Error {
    constructor(
        statusCode,
        message,
        error = [],
        stack = '',
    ) {
        super(message)

        this.statusCode = statusCode
        this.message = message
        this.success = false
        this.errors = errors
        this.data = null

        if (stack) {
            this.stack = this.stack
        }
        else {
            this.stack = Error.captureStackTrace(this, this.constructor)

        }

    }
}

export { ApiError }