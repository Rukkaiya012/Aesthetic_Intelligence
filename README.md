# Aesthetic Intelligence

An intelligent UI system that adapts layout and behavior based on real-time user interaction patterns.

## Overview

Aesthetic Intelligence monitors user behavior (hovers, clicks, scrolls, dwells) and dynamically adjusts the interface to optimize user experience. The system detects user states like confusion, focus, task intent, and uncertainty, then adapts the UI accordingly.

## Features

- **Real-time Behavior Tracking**: Monitors mouse hovers, clicks, scroll depth, dwell time, and undo actions
- **Pattern Detection**: Identifies user states (confused, focused, task_intent, uncertain, searching)
- **Adaptive Layout**: Dynamically adjusts panel sizes and colors based on detected patterns
- **Live Monitoring**: Visual state monitor and behavior logs
- **Core Integration**: Exports behavior data via API stub

## User States

| State          | Trigger                  | UI Response                        |
|----------------|--------------------------|------------------------------------|
| `confused`     | High hover, low action   | Yellow highlight on main area      |
| `focused_left` | Long dwell on left panel | Expand left panel, green highlight |
| `task_intent`  | Frequent clicks (5+)     | Expand main area, green highlight  |
| `uncertain`    | Multiple undos (2+)      | Red highlight on left panel        |
| `searching`    | Deep scrolling (70%+)    | Cyan highlight on right panel      |

## Quick Start

1. Open `index.html` in a web browser
2. Interact with the interface (hover, click, scroll)
3. Watch the behavior monitor and layout adapt in real-time
4. Use "Send Behaviour to Core" to export data

## Project Structure

```
├── index.html              # Main interface
├── style.css              # UI styling
├── behaviour_engine.js    # Tracks user interactions
├── pattern_detector.js    # Detects user behavior patterns
├── layout_engine.js       # Applies adaptive layouts
├── session_tester.js      # Testing utilities
├── sync_core_stub.js      # API integration stub
└── Handover/              # Documentation
    ├── HOW.md            # Technical details
    ├── API.md            # API documentation
    └── SETUP.md          # Setup instructions
```

## Behavior Metrics

- `hover_left/main/right`: Mouse enter counts per panel
- `dwell_main/left`: Time spent in panels (seconds)
- `click_repetitions`: Primary action button clicks
- `scroll_depth`: Scroll percentage (0-100%)-
- `backtracks`: Undo button clicks

## Integration

The system exports behavior data with metadata headers:
- `X-Core-Behaviour`: Current user state
- `X-Core-Engine`: "Aesthetic-UI"
- `X-Core-Version`: "v1"

## Development

No build process required. Pure JavaScript implementation that runs directly in the browser.
