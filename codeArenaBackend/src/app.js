import express from 'express';
import morgan from 'morgan';
import logger from './utils/logger.utils.js';
import { swaggerUi, swaggerSpec } from './utils/swagger.utils.js';

const app = express();
const morganFormat = ":method :url :status :response-time ms";

// Middleware to log requests
app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );

// Middleware to Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// import routes
import healthCheckRoutes from './routes/healthCheck.routes.js';


// Use routes
app.use('/api/v1/healthcheck', healthCheckRoutes);

export default app;