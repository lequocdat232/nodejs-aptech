// Kết nối trực tiếp với Database
import StudentsModel from "../models/students.model.js";

// Lấy tất cả record
export const findAll = async () => {
  /**
   * SELECT * FROM brands
   */
  const students = await StudentsModel.find();
  //console.log('<<=== 🚀 brands ===>>',brands);
  return students;
};

export const findOne = async (id) => {
  /**
   * SELECT * FROM brands
   */
  const students = await StudentsModel.findById(id);
  //console.log('<<=== 🚀 brands ===>>',brands);
  return students;
};

export const createRecord = async (payload) => {
  console.log("<<=== 🚀 payload ===>>", payload);

  const student = await StudentsModel.create(payload);

  console.log("<<=== 🚀 create student ===>>", student);

  //Trả lại record vừa thêm mới
  return student;
};
