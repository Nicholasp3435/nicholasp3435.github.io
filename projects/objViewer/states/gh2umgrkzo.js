let gh2umgrkzo=
{
  "version": 11,
  "randomSeed": "3521bc641fa33ccd861227f42a278498",
  "graph": {
    "viewport": {
      "xmin": -2.1208754215981105,
      "ymin": -2.1164257049234356,
      "xmax": 2.193326393142844,
      "ymax": 1.895260245493615
    },
    "showGrid": false,
    "showXAxis": false,
    "showYAxis": false,
    "xAxisNumbers": false,
    "yAxisNumbers": false,
    "polarNumbers": false
  },
  "expressions": {
    "list": [
      {
        "type": "folder",
        "id": "2",
        "title": "Points",
        "collapsed": true
      },
      {
        "id": "16",
        "type": "table",
        "folderId": "2",
        "columns": [
          {
            "values": [
              "-1",
              "1",
              "1",
              "-1",
              "-1",
              "1",
              "1",
              "-1"
            ],
            "hidden": true,
            "id": "14",
            "color": "#388c46",
            "latex": "x_{0}"
          },
          {
            "values": [
              "-1",
              "-1",
              "1",
              "1",
              "1",
              "1",
              "-1",
              "-1"
            ],
            "hidden": true,
            "id": "15",
            "color": "#6042a6",
            "latex": "y_{0}"
          },
          {
            "values": [
              "-1",
              "-1",
              "-1",
              "-1",
              "1",
              "1",
              "1",
              "1"
            ],
            "hidden": true,
            "id": "17",
            "color": "#000000",
            "latex": "z_{0}"
          }
        ]
      },
      {
        "type": "folder",
        "id": "19",
        "title": "Matrix",
        "collapsed": true
      },
      {
        "type": "expression",
        "id": "33",
        "folderId": "19",
        "color": "#000000",
        "latex": "R_{x}\\left(\\theta\\right)=\\left[r_{x11}\\left(\\theta\\right),r_{x12}\\left(\\theta\\right),r_{x13}\\left(\\theta\\right),r_{x21}\\left(\\theta\\right),r_{x22}\\left(\\theta\\right),r_{x23}\\left(\\theta\\right),r_{x31}\\left(\\theta\\right),r_{x32}\\left(\\theta\\right),r_{x33}\\left(\\theta\\right)\\right]",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "36",
        "folderId": "19",
        "color": "#388c46",
        "latex": "r_{x11}\\left(\\theta\\right)=1",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "37",
        "folderId": "19",
        "color": "#6042a6",
        "latex": "r_{x12}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "38",
        "folderId": "19",
        "color": "#000000",
        "latex": "r_{x13}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "39",
        "folderId": "19",
        "color": "#c74440",
        "latex": "r_{x21}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "40",
        "folderId": "19",
        "color": "#2d70b3",
        "latex": "r_{x22}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "41",
        "folderId": "19",
        "color": "#388c46",
        "latex": "r_{x23}\\left(\\theta\\right)=-\\sin\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "42",
        "folderId": "19",
        "color": "#6042a6",
        "latex": "r_{x31}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "43",
        "folderId": "19",
        "color": "#000000",
        "latex": "r_{x32}\\left(\\theta\\right)=\\sin\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "45",
        "folderId": "19",
        "color": "#2d70b3",
        "latex": "r_{x33}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "107",
        "folderId": "19",
        "color": "#388c46"
      },
      {
        "type": "expression",
        "id": "108",
        "folderId": "19",
        "color": "#6042a6",
        "latex": "R_{y}\\left(\\theta\\right)=\\left[r_{y11}\\left(\\theta\\right),r_{y12}\\left(\\theta\\right),r_{y13}\\left(\\theta\\right),r_{y21}\\left(\\theta\\right),r_{y22}\\left(\\theta\\right),r_{y23}\\left(\\theta\\right),r_{y31}\\left(\\theta\\right),r_{y32}\\left(\\theta\\right),r_{y33}\\left(\\theta\\right)\\right]",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "111",
        "folderId": "19",
        "color": "#2d70b3",
        "latex": "r_{y11}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "112",
        "folderId": "19",
        "color": "#388c46",
        "latex": "r_{y12}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "113",
        "folderId": "19",
        "color": "#6042a6",
        "latex": "r_{y13}\\left(\\theta\\right)=\\sin\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "114",
        "folderId": "19",
        "color": "#000000",
        "latex": "r_{y21}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "115",
        "folderId": "19",
        "color": "#c74440",
        "latex": "r_{y22}\\left(\\theta\\right)=1",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "116",
        "folderId": "19",
        "color": "#2d70b3",
        "latex": "r_{y23}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "117",
        "folderId": "19",
        "color": "#388c46",
        "latex": "r_{y31}\\left(\\theta\\right)=-\\sin\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "118",
        "folderId": "19",
        "color": "#6042a6",
        "latex": "r_{y32}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "119",
        "folderId": "19",
        "color": "#000000",
        "latex": "r_{y33}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "110",
        "folderId": "19",
        "color": "#c74440"
      },
      {
        "type": "expression",
        "id": "35",
        "folderId": "19",
        "color": "#2d70b3",
        "latex": "R_{z}\\left(\\theta\\right)=\\left[r_{z11}\\left(\\theta\\right),r_{z12}\\left(\\theta\\right),r_{z13}\\left(\\theta\\right),r_{z21}\\left(\\theta\\right),r_{z22}\\left(\\theta\\right),r_{z23}\\left(\\theta\\right),r_{z31}\\left(\\theta\\right),r_{z32}\\left(\\theta\\right),r_{z33}\\left(\\theta\\right)\\right]",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "122",
        "folderId": "19",
        "color": "#388c46",
        "latex": "r_{z11}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "123",
        "folderId": "19",
        "color": "#6042a6",
        "latex": "r_{z12}\\left(\\theta\\right)=-\\sin\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "124",
        "folderId": "19",
        "color": "#000000",
        "latex": "r_{z13}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "125",
        "folderId": "19",
        "color": "#c74440",
        "latex": "r_{z21}\\left(\\theta\\right)=\\sin\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "126",
        "folderId": "19",
        "color": "#2d70b3",
        "latex": "r_{z22}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "127",
        "folderId": "19",
        "color": "#388c46",
        "latex": "r_{z23}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "128",
        "folderId": "19",
        "color": "#6042a6",
        "latex": "r_{z31}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "129",
        "folderId": "19",
        "color": "#000000",
        "latex": "r_{z32}\\left(\\theta\\right)=0",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "130",
        "folderId": "19",
        "color": "#c74440",
        "latex": "r_{z33}\\left(\\theta\\right)=1",
        "hidden": true
      },
      {
        "type": "expression",
        "id": "120",
        "folderId": "19",
        "color": "#c74440"
      },
      {
        "type": "expression",
        "id": "100",
        "folderId": "19",
        "color": "#2d70b3",
        "latex": "m\\left(M,v\\right)=\\left[M\\left[1\\right]v\\left[1\\right]+M\\left[2\\right]v\\left[2\\right]+M\\left[3\\right]v\\left[3\\right],M\\left[4\\right]v\\left[1\\right]+M\\left[5\\right]v\\left[2\\right]+M\\left[6\\right]v\\left[3\\right],M\\left[7\\right]v\\left[1\\right]+M\\left[8\\right]v\\left[2\\right]+M\\left[9\\right]v\\left[3\\right]\\right]"
      },
      {
        "type": "folder",
        "id": "102",
        "title": "Project",
        "collapsed": true
      },
      {
        "id": "149",
        "type": "table",
        "folderId": "102",
        "columns": [
          {
            "values": [
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[1\\right],y_{0}\\left[1\\right],z_{0}\\left[1\\right]\\right]\\right)\\right)\\right)\\left[1\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[2\\right],y_{0}\\left[2\\right],z_{0}\\left[2\\right]\\right]\\right)\\right)\\right)\\left[1\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[3\\right],y_{0}\\left[3\\right],z_{0}\\left[3\\right]\\right]\\right)\\right)\\right)\\left[1\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[4\\right],y_{0}\\left[4\\right],z_{0}\\left[4\\right]\\right]\\right)\\right)\\right)\\left[1\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[5\\right],y_{0}\\left[5\\right],z_{0}\\left[5\\right]\\right]\\right)\\right)\\right)\\left[1\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[6\\right],y_{0}\\left[6\\right],z_{0}\\left[6\\right]\\right]\\right)\\right)\\right)\\left[1\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[7\\right],y_{0}\\left[7\\right],z_{0}\\left[7\\right]\\right]\\right)\\right)\\right)\\left[1\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[8\\right],y_{0}\\left[8\\right],z_{0}\\left[8\\right]\\right]\\right)\\right)\\right)\\left[1\\right]"
            ],
            "hidden": true,
            "id": "147",
            "color": "#388c46",
            "latex": "x_{1}"
          },
          {
            "values": [
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[1\\right],y_{0}\\left[1\\right],z_{0}\\left[1\\right]\\right]\\right)\\right)\\right)\\left[2\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[2\\right],y_{0}\\left[2\\right],z_{0}\\left[2\\right]\\right]\\right)\\right)\\right)\\left[2\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[3\\right],y_{0}\\left[3\\right],z_{0}\\left[3\\right]\\right]\\right)\\right)\\right)\\left[2\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[4\\right],y_{0}\\left[4\\right],z_{0}\\left[4\\right]\\right]\\right)\\right)\\right)\\left[2\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[5\\right],y_{0}\\left[5\\right],z_{0}\\left[5\\right]\\right]\\right)\\right)\\right)\\left[2\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[6\\right],y_{0}\\left[6\\right],z_{0}\\left[6\\right]\\right]\\right)\\right)\\right)\\left[2\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[7\\right],y_{0}\\left[7\\right],z_{0}\\left[7\\right]\\right]\\right)\\right)\\right)\\left[2\\right]",
              "m\\left(R_{z}\\left(\\theta_{z}\\right),m\\left(R_{y}\\left(\\theta_{y}\\right),m\\left(R_{x}\\left(\\theta_{x}\\right),\\left[x_{0}\\left[8\\right],y_{0}\\left[8\\right],z_{0}\\left[8\\right]\\right]\\right)\\right)\\right)\\left[2\\right]"
            ],
            "hidden": true,
            "id": "148",
            "color": "#6042a6",
            "latex": "y_{1}"
          }
        ]
      },
      {
        "type": "expression",
        "id": "177",
        "folderId": "102",
        "color": "#6042a6",
        "latex": "\\operatorname{polygon}\\left(\\left(x_{1}\\left[1\\right],y_{1}\\left[1\\right]\\right),\\left(x_{1}\\left[2\\right],y_{1}\\left[2\\right]\\right),\\left(x_{1}\\left[3\\right],y_{1}\\left[3\\right]\\right),\\left(x_{1}\\left[4\\right],y_{1}\\left[4\\right]\\right)\\right)"
      },
      {
        "type": "expression",
        "id": "178",
        "folderId": "102",
        "color": "#6042a6",
        "latex": "\\operatorname{polygon}\\left(\\left(x_{1}\\left[5\\right],y_{1}\\left[5\\right]\\right),\\left(x_{1}\\left[6\\right],y_{1}\\left[6\\right]\\right),\\left(x_{1}\\left[7\\right],y_{1}\\left[7\\right]\\right),\\left(x_{1}\\left[8\\right],y_{1}\\left[8\\right]\\right)\\right)"
      },
      {
        "type": "expression",
        "id": "181",
        "folderId": "102",
        "color": "#6042a6",
        "latex": "\\operatorname{polygon}\\left(\\left(x_{1}\\left[1\\right],y_{1}\\left[1\\right]\\right),\\left(x_{1}\\left[2\\right],y_{1}\\left[2\\right]\\right),\\left(x_{1}\\left[7\\right],y_{1}\\left[7\\right]\\right),\\left(x_{1}\\left[8\\right],y_{1}\\left[8\\right]\\right)\\right)"
      },
      {
        "type": "expression",
        "id": "182",
        "folderId": "102",
        "color": "#6042a6",
        "latex": "\\operatorname{polygon}\\left(\\left(x_{1}\\left[3\\right],y_{1}\\left[3\\right]\\right),\\left(x_{1}\\left[4\\right],y_{1}\\left[4\\right]\\right),\\left(x_{1}\\left[5\\right],y_{1}\\left[5\\right]\\right),\\left(x_{1}\\left[6\\right],y_{1}\\left[6\\right]\\right)\\right)"
      },
      {
        "type": "expression",
        "id": "183",
        "folderId": "102",
        "color": "#6042a6",
        "latex": "\\operatorname{polygon}\\left(\\left(x_{1}\\left[2\\right],y_{1}\\left[2\\right]\\right),\\left(x_{1}\\left[3\\right],y_{1}\\left[3\\right]\\right),\\left(x_{1}\\left[6\\right],y_{1}\\left[6\\right]\\right),\\left(x_{1}\\left[7\\right],y_{1}\\left[7\\right]\\right)\\right)"
      },
      {
        "type": "expression",
        "id": "184",
        "folderId": "102",
        "color": "#6042a6",
        "latex": "\\operatorname{polygon}\\left(\\left(x_{1}\\left[1\\right],y_{1}\\left[1\\right]\\right),\\left(x_{1}\\left[4\\right],y_{1}\\left[4\\right]\\right),\\left(x_{1}\\left[5\\right],y_{1}\\left[5\\right]\\right),\\left(x_{1}\\left[8\\right],y_{1}\\left[8\\right]\\right)\\right)"
      },
      {
        "type": "expression",
        "id": "131",
        "color": "#2d70b3",
        "latex": "\\theta_{x}=1.04",
        "slider": {
          "hardMin": true,
          "hardMax": true,
          "animationPeriod": 5333.333333333333,
          "loopMode": "LOOP_FORWARD",
          "isPlaying": true,
          "min": "0",
          "max": "\\tau"
        }
      },
      {
        "type": "expression",
        "id": "174",
        "color": "#2d70b3",
        "latex": "\\theta_{y}=0.017",
        "slider": {
          "hardMin": true,
          "hardMax": true,
          "animationPeriod": 8000,
          "loopMode": "LOOP_FORWARD",
          "isPlaying": true,
          "min": "0",
          "max": "\\tau"
        }
      },
      {
        "type": "expression",
        "id": "173",
        "color": "#2d70b3",
        "latex": "\\theta_{z}=3.929",
        "slider": {
          "hardMin": true,
          "hardMax": true,
          "animationPeriod": 11428.57142857143,
          "loopMode": "LOOP_FORWARD",
          "isPlaying": true,
          "min": "0",
          "max": "\\tau"
        }
      }
    ]
  },
  "includeFunctionParametersInRandomSeed": true
}