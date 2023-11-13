import { Request, Response } from "express";
import { ReportCardService } from "src/secretary/service/ReportCard.service";


export class EmailController {
    async send(req: Request, res: Response) {
        const generateReportCardService = new ReportCardService(new Enroll)
    }
}