import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import CandidateRouter from './modules/auth/routes/candidate-auth.route.js';
import errorHandler from './shared/middlewares/errorHandler.middeware.js';


const app = express();

// 0. Route Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 1. Middleware xử lý CORS và phân tích JSON
app.use(cors());
app.use(express.json());

// 2. Định tuyến các route
app.use('/api/v1/candidate', CandidateRouter);

// 3. Middleware xử lý 404 - Not Found
app.use('*path', (req, res) => {
  res.status(404).json({
    status: error,
    message: 'Not found'})
});

// 4. Middleware xử lý lỗi
app.use(errorHandler);

export default app;