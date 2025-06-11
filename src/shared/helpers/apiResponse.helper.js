
export const apiSuccess = (res, data = null, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
        status: 'success',
        message,
        data
    });
}

export const apiError = (res, message = 'Error', statusCode = 500) => {
    return res.status(statusCode).json({
        status: 'error',
        message,
    });
}