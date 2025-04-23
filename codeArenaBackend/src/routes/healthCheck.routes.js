import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";

const router = Router();


/**
 * @swagger
 * /api/v1/healthcheck/health:
 *   get:
 *     summary: Health Check
 *     description: Returns the health status of the application.
 *     responses:
 *       200:
 *         description: Application is healthy.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "OK"
 */
router.get("/health", healthCheck);

export default router;

