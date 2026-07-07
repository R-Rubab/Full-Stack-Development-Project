const employeeService = require("../services/employeeService");

const validateEmployee = require("../validators/employeeValidator");

const getEmployees = async (req, res) => {
  const employees = await employeeService.getAllEmployees();

  res.json(employees);
};

const createEmployee = async (req, res) => {
  const errors = validateEmployee(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,

      errors,
    });
  }

  const employee = await employeeService.createEmployee(req.body);

  res.status(201).json(employee);
};

const getEmployeeById = async (req, res) => {
  const employee = await employeeService.getEmployeeById(req.params.id);

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee not found",
    });
  }

  res.json(employee);
};

const updateEmployee = async (req, res) => {
  const employee = await employeeService.updateEmployee(
    req.params.id,
    req.body,
  );

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee not found",
    });
  }

  res.json(employee);
};

const deleteEmployee = async (req, res) => {
  const employee = await employeeService.deleteEmployee(req.params.id);

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee not found",
    });
  }

  res.json({
    success: true,
    message: "Employee deleted successfully",
  });
};

module.exports = {
  getEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
