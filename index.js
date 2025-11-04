document.addEventListener("DOMContentLoaded", function () {
  const requestBtn = document.querySelector(".btn-request");
  const message = document.getElementById("request-message");

  requestBtn.addEventListener("click", function () {
    // Show the message
    message.classList.remove("hidden");

    // Optionally reset after 3 seconds
    setTimeout(() => {
      message.classList.add("hidden");
    }, 3000);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const trackBtn = document.getElementById("track-btn");
  const trackingIdInput = document.getElementById("tracking-id");
  const resultBox = document.getElementById("tracking-result");
  const statusText = document.getElementById("status-text");
  const statusDetail = document.getElementById("status-detail");

  trackBtn.addEventListener("click", () => {
    const trackingId = trackingIdInput.value.trim();

    if (trackingId === "") {
      alert("Please enter your Tracking ID.");
      return;
    }

    // Fake backend response (simulated)
    const statuses = [
      { status: "Order Placed 📝", detail: "We’ve received your order." },
      { status: "Drone Preparing 🚁", detail: "Your drone is getting ready for takeoff." },
      { status: "In Transit 📦", detail: "Your package is flying towards the destination." },
      { status: "Delivered ✅", detail: "Your package has arrived safely!" }
    ];

    let step = 0;
    resultBox.classList.remove("hidden");

    const interval = setInterval(() => {
      const { status, detail } = statuses[step];
      statusText.textContent = status;
      statusDetail.textContent = detail;
      step++;

      if (step >= statuses.length) {
        clearInterval(interval);
      }
    }, 2000);
  });
});