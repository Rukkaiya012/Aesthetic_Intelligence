# API Events

- Endpoint: POST `/sync-core`
- Request Body:
{
  
  "actions": { 
    "hover_left": 1,
    "hover_main": 2,
    "hover_right": 0,
    "dwell_main": 1.2,
    "dwell_left": 3.5,
    "click_repetitions": 2,
    "scroll_depth": 45,
    "backtracks": 0
  },
  "timestamp": "6/12/2025, 01:44:31"
  
}
- Response:
{
  "status": "success",
  "message": "Data received"
}
