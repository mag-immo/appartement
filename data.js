var APP_DATA = {
  "scenes": [
    {
      "id": "0-salle-de-bain",
      "name": "Salle de bain",
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
        "yaw": 0.001287281097885895,
        "pitch": 0.06141819383830338,
        "fov": 0.8778568331649651
      },
      "linkHotspots": [
        {
          "yaw": -2.558745270571162,
          "pitch": 0.2221691782270092,
          "rotation": 5.497787143782138,
          "target": "2-chambre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5488566242670885,
          "pitch": 0.6133515477633669,
          "title": "Baignoire spacieuse",
          "text": "Idéal pour se relaxer après une longue journée de travail"
        },
        {
          "yaw": -1.3331006032686155,
          "pitch": 0.3260821347789431,
          "title": "Toilettes",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-salon-cuisine",
      "name": "Salon Cuisine",
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
        "yaw": 2.7886065467358687,
        "pitch": 0.08021081983760325,
        "fov": 0.8314745395354357
      },
      "linkHotspots": [
        {
          "yaw": 2.230122144146227,
          "pitch": 0.15753379241350274,
          "rotation": 10.995574287564278,
          "target": "2-chambre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.02575754320559298,
          "pitch": 0.16553752191513027,
          "title": "Cuisine tout équipée",
          "text": "Text"
        },
        {
          "yaw": 2.6843959436709035,
          "pitch": 0.04532913377919101,
          "title": "Vue imprenable",
          "text": "Sur le voisin d'en face"
        }
      ]
    },
    {
      "id": "2-chambre",
      "name": "Chambre",
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
        "yaw": -0.04536337778165489,
        "pitch": 0.017350750492946432,
        "fov": 0.9151894637518606
      },
      "linkHotspots": [
        {
          "yaw": -0.3559176007427336,
          "pitch": 0.14817876395527385,
          "rotation": 0,
          "target": "0-salle-de-bain"
        },
        {
          "yaw": -2.5430264550832256,
          "pitch": 0.2460688534082962,
          "rotation": 13.351768777756625,
          "target": "1-salon-cuisine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
