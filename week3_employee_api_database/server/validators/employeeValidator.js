const validateEmployee = (data) => {
  const errors = [];

  if (!data.name) errors.push("Name is required");

  if (!data.email) errors.push("Email is required");

  if (!data.department) errors.push("Department is required");

  if (!data.salary) errors.push("Salary is required");

  return errors;
};

module.exports = validateEmployee;
