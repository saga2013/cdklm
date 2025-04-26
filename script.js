document.querySelectorAll(".btt button").forEach(button => {
    button.addEventListener("click", () => {
      Toastify({
        text: button.textContent,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    });
  });
  