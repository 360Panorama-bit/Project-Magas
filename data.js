var APP_DATA = {
  "scenes": [
    {
      "id": "0-360_1-",
      "name": "360_1-Этаж",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": 0.045980059999982004,
        "pitch": 0,
        "fov": 1.3568621924490027
      },
      "linkHotspots": [
        {
          "yaw": -0.02861210556833882,
          "pitch": -0.17524955187884217,
          "rotation": 0,
          "target": "1-360_2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360_2-",
      "name": "360_2-Этаж",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": 0.10271758999999747,
        "pitch": 0,
        "fov": 1.3568621924490027
      },
      "linkHotspots": [
        {
          "yaw": 0.005321570102129414,
          "pitch": 0.2238214211975027,
          "rotation": 0,
          "target": "0-360_1-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360-Panorama",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
