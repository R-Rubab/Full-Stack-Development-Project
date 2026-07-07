// ==========================================================================
// 4. Analytics & Charts
// ==========================================================================

function updateDashboardStats(employees) {
  document.getElementById("totalEmployees").innerText = employees.length;

  const departments = [...new Set(employees.map((emp) => emp.department))];
  document.getElementById("totalDepartments").innerText = departments.length;

  const totalSalary = employees.reduce(
    (sum, emp) => sum + Number(emp.salary),
    0,
  );
  const average = employees.length
    ? Math.round(totalSalary / employees.length)
    : 0;
  document.getElementById("averageSalary").innerText =
    `$${average.toLocaleString()}`;

  drawDepartmentChart(employees);
}

function drawDepartmentChart(employees) {
  const counts = {};
  employees.forEach((emp) => {
    if (emp.department)
      counts[emp.department] = (counts[emp.department] || 0) + 1;
  });

  const ctx = document.getElementById("departmentChart").getContext("2d");

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(counts),
      datasets: [
        {
          label: "Headcount",
          data: Object.values(counts),
          backgroundColor: "rgba(59, 130, 246, 0.6)",
          borderColor: "#3b82f6",
          borderWidth: 1,
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } },
      },
    },
  });
}