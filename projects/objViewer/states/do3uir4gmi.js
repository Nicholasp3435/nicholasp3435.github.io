let do3uir4gmi = 
{
    "version": 11,
    "randomSeed": "8392598d27b99ba8701a624fe05bce3b",
    "graph": {
      "viewport": {
        "xmin": -2.4479166666666607,
        "ymin": -1.5104166666666767,
        "xmax": 2.5520833333333393,
        "ymax": 0.8020833333333233
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
          "id": "8",
          "title": "Points",
          "collapsed": true
        },
        {
          "type": "expression",
          "id": "11",
          "folderId": "8",
          "color": "#6042a6",
          "latex": "a=\\left[a_{1},a_{2}\\right]"
        },
        {
          "type": "expression",
          "id": "42",
          "folderId": "8",
          "color": "#6042a6",
          "latex": "\\left(a_{1},a_{2}\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "12",
          "folderId": "8",
          "color": "#000000",
          "latex": "a_{1}=1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "13",
          "folderId": "8",
          "color": "#c74440",
          "latex": "a_{2}=1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "16",
          "folderId": "8",
          "color": "#6042a6",
          "latex": "b=\\left[b_{1},b_{2}\\right]"
        },
        {
          "type": "expression",
          "id": "43",
          "folderId": "8",
          "color": "#6042a6",
          "latex": "\\left(b_{1},b_{2}\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "17",
          "folderId": "8",
          "color": "#000000",
          "latex": "b_{1}=-1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "18",
          "folderId": "8",
          "color": "#c74440",
          "latex": "b_{2}=1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "40",
          "folderId": "8",
          "color": "#000000",
          "latex": "c=\\left[c_{1},c_{2}\\right]"
        },
        {
          "type": "expression",
          "id": "44",
          "folderId": "8",
          "color": "#6042a6",
          "latex": "\\left(c_{1},c_{2}\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "25",
          "folderId": "8",
          "color": "#2d70b3",
          "latex": "c_{1}=-1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "26",
          "folderId": "8",
          "color": "#388c46",
          "latex": "c_{2}=-1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "102",
          "folderId": "8",
          "color": "#000000",
          "latex": "d=\\left[d_{1},d_{2}\\right]"
        },
        {
          "type": "expression",
          "id": "103",
          "folderId": "8",
          "color": "#c74440",
          "latex": "d_{1}=1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "104",
          "folderId": "8",
          "color": "#2d70b3",
          "latex": "d_{2}=-1",
          "hidden": true
        },
        {
          "id": "22",
          "type": "table",
          "folderId": "8",
          "columns": [
            {
              "values": [
                "a_{1}",
                "b_{1}",
                "c_{1}",
                "d_{1}"
              ],
              "hidden": true,
              "id": "20",
              "color": "#388c46",
              "latex": "x_{1}"
            },
            {
              "values": [
                "a_{2}",
                "b_{2}",
                "c_{2}",
                "d_{2}"
              ],
              "dragMode": "XY",
              "hidden": true,
              "id": "21",
              "color": "#6042a6",
              "latex": "y_{1}"
            }
          ]
        },
        {
          "type": "expression",
          "id": "53",
          "folderId": "8",
          "color": "#2d70b3",
          "latex": "c_{enter}=\\left[\\operatorname{mean}\\left(x_{1}\\right),\\operatorname{mean}\\left(y_{1}\\right)\\right]"
        },
        {
          "type": "expression",
          "id": "81",
          "folderId": "8",
          "color": "#6042a6",
          "latex": "\\left(c_{enter}\\left[1\\right],c_{enter}\\left[2\\right]\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "27",
          "folderId": "8",
          "color": "#6042a6",
          "latex": "\\operatorname{polygon}\\left(\\left(x_{1},y_{1}\\right)\\right)",
          "hidden": true
        },
        {
          "type": "folder",
          "id": "76",
          "title": "Rotate",
          "collapsed": true
        },
        {
          "type": "expression",
          "id": "77",
          "folderId": "76",
          "color": "#6042a6",
          "latex": "a_{0}=\\left[m_{ult}\\left(R\\left(s\\right),a\\right)\\left[1\\right],m_{ult}\\left(R\\left(s\\right),a\\right)\\left[2\\right]\\right]",
          "dragMode": "NONE"
        },
        {
          "type": "expression",
          "id": "79",
          "folderId": "76",
          "color": "#6042a6",
          "latex": "b_{0}=\\left[m_{ult}\\left(R\\left(s\\right),b\\right)\\left[1\\right],m_{ult}\\left(R\\left(s\\right),b\\right)\\left[2\\right]\\right]",
          "dragMode": "NONE"
        },
        {
          "type": "expression",
          "id": "82",
          "folderId": "76",
          "color": "#6042a6",
          "latex": "c_{0}=\\left[m_{ult}\\left(R\\left(s\\right),c\\right)\\left[1\\right],m_{ult}\\left(R\\left(s\\right),c\\right)\\left[2\\right]\\right]",
          "dragMode": "NONE"
        },
        {
          "type": "expression",
          "id": "106",
          "folderId": "76",
          "color": "#6042a6",
          "latex": "d_{0}=\\left[m_{ult}\\left(R\\left(s\\right),d\\right)\\left[1\\right],m_{ult}\\left(R\\left(s\\right),d\\right)\\left[2\\right]\\right]"
        },
        {
          "id": "110",
          "type": "table",
          "folderId": "76",
          "columns": [
            {
              "values": [
                "a_{0}\\left[1\\right]",
                "b_{0}\\left[1\\right]",
                "c_{0}\\left[1\\right]",
                "d_{0}\\left[1\\right]"
              ],
              "hidden": true,
              "id": "108",
              "color": "#c74440",
              "latex": "x_{2}"
            },
            {
              "values": [
                "a_{0}\\left[2\\right]",
                "b_{0}\\left[2\\right]",
                "c_{0}\\left[2\\right]",
                "d_{0}\\left[2\\right]"
              ],
              "id": "109",
              "color": "#6042a6",
              "latex": "y_{2}"
            }
          ]
        },
        {
          "type": "expression",
          "id": "101",
          "folderId": "76",
          "color": "#6042a6",
          "latex": "\\operatorname{polygon}\\left(\\left(x_{2},y_{2}\\right)\\right)"
        },
        {
          "type": "folder",
          "id": "28",
          "title": "Matrix",
          "collapsed": true
        },
        {
          "type": "expression",
          "id": "30",
          "folderId": "28",
          "color": "#c74440",
          "latex": "a_{11}=1"
        },
        {
          "type": "expression",
          "id": "31",
          "folderId": "28",
          "color": "#2d70b3",
          "latex": "a_{21}=0"
        },
        {
          "type": "expression",
          "id": "32",
          "folderId": "28",
          "color": "#388c46",
          "latex": "a_{12}=0"
        },
        {
          "type": "expression",
          "id": "33",
          "folderId": "28",
          "color": "#6042a6",
          "latex": "a_{22}=0"
        },
        {
          "type": "expression",
          "id": "36",
          "folderId": "28",
          "color": "#c74440",
          "latex": "M=\\left[a_{11},a_{21},a_{12},a_{22}\\right]"
        },
        {
          "type": "expression",
          "id": "60",
          "folderId": "28",
          "color": "#6042a6"
        },
        {
          "type": "expression",
          "id": "55",
          "folderId": "28",
          "color": "#6042a6",
          "latex": "r_{11}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "56",
          "folderId": "28",
          "color": "#000000",
          "latex": "r_{21}\\left(\\theta\\right)=\\sin\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "57",
          "folderId": "28",
          "color": "#c74440",
          "latex": "r_{12}\\left(\\theta\\right)=-\\sin\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "54",
          "folderId": "28",
          "color": "#388c46",
          "latex": "r_{22}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "58",
          "folderId": "28",
          "color": "#2d70b3",
          "latex": "R\\left(\\theta\\right)=\\left[r_{11}\\left(\\theta\\right),r_{21}\\left(\\theta\\right),r_{12}\\left(\\theta\\right),r_{22}\\left(\\theta\\right)\\right]",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "59",
          "folderId": "28",
          "color": "#388c46"
        },
        {
          "type": "expression",
          "id": "34",
          "folderId": "28",
          "color": "#000000",
          "latex": "m_{ult}\\left(m,v\\right)=\\left[m\\left[1\\right]\\cdot v\\left[1\\right]+m\\left[3\\right]\\cdot v\\left[2\\right],m\\left[2\\right]\\cdot v\\left[1\\right]+m\\left[4\\right]\\cdot v\\left[2\\right]\\right]"
        },
        {
          "type": "folder",
          "id": "47",
          "title": "Project",
          "collapsed": true
        },
        {
          "type": "expression",
          "id": "45",
          "folderId": "47",
          "color": "#6042a6",
          "latex": "a_{00}=\\left[m_{ult}\\left(M,a_{0}\\right)\\left[1\\right],m_{ult}\\left(M,a_{0}\\right)\\left[2\\right]-l\\right]"
        },
        {
          "type": "expression",
          "id": "48",
          "folderId": "47",
          "color": "#6042a6",
          "latex": "b_{00}=\\left[m_{ult}\\left(M,b_{0}\\right)\\left[1\\right],m_{ult}\\left(M,b_{0}\\right)\\left[2\\right]-l\\right]"
        },
        {
          "type": "expression",
          "id": "49",
          "folderId": "47",
          "color": "#6042a6",
          "latex": "c_{00}=\\left[m_{ult}\\left(M,c_{0}\\right)\\left[1\\right],m_{ult}\\left(M,c_{0}\\right)\\left[2\\right]-l\\right]"
        },
        {
          "type": "expression",
          "id": "112",
          "folderId": "47",
          "color": "#6042a6",
          "latex": "d_{00}=\\left[m_{ult}\\left(M,d_{0}\\right)\\left[1\\right],m_{ult}\\left(M,d_{0}\\right)\\left[2\\right]-l\\right]"
        },
        {
          "type": "expression",
          "id": "121",
          "folderId": "47",
          "color": "#2d70b3",
          "latex": "l=2"
        },
        {
          "id": "117",
          "type": "table",
          "folderId": "47",
          "columns": [
            {
              "values": [
                "a_{00}\\left[1\\right]",
                "b_{00}\\left[1\\right]",
                "c_{00}\\left[1\\right]",
                "d_{00}\\left[1\\right]"
              ],
              "hidden": true,
              "id": "115",
              "color": "#2d70b3",
              "latex": "x_{3}"
            },
            {
              "values": [
                "a_{00}\\left[2\\right]",
                "b_{00}\\left[2\\right]",
                "c_{00}\\left[2\\right]",
                "d_{00}\\left[2\\right]"
              ],
              "id": "116",
              "color": "#6042a6",
              "latex": "y_{3}"
            }
          ]
        },
        {
          "type": "expression",
          "id": "120",
          "folderId": "47",
          "color": "#6042a6",
          "latex": "\\operatorname{polygon}\\left(\\left(x_{3},y_{3}\\right)\\right)"
        },
        {
          "type": "expression",
          "id": "78",
          "color": "#c74440",
          "latex": "s=1.592",
          "slider": {
            "hardMin": true,
            "hardMax": true,
            "animationPeriod": 8000,
            "loopMode": "LOOP_FORWARD",
            "isPlaying": true,
            "min": "0",
            "max": "\\tau"
          }
        }
      ]
    },
    "includeFunctionParametersInRandomSeed": true
  };