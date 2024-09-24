import { Schema, model } from "mongoose";

/* Khởi tạo một Schema */

const studentSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true, //mặc định true, nếu bạn ko liệt kê vào
      unique: true, //chống trùng lặp tên danh mục
      trim: true, // tự động cắt kí tự trắng trước/sau vd: "   Laptop " ==> "Laptop"
    },
    age: {
      type: Number,
      require: true, //mặc định true, nếu bạn ko liệt kê vào
      maxLength: 3, //Tối đa 500 kí tự
      trim: true, // tự động cắt kí tự trắng trước/sau vd: "   Laptop " ==> "Laptop"
    },
    email: {
      type: String,
      require: true, //mặc định true, nếu bạn ko liệt kê vào
      maxLength: 100, //Tối đa 50 kí tự
      unique: true, //chống trùng lặp tên danh mục
      trim: true, // tự động cắt kí tự trắng trước/sau vd: "   Laptop " ==> "Laptop"
    },
    mobile: {
      type: String,
      maxLength: 17,
      require: true, //giá trị mặc định khi ko điền, //giá trị tối thiểu chấp nhận là 1
    },
    class: {
      type: String,
      default: 150, //giá trị mặc định khi ko điền,
    },
  },
  {
    timestamps: true, //Tạo tự động thêm 2 trường createAt, updateAt
    //collection: 'categories'
  }
);

//Export một Model

const Student = model("Student", studentSchema);
export default Student;
