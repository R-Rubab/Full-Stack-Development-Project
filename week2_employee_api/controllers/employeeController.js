let employees = [
  {
    id: 1,
    name: "Ali",
    department: "IT",
  },
  {
    id: 2,
    name: "Sara",
    department: "HR",
  },
];

// GET ALL
const getEmployees = (req, res) => {
  res.json(employees);
};

// GET BY ID
const getEmployee = (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  res.json(employee);
};

// CREATE
const createEmployee = (req, res) => {
  const { name, department } = req.body;

  if (!name || !department) {
    return res.status(400).json({
      message: "Name and Department are required",
    });
  }

  const employee = {
    id: employees.length + 1,
    name,
    department,
  };

  employees.push(employee);

  res.status(201).json(employee);
};

// UPDATE
const updateEmployee = (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  employee.name = req.body.name || employee.name;

  employee.department = req.body.department || employee.department;

  res.json(employee);
};

// DELETE
const deleteEmployee = (req, res) => {
  const id = Number(req.params.id);

  employees = employees.filter((emp) => emp.id !== id);

  res.json({
    message: "Employee Deleted Successfully",
  });
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
