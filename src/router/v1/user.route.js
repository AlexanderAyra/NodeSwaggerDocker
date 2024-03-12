const { Router } = require('express');
const { getUser } = require('../../controller/user.controller')

const router = Router();

router
    .route('/')
    .get(getUser);

/**
 * @openapi
 * /api/user:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */


module.exports = router;