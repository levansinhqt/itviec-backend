
import NotFoundError from "../exceptions/NotFoundError.exception.js";

export const notFoundHandler = (req, res, next) => {
  next(new NotFoundError());
};