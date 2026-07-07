const API = "http://localhost:5001/api/employees";
let allEmployees = []; 
let editingId = null;
let ascending = true;
let myChart = null; 

// ==========================================================================
// 1. Core Data Loading & Rendering
// ==========================================================================

async function loadData() {
  showLoader();
  try {
    // API calling functions (api.js)
    allEmployees = await getEmployees();

    // UI Updates
    renderEmployees(allEmployees);
    updateDashboardStats(allEmployees);
    populateDynamicFilters(allEmployees);
  } catch (error) {
    // console.error("Error loading application data:", error);
    showToast("❌ Failed to fetch data from server");
  } finally {
    hideLoader();
  }
}

function renderEmployees(employeesList) {
  const tableBody = document.getElementById("employeeTable");
  tableBody.innerHTML = "";

  if (employeesList.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: var(--text-muted);">No Employees Found</td></tr>`;
    return;
  }

  employeesList.forEach((employee) => {
    const createdAt = employee.createdAt
      ? new Date(employee.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "N/A";

    tableBody.innerHTML += `
    <tr>
      <td><strong>${employee.name}</strong></td>
      <td>${employee.email}</td>
      <td><span class="badge">${employee.department}</span></td>
      <td>$${Number(employee.salary).toLocaleString()}</td>
      <td>${createdAt}</td>
      <td style="text-align: center;">
        <button class="edit" onclick="editEmployee('${employee._id}')"><i class="fa-solid fa-pen"></i> Edit</button>
        <button class="delete" onclick="deleteEmployee('${employee._id}')"><i class="fa-solid fa-trash"></i> Delete</button>
      </td>
    </tr>
    `;
  });
}

// ==========================================================================
// 2. Form Operations (Add / Update)
// ==========================================================================

const form = document.getElementById("employeeForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showLoader();

  const employeeData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value.trim(),
    salary: Number(document.getElementById("salary").value),
  };

  try {
    if (editingId) {
      await updateEmployee(editingId, employeeData);
      showToast("🎉 Employee updated successfully");
      editingId = null;
      document.getElementById("submitBtn").innerText = "Add Employee";
    } else {
      await addEmployee(employeeData);
      showToast("👤 Employee added successfully");
    }

    form.reset();
    await loadData(); // Reload whole state cleanly
  } catch (error) {
    console.error("Error saving employee:", error);
    showToast("❌ Failed to save employee");
  } finally {
    hideLoader();
  }
});

async function editEmployee(id) {
  const employee = allEmployees.find((emp) => emp._id === id);
  if (!employee) return;

  document.getElementById("name").value = employee.name;
  document.getElementById("email").value = employee.email;
  document.getElementById("department").value = employee.department;
  document.getElementById("salary").value = employee.salary;

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.innerText = "Update Employee";
  submitBtn.scrollIntoView({ behavior: "smooth" });

  editingId = id;
}

async function deleteEmployee(id) {
  if (!confirm("Are you sure you want to delete this employee?")) return;
  showLoader();

  try {
    await deleteEmployeeApi(id);
    showToast("🗑️ Employee deleted successfully");
    await loadData();
  } catch (error) {
    console.error("Error deleting employee:", error);
    showToast("❌ Failed to delete employee");
  } finally {
    hideLoader();
  }
}

// ==========================================================================
// 3. Smart Controls (Search, Filter, Sort)
// ==========================================================================

// Search 
document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = allEmployees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(keyword) ||
      emp.department.toLowerCase().includes(keyword),
  );
  renderEmployees(filtered);
});

// Dynamic Department Filter 
function populateDynamicFilters(employees) {
  const filterDropdown = document.getElementById("departmentFilter");
  const currentSelection = filterDropdown.value;
  const uniqueDepartments = [
    ...new Set(employees.map((emp) => emp.department)),
  ];

  filterDropdown.innerHTML = '<option value="">All Departments</option>';
  uniqueDepartments.forEach((dept) => {
    if (dept) {
      filterDropdown.innerHTML += `<option value="${dept}">${dept}</option>`;
    }
  });
  filterDropdown.value = currentSelection; // Keep selection intact
}

document.getElementById("departmentFilter").addEventListener("change", (e) => {
  const value = e.target.value;
  if (value === "") {
    renderEmployees(allEmployees);
  } else {
    const filtered = allEmployees.filter((emp) => emp.department === value);
    renderEmployees(filtered);
  }
});

document.getElementById("sortSalary").addEventListener("click", () => {
  const sorted = [...allEmployees].sort((a, b) => {
    return ascending ? a.salary - b.salary : b.salary - a.salary;
  });

  const sortBtn = document.getElementById("sortSalary");
  sortBtn.innerHTML = ascending
    ? `<i class="fa-solid fa-sort-up"></i> Salary Low-High`
    : `<i class="fa-solid fa-sort-down"></i> Salary High-Low`;

  ascending = !ascending;
  renderEmployees(sorted);
});


//  Dark Mode with Persistence
const themeBtn = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.innerHTML = isDark
    ? `<i class="fa-solid fa-sun"></i>`
    : `<i class="fa-solid fa-moon"></i>`;
};


document.addEventListener("DOMContentLoaded", loadData);
