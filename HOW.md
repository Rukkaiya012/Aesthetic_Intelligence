# How It Works

1. Hover, click, scroll and undo actions are tracked
2. `behaviour_engine.js` records all interactions
3. `pattern_detector.js` detects state (confused, focused, task_intent, uncertain, searching)
4. `layout_engine.js` updates panel sizes and colors based on state
5. Logs show current behaviour and reason
6. "Send Behaviour to Core" button exports data to stub API
