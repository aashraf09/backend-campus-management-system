export const asyncHandler = async (requestHandler) => {
    try {
        return await Promise.resolve(requestHandler(req, res, next))
    } catch (error) {
        return next(error)
    }
}