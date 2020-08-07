import { Request, response, Response } from "express";
import convertHourToMinutes from "../utils/convertHourToMinutes";
import db from "../database/connection";
interface scheduleItem {
  week_day: number;
  from: string;
  to: string;
}
export default class ClassesController {
  async create(req: Request, res: Response) {
    const { name, avatar, whastapp, bio, subject, cost, schedule } = req.body;

    const trx = await db.transaction();

    try {
      const insertedUserIds = await trx("users").insert({
        name,
        avatar,
        whastapp,
        bio,
      });
      const user_id = insertedUserIds[0];

      const insertedClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });
      await trx("class_schedule").insert(classSchedule);

      await trx.commit();
      return response;
    } catch (error) {
      await trx.rollback();

      return response.status(400).json({
        error: "Unexpected error while creating new class",
      });
    }
  }
}
