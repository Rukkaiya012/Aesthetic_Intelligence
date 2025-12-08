function detectPatterns(data) {
  let state = "neutral";
  let reason = "";

  if (data.backtracks >= 2) {
    state = "uncertain";
    reason = "User repeatedly used undo";
  }

  else if (data.click_repetitions >= 5) {
    state = "task_intent";
    reason = "Frequent clicks indicate strong intent";
  }

  else if (data.dwell_left > 3) {
    state = "focused_left";
    reason = "Long dwell time on left panel";
  }

  else if (data.hover_main > 6 && data.click_repetitions < 2) {
    state = "confused";
    reason = "High hover with low action";
  }

  else if (data.scroll_depth > 70) {
    state = "searching";
    reason = "Fast scrolling detected";
  }

  applyLayout(state, reason);

  document.getElementById("monitorState").textContent = state;
  document.getElementById("monitorReason").textContent = reason || "-";
  const headers = mapToCoreMeta(state);
  console.log("CORE META HEADERS:", headers);
}
