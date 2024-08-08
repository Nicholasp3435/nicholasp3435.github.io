let nae10zgqsj ={
    "version": 11,
    "randomSeed": "3521bc641fa33ccd861227f42a278498",
    "graph": {
      "viewport": {
        "xmin": -2.7,
        "ymin": -2.7,
        "xmax": 2.7,
        "ymax": 2.7
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
          "type": "text",
          "id": "1074",
          "folderId": "2",
          "text": " list of all points in 3D space"
        },
        {
          "id": "1244",
          "type": "table",
          "folderId": "2",
          "columns": [
            {
              "values": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8"
              ],
              "hidden": true,
              "id": "1242",
              "color": "#388c46",
              "latex": "v_{ert}"
            },
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
              "id": "1243",
              "color": "#6042a6",
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
              "id": "1245",
              "color": "#000000",
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
              "id": "1246",
              "color": "#c74440",
              "latex": "z_{0}"
            }
          ]
        },
        {
          "type": "text",
          "id": "1076",
          "folderId": "2",
          "text": "List how each face is drawn with 3 points"
        },
        {
          "id": "1251",
          "type": "table",
          "folderId": "2",
          "columns": [
            {
              "values": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
              ],
              "hidden": true,
              "id": "1249",
              "color": "#6042a6",
              "latex": "f_{ace}"
            },
            {
              "values": [
                "1",
                "1",
                "5",
                "5",
                "1",
                "1",
                "3",
                "3",
                "2",
                "2",
                "1",
                "1"
              ],
              "hidden": true,
              "id": "1250",
              "color": "#000000",
              "latex": "p_{1}"
            },
            {
              "values": [
                "2",
                "3",
                "6",
                "7",
                "2",
                "7",
                "4",
                "5",
                "3",
                "6",
                "4",
                "5"
              ],
              "hidden": true,
              "id": "1252",
              "color": "#c74440",
              "latex": "p_{2}"
            },
            {
              "values": [
                "3",
                "4",
                "7",
                "8",
                "7",
                "8",
                "5",
                "6",
                "6",
                "7",
                "5",
                "8"
              ],
              "hidden": true,
              "id": "1253",
              "color": "#2d70b3",
              "latex": "p_{3}"
            }
          ]
        },
        {
          "type": "folder",
          "id": "19",
          "title": "Rotation Matrices",
          "collapsed": true
        },
        {
          "type": "text",
          "id": "1078",
          "folderId": "19",
          "text": "rotation matrix about the yz plane"
        },
        {
          "type": "expression",
          "id": "33",
          "folderId": "19",
          "color": "#000000",
          "latex": "R_{yz}\\left(\\theta\\right)=\\left[r_{yz11}\\left(\\theta\\right),r_{yz12}\\left(\\theta\\right),r_{yz13}\\left(\\theta\\right),r_{yz21}\\left(\\theta\\right),r_{yz22}\\left(\\theta\\right),r_{yz23}\\left(\\theta\\right),r_{yz31}\\left(\\theta\\right),r_{yz32}\\left(\\theta\\right),r_{yz33}\\left(\\theta\\right)\\right]",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "36",
          "folderId": "19",
          "color": "#388c46",
          "latex": "r_{yz11}\\left(\\theta\\right)=1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "37",
          "folderId": "19",
          "color": "#6042a6",
          "latex": "r_{yz12}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "38",
          "folderId": "19",
          "color": "#000000",
          "latex": "r_{yz13}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "39",
          "folderId": "19",
          "color": "#c74440",
          "latex": "r_{yz21}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "40",
          "folderId": "19",
          "color": "#2d70b3",
          "latex": "r_{yz22}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "41",
          "folderId": "19",
          "color": "#388c46",
          "latex": "r_{yz23}\\left(\\theta\\right)=-\\sin\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "42",
          "folderId": "19",
          "color": "#6042a6",
          "latex": "r_{yz31}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "43",
          "folderId": "19",
          "color": "#000000",
          "latex": "r_{yz32}\\left(\\theta\\right)=\\sin\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "45",
          "folderId": "19",
          "color": "#2d70b3",
          "latex": "r_{yz33}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "107",
          "folderId": "19",
          "color": "#388c46"
        },
        {
          "type": "text",
          "id": "1082",
          "folderId": "19",
          "text": "rotation matrix about the xz plane"
        },
        {
          "type": "expression",
          "id": "108",
          "folderId": "19",
          "color": "#6042a6",
          "latex": "R_{xz}\\left(\\theta\\right)=\\left[r_{xz11}\\left(\\theta\\right),r_{xz12}\\left(\\theta\\right),r_{xz13}\\left(\\theta\\right),r_{xz21}\\left(\\theta\\right),r_{xz22}\\left(\\theta\\right),r_{xz23}\\left(\\theta\\right),r_{xz31}\\left(\\theta\\right),r_{xz32}\\left(\\theta\\right),r_{xz33}\\left(\\theta\\right)\\right]",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "111",
          "folderId": "19",
          "color": "#2d70b3",
          "latex": "r_{xz11}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "112",
          "folderId": "19",
          "color": "#388c46",
          "latex": "r_{xz12}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "113",
          "folderId": "19",
          "color": "#6042a6",
          "latex": "r_{xz13}\\left(\\theta\\right)=\\sin\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "114",
          "folderId": "19",
          "color": "#000000",
          "latex": "r_{xz21}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "115",
          "folderId": "19",
          "color": "#c74440",
          "latex": "r_{xz22}\\left(\\theta\\right)=1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "116",
          "folderId": "19",
          "color": "#2d70b3",
          "latex": "r_{xz23}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "117",
          "folderId": "19",
          "color": "#388c46",
          "latex": "r_{xz31}\\left(\\theta\\right)=-\\sin\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "118",
          "folderId": "19",
          "color": "#6042a6",
          "latex": "r_{xz32}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "119",
          "folderId": "19",
          "color": "#000000",
          "latex": "r_{xz33}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "110",
          "folderId": "19",
          "color": "#c74440"
        },
        {
          "type": "text",
          "id": "1084",
          "folderId": "19",
          "text": "rotation matrix about the xy plane"
        },
        {
          "type": "expression",
          "id": "35",
          "folderId": "19",
          "color": "#2d70b3",
          "latex": "R_{xy}\\left(\\theta\\right)=\\left[r_{xy11}\\left(\\theta\\right),r_{xy12}\\left(\\theta\\right),r_{xy13}\\left(\\theta\\right),r_{xy21}\\left(\\theta\\right),r_{xy22}\\left(\\theta\\right),r_{xy23}\\left(\\theta\\right),r_{xy31}\\left(\\theta\\right),r_{xy32}\\left(\\theta\\right),r_{xy33}\\left(\\theta\\right)\\right]",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "122",
          "folderId": "19",
          "color": "#388c46",
          "latex": "r_{xy11}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "123",
          "folderId": "19",
          "color": "#6042a6",
          "latex": "r_{xy12}\\left(\\theta\\right)=-\\sin\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "124",
          "folderId": "19",
          "color": "#000000",
          "latex": "r_{xy13}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "125",
          "folderId": "19",
          "color": "#c74440",
          "latex": "r_{xy21}\\left(\\theta\\right)=\\sin\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "126",
          "folderId": "19",
          "color": "#2d70b3",
          "latex": "r_{xy22}\\left(\\theta\\right)=\\cos\\left(\\theta\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "127",
          "folderId": "19",
          "color": "#388c46",
          "latex": "r_{xy23}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "128",
          "folderId": "19",
          "color": "#6042a6",
          "latex": "r_{xy31}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "129",
          "folderId": "19",
          "color": "#000000",
          "latex": "r_{xy32}\\left(\\theta\\right)=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "130",
          "folderId": "19",
          "color": "#c74440",
          "latex": "r_{xy33}\\left(\\theta\\right)=1",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "1188",
          "folderId": "19",
          "color": "#6042a6",
          "latex": "r_{0}\\left(v\\right)=m\\left(R_{xy}\\left(\\theta_{xy}\\right),m\\left(R_{xz}\\left(\\theta_{xz}\\right),m\\left(R_{yz}\\left(\\theta_{yz}\\right),v\\right)\\right)\\right)",
          "hidden": true
        },
        {
          "type": "folder",
          "id": "1095",
          "title": "Perspective"
        },
        {
          "type": "expression",
          "id": "1100",
          "folderId": "1095",
          "color": "#2d70b3",
          "latex": "P=\\left[af_{f},0,0,0,0,f_{f},0,0,0,0,d,-d\\cdot z_{near},0,0,1,0\\right]"
        },
        {
          "type": "expression",
          "id": "1117",
          "folderId": "1095",
          "color": "#388c46",
          "latex": "a=\\frac{h}{w}",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "1119",
          "folderId": "1095",
          "color": "#000000",
          "latex": "h=1",
          "hidden": true,
          "slider": {
            "hardMin": true,
            "min": "0"
          }
        },
        {
          "type": "expression",
          "id": "1120",
          "folderId": "1095",
          "color": "#c74440",
          "latex": "w=1",
          "hidden": true,
          "slider": {
            "hardMin": true,
            "min": "0",
            "max": "16"
          }
        },
        {
          "type": "expression",
          "id": "1102",
          "folderId": "1095",
          "color": "#6042a6",
          "latex": "f_{f}=\\frac{1}{\\tan\\left(\\frac{\\theta_{fov}}{2}\\right)}"
        },
        {
          "type": "expression",
          "id": "1103",
          "folderId": "1095",
          "color": "#000000",
          "latex": "\\theta_{fov}=1.073",
          "slider": {
            "hardMin": true,
            "hardMax": true,
            "min": "0",
            "max": "\\pi"
          }
        },
        {
          "type": "expression",
          "id": "1324",
          "folderId": "1095",
          "color": "#c74440",
          "latex": "\\frac{m_{4}\\left(P,g\\left(r_{0}\\left(\\left[-1,-1,-1\\right]\\right)\\right)\\right)\\left[1\\right]}{m_{4}\\left(P,g\\left(r_{0}\\left(\\left[-1,-1,-1\\right]\\right)\\right)\\right)\\left[4\\right]}"
        },
        {
          "type": "expression",
          "id": "1104",
          "folderId": "1095",
          "color": "#c74440",
          "latex": "d=\\frac{z_{far}}{z_{far}-z_{near}}"
        },
        {
          "type": "expression",
          "id": "1106",
          "folderId": "1095",
          "color": "#388c46",
          "latex": "z_{near}=-5",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "1105",
          "folderId": "1095",
          "color": "#2d70b3",
          "latex": "z_{far}=5",
          "hidden": true,
          "slider": {
            "hardMin": true,
            "min": "0"
          }
        },
        {
          "type": "text",
          "id": "1132",
          "folderId": "1095",
          "text": "Puts a 3×1 into a 4×1 for perspective matrix"
        },
        {
          "type": "expression",
          "id": "1133",
          "folderId": "1095",
          "color": "#6042a6",
          "latex": "g\\left(v\\right)=\\left[v\\left[1\\right],v\\left[2\\right],v\\left[3\\right],1\\right]"
        },
        {
          "type": "expression",
          "id": "1097",
          "folderId": "1095",
          "color": "#000000"
        },
        {
          "type": "text",
          "id": "1109",
          "folderId": "1095",
          "text": "returns a 4×1 vector of M×v where M is a 4×4 and v is a 4×1"
        },
        {
          "type": "expression",
          "id": "1110",
          "folderId": "1095",
          "color": "#c74440",
          "latex": "m_{4}\\left(M,v\\right)=\\left[M\\left[1\\right]v\\left[1\\right]+M\\left[2\\right]v\\left[2\\right]+M\\left[3\\right]v\\left[3\\right]+M\\left[4\\right]v\\left[4\\right],M\\left[5\\right]v\\left[1\\right]+M\\left[6\\right]v\\left[2\\right]+M\\left[7\\right]v\\left[3\\right]+M\\left[8\\right]v\\left[4\\right],M\\left[9\\right]v\\left[1\\right]+M\\left[10\\right]v\\left[2\\right]+M\\left[11\\right]v\\left[3\\right]+M\\left[12\\right]v\\left[4\\right],M\\left[13\\right]v\\left[1\\right]+M\\left[14\\right]v\\left[2\\right]+M\\left[15\\right]v\\left[3\\right]+M\\left[16\\right]v\\left[4\\right]\\right]"
        },
        {
          "type": "expression",
          "id": "1111",
          "folderId": "1095",
          "color": "#2d70b3"
        },
        {
          "type": "text",
          "id": "1353",
          "folderId": "1095",
          "text": "performs the perspective divide"
        },
        {
          "type": "expression",
          "id": "1166",
          "folderId": "1095",
          "color": "#2d70b3",
          "latex": "p_{d}\\left(v\\right)=\\left[m_{4}\\left(P,v\\right)\\left[1\\right],m_{4}\\left(P,v\\right)\\left[2\\right],m_{4}\\left(P,v\\right)\\left[3\\right],m_{4}\\left(P,v\\right)\\left[4\\right]\\right]"
        },
        {
          "type": "folder",
          "id": "1366",
          "title": "Translation",
          "collapsed": true
        },
        {
          "type": "expression",
          "id": "1367",
          "folderId": "1366",
          "color": "#2d70b3",
          "latex": "T=\\left[1,0,0,t_{x},0,1,0,t_{y},0,0,1,t_{z},0,0,0,1\\right]"
        },
        {
          "type": "expression",
          "id": "1371",
          "folderId": "1366",
          "color": "#c74440",
          "latex": "t\\left(v\\right)=m_{4}\\left(T,v\\right)"
        },
        {
          "type": "folder",
          "id": "102",
          "title": "Project",
          "collapsed": true
        },
        {
          "type": "text",
          "id": "1098",
          "folderId": "102",
          "text": "returns a 3×1 vector of M×v where M is a 3×3 and v is a 3×1"
        },
        {
          "type": "expression",
          "id": "100",
          "folderId": "102",
          "color": "#2d70b3",
          "latex": "m\\left(M,v\\right)=\\left[M\\left[1\\right]v\\left[1\\right]+M\\left[2\\right]v\\left[2\\right]+M\\left[3\\right]v\\left[3\\right],M\\left[4\\right]v\\left[1\\right]+M\\left[5\\right]v\\left[2\\right]+M\\left[6\\right]v\\left[3\\right],M\\left[7\\right]v\\left[1\\right]+M\\left[8\\right]v\\left[2\\right]+M\\left[9\\right]v\\left[3\\right]\\right]"
        },
        {
          "type": "expression",
          "id": "1131",
          "folderId": "102",
          "color": "#388c46"
        },
        {
          "type": "text",
          "id": "364",
          "folderId": "102",
          "text": "returns point of face f point p"
        },
        {
          "type": "expression",
          "id": "356",
          "folderId": "102",
          "color": "#6042a6",
          "latex": "f_{p}\\left(f,p_{0}\\right)=\\left[x_{0}\\left[p_{1}\\left[f\\right],p_{2}\\left[f\\right],p_{3}\\left[f\\right]\\right]\\left[p_{0}\\right],y_{0}\\left[p_{1}\\left[f\\right],p_{2}\\left[f\\right],p_{3}\\left[f\\right]\\right]\\left[p_{0}\\right],z_{0}\\left[p_{1}\\left[f\\right],p_{2}\\left[f\\right],p_{3}\\left[f\\right]\\right]\\left[p_{0}\\right]\\right]"
        },
        {
          "type": "expression",
          "id": "368",
          "folderId": "102",
          "color": "#6042a6"
        },
        {
          "type": "text",
          "id": "367",
          "folderId": "102",
          "text": "returns a orthogonal projected 2D point of a 3D vector [x,y,z]"
        },
        {
          "type": "expression",
          "id": "1283",
          "folderId": "102",
          "color": "#2d70b3",
          "latex": "p\\left(v\\right)=\\left(v\\left[1\\right],v\\left[2\\right]\\right)"
        },
        {
          "type": "expression",
          "id": "1361",
          "folderId": "102",
          "color": "#2d70b3"
        },
        {
          "type": "text",
          "id": "1319",
          "folderId": "102",
          "text": "orthographic projection"
        },
        {
          "type": "expression",
          "id": "1127",
          "folderId": "102",
          "color": "#6042a6",
          "latex": "p_{o}\\left(P_{0}\\right)=p\\left(r_{0}\\left(P_{0}\\right)\\right)"
        },
        {
          "type": "expression",
          "id": "187",
          "folderId": "102",
          "color": "#388c46",
          "latex": "\\left[\\operatorname{polygon}\\left(p_{o}\\left(f_{p}\\left(F,1\\right)\\right),p_{o}\\left(f_{p}\\left(F,2\\right)\\right),p_{o}\\left(f_{p}\\left(F,3\\right)\\right)\\right)\\operatorname{for}\\ F=\\left[1,...,\\operatorname{length}\\left(f_{ace}\\right)\\right]\\right]",
          "hidden": true,
          "lines": true,
          "fill": true,
          "colorLatex": "c",
          "fillOpacity": ".2"
        },
        {
          "type": "expression",
          "id": "1282",
          "folderId": "102",
          "color": "#c74440"
        },
        {
          "type": "text",
          "id": "1321",
          "folderId": "102",
          "text": "perspective projection"
        },
        {
          "type": "expression",
          "id": "1322",
          "folderId": "102",
          "color": "#6042a6",
          "latex": "p_{p}\\left(P_{0}\\right)=p\\left(p_{d}\\left(t\\left(g\\left(r_{0}\\left(P_{0}\\right)\\right)\\right)\\right)\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "1314",
          "folderId": "102",
          "color": "#6042a6",
          "latex": "\\left[\\operatorname{polygon}\\left(p_{p}\\left(f_{p}\\left(F,1\\right)\\right),p_{p}\\left(f_{p}\\left(F,2\\right)\\right),p_{p}\\left(f_{p}\\left(F,3\\right)\\right)\\right)\\operatorname{for}\\ F=\\left[1,...,\\operatorname{length}\\left(f_{ace}\\right)\\right]\\right]"
        },
        {
          "type": "expression",
          "id": "1191",
          "folderId": "102",
          "color": "#2d70b3"
        },
        {
          "type": "expression",
          "id": "1070",
          "folderId": "102",
          "color": "#388c46",
          "latex": "c=\\operatorname{rgb}\\left(66,182,62\\right)"
        },
        {
          "type": "expression",
          "id": "131",
          "color": "#2d70b3",
          "latex": "\\theta_{yz}=0",
          "slider": {
            "hardMin": true,
            "hardMax": true,
            "animationPeriod": 8000,
            "loopMode": "LOOP_FORWARD",
            "min": "0",
            "max": "\\tau"
          }
        },
        {
          "type": "expression",
          "id": "174",
          "color": "#2d70b3",
          "latex": "\\theta_{xz}=0",
          "slider": {
            "hardMin": true,
            "hardMax": true,
            "animationPeriod": 11428.57142857143,
            "loopMode": "LOOP_FORWARD",
            "min": "0",
            "max": "\\tau"
          }
        },
        {
          "type": "expression",
          "id": "173",
          "color": "#2d70b3",
          "latex": "\\theta_{xy}=0",
          "slider": {
            "hardMin": true,
            "hardMax": true,
            "animationPeriod": 5333.333333333333,
            "loopMode": "LOOP_FORWARD",
            "min": "0",
            "max": "\\tau"
          }
        },
        {
          "type": "expression",
          "id": "1368",
          "color": "#388c46",
          "latex": "t_{x}=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "1369",
          "color": "#6042a6",
          "latex": "t_{y}=0",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "1370",
          "color": "#000000",
          "latex": "t_{z}=5",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "1390",
          "color": "#000000"
        }
      ]
    },
    "includeFunctionParametersInRandomSeed": true
  };