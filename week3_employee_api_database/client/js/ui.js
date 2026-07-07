function showToast(message) {
  const oldToast = document.querySelector(".toast");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function showLoader() {
  document.getElementById("loader").style.display = "flex";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}