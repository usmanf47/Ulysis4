var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4425254167959807,
        "pitch": 0.33108050746958284,
        "fov": 1.2835367499726889
      },
      "linkHotspots": [
        {
          "yaw": 0.03234456762477578,
          "pitch": 0.10531772042037701,
          "rotation": 0,
          "target": "1-bedroom-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom-",
      "name": "Bedroom ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7295107350572927,
        "pitch": 0.23585599403017632,
        "fov": 1.2835367499726889
      },
      "linkHotspots": [
        {
          "yaw": -1.6244413170528915,
          "pitch": -0.002492027792769136,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ulysis",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
