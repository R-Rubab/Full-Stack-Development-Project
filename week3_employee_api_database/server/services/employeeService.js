const Employee = require("../models/Employee");


// Get All
const getAllEmployees = async () => {
  return await Employee.find();
};

// Get By ID
const getEmployeeById = async (id) => {
  return await Employee.findById(id);
};

// Create
const createEmployee = async (data) => {
  return await Employee.create(data);
};

// Update
const updateEmployee = async (id, data) => {
  return await Employee.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Delete
const deleteEmployee = async (id) => {
  return await Employee.findByIdAndDelete(id);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};