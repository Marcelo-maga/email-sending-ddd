import { Router as ExpressRouter } from "express";
import { emailRoutes } from "./sendEmail/email";

export const setupRoutes = (router: ExpressRouter) => {
  emailRoutes(router);

  return router;
};
