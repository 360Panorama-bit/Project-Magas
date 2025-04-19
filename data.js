var APP_DATA = {
  "scenes": [
    {
      "id": "0-zal",
      "name": "Zal",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -0.602597121432936,
        "pitch": 0.14514273137578648,
        "fov": 1.3568621924490027
      },
      "linkHotspots": [
        {
          "yaw": -2.6542404104743724,
          "pitch": 0.24183868134142017,
          "rotation": 0,
          "target": "1-kabinet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kabinet",
      "name": "Kabinet",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -0.6171251193801872,
        "pitch": 0,
        "fov": 1.3568621924490027
      },
      "linkHotspots": [
        {
          "yaw": 2.719920161084284,
          "pitch": 0.107191693510444,
          "rotation": 0,
          "target": "0-zal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Kvartira360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
