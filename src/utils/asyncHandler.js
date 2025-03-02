const asyncHandler = (requestHandlerFunc) => {
    (req, res, next) => {
        Promise.resolve(requestHandlerFunc(req, res, next)).catch((err) => {next(err)})
    }
}


export {asyncHandler}

//2nd method

/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}
    */