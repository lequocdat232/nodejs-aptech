import {
  findAll,
  findOne,
  createRecord,
} from "../services/students.services.js";

export const findAllController = async (req, res, next) => {
  try {
    // Lấy data từ lớp service
    const students = await findAll();

    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

export const findOneController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const students = await findOne(id);

    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

export const createRecodeController = async (req, res, next) => {
  try {
    const payload = req.body;
    const student = await createRecord(payload);

    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};
