
  // Splash screen logic
  window.addEventListener("load", () => {
    // Wait a bit before starting fade out (1.5s delay)
    setTimeout(() => {
      document.body.classList.add("loaded");
      // Fully remove after transition
      setTimeout(() => {
        document.getElementById("splash").style.display = "none";
      }, 1000); // must match transition duration
    }, 500); // delay before fade starts
  });
