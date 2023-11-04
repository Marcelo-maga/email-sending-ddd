import { Router as ExpressRouter } from "express";
import { ServiceController } from "src/_application/controllers/appointment/Service.controller";

export const serviceRoutes = (router: ExpressRouter) => {
  const serviceController = new ServiceController();

  /**
   * @swagger
   * /service:
   *  post:
   *   tags:
   *    - Service
   *   summary: Create a new service
   *   requestBody:
   *    required: true
   *    content:
   *     application/json:
   *      schema:
   *       type: object
   *       example:
   *        name: 'Corte de cabelo'
   *        description: 'desc'
   *        price: 23
   *        duration: 2
   *   responses:
   *    201:
   *     description: Service created
   */
  router.post("/service", serviceController.createService);

  /**
   * @swagger
   * /service:
   *  get:
   *   tags:
   *    - Service
   *   summary: List all services
   *   responses:
   *    200:
   *     description: List of services
   *     content:
   *      application/json:
   *       schema:
   *        type: array
   *        items:
   *          $ref: '#/components/schemas/Service'
   */
  router.get("/service", serviceController.listServices);

  /**
   * @swagger
   * /service/{idService}:
   *  get:
   *   tags:
   *    - Service
   *   summary: Get one service
   *   parameters:
   *    - in: path
   *      name: idService
   *      required: true
   *      description: ID of the service
   *      example: UUID
   *   responses:
   *    200:
   *     description: Service
   *     content:
   *      application/json:
   *       schema:
   *        $ref: '#/components/schemas/Service'
   */
  router.get("/service/:idService", serviceController.getOneService);

  /**
   * @swagger
   * /service/{idService}:
   *  patch:
   *   tags:
   *    - Service
   *   summary: Get one service
   *   parameters:
   *    - in: path
   *      name: idService
   *      required: true
   *      description: ID of the service
   *      example: UUID
   *   requestBody:
   *    required: true
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/components/schemas/ServiceUpdate'
   *   responses:
   *    200:
   *     description: Service updated
   */
  router.patch("/service/:idService", serviceController.updateService);

  /**
   * @swagger
   * /service/{idService}:
   *  delete:
   *   tags:
   *    - Service
   *   summary: Delete one service
   *   parameters:
   *    - in: path
   *      name: idService
   *      required: true
   *      description: ID of the service
   *      example: UUID
   *   responses:
   *    200:
   *     description: Service deleted
   *     content:
   *      application/json:
   *       schema:
   *        type: object
   *        properties:
   *         message:
   *          type: string
   *    404:
   *     description: Service not found
   */
  router.delete("/service/:idService", serviceController.deleteService);

  return router;
};
