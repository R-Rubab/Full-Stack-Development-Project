function exportCSV() {
  if (allEmployees.length === 0) {
    showToast("⚠️ No data available to export");
    return;
  }
  let csv = "Name,Email,Department,Salary,Created At\n";
  allEmployees.forEach((emp) => {
    csv += `"${emp.name}","${emp.email}","${emp.department}",${emp.salary},"${new Date(emp.createdAt).toLocaleDateString()}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `EMS_Report_${new Date().toISOString().slice(0, 10)}.csv`,
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}