import { Router as ExpressRouter } from "express";
import { EmailController } from "src/_application/controllers/sendEmail/Email.controller";

export const emailRoutes = (router: ExpressRouter) => {
  const emailController = new EmailController();

  /**
   * @swagger
   * /appointment:
   *  post:
   *   tags:
   *    - Appointment
   *   summary: Create a new appointment
   *   requestBody:
   *    required: true
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/components/schemas/Appointment'
   *   responses:
   *    201:
   *     description: Appointment created
   */
  router.post("/email", emailController.send);

  return router;
};
