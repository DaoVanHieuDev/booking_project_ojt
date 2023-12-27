export const createError = (satus , message) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Not found';
    return error;
}