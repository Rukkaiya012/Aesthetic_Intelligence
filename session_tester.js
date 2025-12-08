function resetBehaviour() {
  behaviour.hover_left = 0;
  behaviour.hover_main = 0;
  behaviour.hover_right = 0;
  behaviour.dwell_main = 0;
  behaviour.dwell_left = 0;
  behaviour.click_repetitions = 0;
  behaviour.scroll_depth = 0;
  behaviour.backtracks = 0;
}

function testConfused() {
  resetBehaviour();
  behaviour.hover_main = 8;
  behaviour.click_repetitions = 0;
  update();
  console.log("✅ TEST 1 DONE: CONFUSED");
}

function testTaskIntent() {
  resetBehaviour();
  behaviour.click_repetitions = 6;
  update();
  console.log("✅ TEST 2 DONE: TASK_INTENT");
}

function testUncertain() {
  resetBehaviour();
  behaviour.backtracks = 3;
  update();
  console.log("✅ TEST 3 DONE: UNCERTAIN");
}

// Auto run all tests
function runAllTests() {
  testConfused();
  testTaskIntent();
  testUncertain();
  console.log("✅ ALL 3 SAMPLE SESSIONS COMPLETED");
}
