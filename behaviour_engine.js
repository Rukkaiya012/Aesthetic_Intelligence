let behaviour = {
  hover_left: 0,
  hover_main: 0,
  hover_right: 0,
  dwell_main: 0,
  dwell_left: 0,
  click_repetitions: 0,
  scroll_depth: 0,
  backtracks: 0
};

let dwellLeftStart = null;
let dwellStart = null;
let scrollTimer = null;

document.getElementById("left").addEventListener("mouseenter", () => {
  behaviour.hover_left++;
  dwellLeftStart = Date.now();
  update();
});

document.getElementById("left").addEventListener("mouseleave", () => {
  if (dwellLeftStart) {
    behaviour.dwell_left = (Date.now() - dwellLeftStart) / 1000;
    dwellLeftStart = null;
    update();
  }
});

document.getElementById("main").addEventListener("mouseenter", () => {
  behaviour.hover_main++;
  dwellStart = Date.now();
  update();
});

document.getElementById("main").addEventListener("mouseleave", () => {
  if (dwellStart) {
    behaviour.dwell_main += (Date.now() - dwellStart) / 1000;
    dwellStart = null;
    update();
  }
});

document.getElementById("right").addEventListener("mouseenter", () => {
  behaviour.hover_right++;
  update();
});

document.getElementById("actionBtn").addEventListener("click", () => {
  behaviour.click_repetitions++;
  update();
});

document.getElementById("undoBtn").addEventListener("click", () => {
  behaviour.backtracks++;
  update();
});

document.getElementById("sendCoreBtn").addEventListener("click", () => {
  const now = new Date();

  const dataToSend = {
    timestamp: now.toLocaleString('en-IN', { hour12: false }),
    actions: behaviour
  };

  syncCore(dataToSend).then(res => alert(`Core Sync: ${res.status}`));
});

function syncCore(data){
  console.log("Stub: Sending behaviour to Core", data);
  return Promise.resolve({status:"success", message:"Data received"});
}

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimer);

  scrollTimer = setTimeout(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    behaviour.scroll_depth = Math.min(
      100,
      Math.round((scrollTop / docHeight) * 100)
    );
    update();
  }, 200);
});

function sendToCoreLogger(data){
  console.log("CORE LOG:", data);
}

function mapToCoreMeta(state){
  return {
    "X-Core-Behaviour": state,
    "X-Core-Engine": "Aesthetic-UI",
    "X-Core-Version": "v1"
  };
}

function updateLogGlow() {
  const panel = document.getElementById("logPanel");
  panel.classList.add("updated");
  setTimeout(() => panel.classList.remove("updated"), 400);
}

function update() {
  document.getElementById("logs").textContent =
    JSON.stringify(behaviour, null, 2);

  updateLogGlow();       
  detectPatterns(behaviour);
  sendToCoreLogger(behaviour); 
}
