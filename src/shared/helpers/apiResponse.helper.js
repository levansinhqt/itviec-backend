
export const apiSuccess = (res, data = null, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
}

export const apiError = (res, message = 'Error', statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message,
    });
}