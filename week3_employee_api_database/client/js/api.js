const API_URL = "http://localhost:5001/api/employees";

async function getEmployees() {
  const response = await fetch(API_URL);
  return await response.json();
}

async function addEmployee(employee) {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
}

async function updateEmployee(id, employee) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
}

async function deleteEmployeeApi(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
