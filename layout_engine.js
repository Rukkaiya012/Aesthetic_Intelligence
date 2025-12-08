function applyLayout(state, reason) {
  resetLayout();

  const left = document.getElementById("left");
  const main = document.getElementById("main");
  const right = document.getElementById("right");

  if (state === "confused") {
    main.style.background = "#fff3cd";
    showReason("UI adjusted for confusion", reason);
  }

  if (state === "focused_left") {
    left.style.flex = "2";
    left.style.background = "#e2f0d9";  
    showReason("Left panel expanded (left-focus detected)", reason);
}


  if (state === "searching") {
    right.style.background = "#d1f1efff";
    showReason("Search support highlighted", reason);
  }

  if (state === "uncertain") {
    left.style.background = "#f8d7da";
    showReason("Undo behaviour detected", reason);
  }

  if (state === "task_intent") {
    main.style.flex = "2";
    main.style.background = "#d4edda";
    showReason("Task intent detected", reason);
  }
}

function resetLayout() {
  ["left", "main", "right"].forEach(id => {
    const el = document.getElementById(id);
    el.style.flex = "1";
    el.style.background = "";
  });
}

function showReason(title, reason) {
  const log = document.getElementById("logs");
  log.textContent += `\n\n${title}\nReason: ${reason}`;
}
