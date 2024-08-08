let ba7poupvom = {
    "version": 11,
    "randomSeed": "925a1c18be65b1e4aae9c78c7bc742bf",
    "graph": {
      "viewport": {
        "xmin": -1.2940425515808507,
        "ymin": -1.306673902066691,
        "xmax": 1.3412515660662094,
        "ymax": 2.529143091397363
      },
      "showXAxis": false,
      "showYAxis": false,
      "xAxisStep": 0.4472135954999579,
      "yAxisStep": 0.4472135954999579
    },
    "expressions": {
      "list": [
        {
          "type": "folder",
          "id": "10",
          "title": "Matrices",
          "hidden": true,
          "collapsed": true
        },
        {
          "type": "text",
          "id": "12",
          "folderId": "10",
          "text": "Define your matrices here!"
        },
        {
          "type": "text",
          "id": "23",
          "folderId": "10",
          "text": "Matrix A:"
        },
        {
          "type": "expression",
          "id": "15",
          "folderId": "10",
          "color": "#6042a6",
          "latex": "a_{11}\\left(t\\right)=x_{0}",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "16",
          "folderId": "10",
          "color": "#fa7e19",
          "latex": "a_{12}\\left(t\\right)=x_{1}",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "17",
          "folderId": "10",
          "color": "#000000",
          "latex": "a_{21}\\left(t\\right)=y_{0}",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "18",
          "folderId": "10",
          "color": "#c74440",
          "latex": "a_{22}\\left(t\\right)=y_{1}",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "71",
          "folderId": "10",
          "color": "#388c46",
          "latex": "x_{0}=\\cos\\left(s\\right)",
          "hidden": true,
          "slider": {
            "min": "-11.8",
            "max": "22.4",
            "step": ".1"
          }
        },
        {
          "type": "expression",
          "id": "73",
          "folderId": "10",
          "color": "#000000",
          "latex": "x_{1}=\\sin\\left(s\\right)",
          "hidden": true,
          "slider": {
            "max": "23.4",
            "step": ".1"
          }
        },
        {
          "type": "expression",
          "id": "72",
          "folderId": "10",
          "color": "#6042a6",
          "latex": "y_{0}=\\sin\\left(s\\right)",
          "hidden": true,
          "slider": {
            "min": "-14.8",
            "max": "10.1",
            "step": ".1"
          }
        },
        {
          "type": "expression",
          "id": "74",
          "folderId": "10",
          "color": "#c74440",
          "latex": "y_{1}=-\\cos\\left(s\\right)",
          "hidden": true,
          "slider": {
            "max": "12.3",
            "step": ".1"
          }
        },
        {
          "type": "expression",
          "id": "70",
          "folderId": "10",
          "color": "#388c46",
          "latex": "i=\\left(x_{0},y_{0}\\right)",
          "label": "î '",
          "hidden": true,
          "labelSize": "2"
        },
        {
          "type": "expression",
          "id": "75",
          "folderId": "10",
          "color": "#c74440",
          "latex": "j=\\left(x_{1},y_{1}\\right)",
          "label": "ĵ '",
          "hidden": true,
          "labelSize": "2"
        },
        {
          "type": "expression",
          "id": "76",
          "folderId": "10",
          "color": "#388c46",
          "latex": "\\operatorname{polygon}\\left(\\left(0,0\\right),i\\right)",
          "hidden": true,
          "fill": false,
          "lineWidth": "8"
        },
        {
          "type": "expression",
          "id": "77",
          "folderId": "10",
          "color": "#c74440",
          "latex": "\\operatorname{polygon}\\left(\\left(0,0\\right),j\\right)",
          "hidden": true,
          "fill": true,
          "lineWidth": "8"
        },
        {
          "type": "text",
          "id": "32",
          "folderId": "10",
          "text": "If you have entered the values of the entries in terms of t, alter the value of t by changing the slider c:"
        },
        {
          "type": "expression",
          "id": "30",
          "folderId": "10",
          "color": "#388c46",
          "latex": "c=1.43",
          "hidden": true,
          "labelSize": "1",
          "slider": {
            "animationPeriod": 8000
          },
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "text",
          "id": "26",
          "folderId": "10",
          "text": "det(A):"
        },
        {
          "type": "expression",
          "id": "38",
          "folderId": "10",
          "color": "#388c46",
          "latex": "d_{et}\\left(c\\right)",
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "27",
          "folderId": "10",
          "color": "#c74440",
          "latex": "d_{et}\\left(t\\right)=a_{11}\\left(t\\right)a_{22}\\left(t\\right)-a_{12}\\left(t\\right)a_{21}\\left(t\\right)",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "text",
          "id": "34",
          "folderId": "10",
          "text": "Matrix B (the inverse of A):"
        },
        {
          "type": "text",
          "id": "43",
          "folderId": "10",
          "text": "(Note: You do not have to define matrix B.  As long as you define A, B is defined (B is defined as the inverse of A here))"
        },
        {
          "type": "expression",
          "id": "35",
          "folderId": "10",
          "color": "#000000",
          "latex": "A^{-1}=...",
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "36",
          "folderId": "10",
          "color": "#c74440",
          "latex": "b_{11}\\left(t\\right)=\\frac{a_{22}\\left(t\\right)}{d_{et}\\left(t\\right)}",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "39",
          "folderId": "10",
          "color": "#6042a6",
          "latex": "b_{12}\\left(t\\right)=-\\frac{a_{12}\\left(t\\right)}{d_{et}\\left(t\\right)}",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "40",
          "folderId": "10",
          "color": "#fa7e19",
          "latex": "b_{21}\\left(t\\right)=-\\frac{a_{21}\\left(t\\right)}{d_{et}\\left(t\\right)}",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "41",
          "folderId": "10",
          "color": "#000000",
          "latex": "b_{22}\\left(t\\right)=\\frac{a_{11}\\left(t\\right)}{d_{et}\\left(t\\right)}",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "folder",
          "id": "2",
          "title": "Coordinates",
          "hidden": true,
          "collapsed": true
        },
        {
          "type": "text",
          "id": "4",
          "folderId": "2",
          "text": "Define your coordinates here!"
        },
        {
          "type": "expression",
          "id": "59",
          "folderId": "2",
          "color": "#c74440",
          "latex": "c_{0}=\\left[\\left(X,Y\\right)\\operatorname{for}X=\\left[-20,...,20\\right],Y=\\left[-20,...,20\\right]\\right]",
          "hidden": true,
          "dragMode": "NONE",
          "pointOpacity": ".1"
        },
        {
          "type": "expression",
          "id": "69",
          "folderId": "2",
          "color": "#2d70b3",
          "latex": "a=c_{0}.x"
        },
        {
          "type": "expression",
          "id": "60",
          "folderId": "2",
          "color": "#2d70b3",
          "latex": "b=c_{0}.y"
        },
        {
          "type": "expression",
          "id": "21",
          "folderId": "2",
          "color": "#388c46",
          "latex": "\\left(a\\cdot a_{11}\\left(c\\right)+b\\cdot a_{12}\\left(c\\right),a\\cdot a_{21}\\left(c\\right)+b\\cdot a_{22}\\left(c\\right)\\right)",
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "text",
          "id": "20",
          "folderId": "2",
          "text": "The coordinates under the transformation of matrix A is:"
        },
        {
          "type": "text",
          "id": "45",
          "folderId": "2",
          "text": "The coordinates under the transformation of matrix B is (see folder \"Matrices\"):"
        },
        {
          "type": "folder",
          "id": "97",
          "title": "arrow",
          "collapsed": true
        },
        {
          "type": "expression",
          "id": "85",
          "folderId": "97",
          "color": "#c74440",
          "latex": "h_{1}=\\left(-0.0625,0\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "86",
          "folderId": "97",
          "color": "#2d70b3",
          "latex": "h_{2}=\\left(-0.0625,0.75\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "87",
          "folderId": "97",
          "color": "#388c46",
          "latex": "h_{3}=\\left(-0.125,0.75\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "88",
          "folderId": "97",
          "color": "#6042a6",
          "latex": "h_{4}=\\left(0,1\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "89",
          "folderId": "97",
          "color": "#000000",
          "latex": "h_{5}=\\left(0.125,\\ 0.75\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "278",
          "folderId": "97",
          "color": "#000000",
          "latex": "h_{6}=\\left(0.0625,0.75\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "279",
          "folderId": "97",
          "color": "#c74440",
          "latex": "h_{7}=\\left(0.0625,0\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "83",
          "folderId": "97",
          "color": "#fa7e19",
          "latex": "\\operatorname{polygon}\\left(h_{1},h_{2},h_{3},h_{4},h_{5},\\ h_{6},\\ h_{7}\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "90",
          "folderId": "97",
          "color": "#6042a6",
          "latex": "\\operatorname{polygon}\\left(t_{f}\\left(h_{1}\\right),t_{f}\\left(h_{2}\\right),t_{f}\\left(h_{3}\\right),t_{f}\\left(h_{4}\\right),t_{f}\\left(h_{5}\\right),t_{f}\\left(h_{6}\\right),t_{f}\\left(h_{7}\\right)\\right)"
        },
        {
          "type": "expression",
          "id": "103",
          "folderId": "97",
          "color": "#388c46"
        },
        {
          "type": "folder",
          "id": "48",
          "title": "Functions",
          "hidden": true,
          "collapsed": true
        },
        {
          "type": "text",
          "id": "50",
          "folderId": "48",
          "text": "Define your function here!"
        },
        {
          "type": "expression",
          "id": "51",
          "folderId": "48",
          "color": "#000000",
          "latex": "f\\left(x\\right)=e^x",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "0",
            "max": "1"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "0",
            "max": "1"
          }
        },
        {
          "type": "expression",
          "id": "52",
          "folderId": "48",
          "color": "#c74440",
          "latex": "\\left(t,f\\left(t\\right)\\right)",
          "labelSize": "1",
          "parametricDomain": {
            "min": "-100",
            "max": "100"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "-100",
            "max": "100"
          }
        },
        {
          "type": "text",
          "id": "54",
          "folderId": "48",
          "text": "Function under transformation of A:"
        },
        {
          "type": "expression",
          "id": "55",
          "folderId": "48",
          "color": "#388c46",
          "latex": "\\left(t\\cdot a_{11}\\left(c\\right)+f\\left(t\\right)\\cdot a_{12}\\left(c\\right),t\\cdot a_{21}\\left(c\\right)+f\\left(t\\right)\\cdot a_{22}\\left(c\\right)\\right)",
          "labelSize": "1",
          "parametricDomain": {
            "min": "-100",
            "max": "100"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "-100",
            "max": "100"
          }
        },
        {
          "type": "text",
          "id": "57",
          "folderId": "48",
          "text": "Function under transformation of B (see folder \"Matrices\"):"
        },
        {
          "type": "expression",
          "id": "58",
          "folderId": "48",
          "color": "#fa7e19",
          "latex": "\\left(t\\cdot b_{11}\\left(c\\right)+f\\left(t\\right)\\cdot b_{12}\\left(c\\right),t\\cdot b_{21}\\left(c\\right)+f\\left(t\\right)\\cdot b_{22}\\left(c\\right)\\right)",
          "hidden": true,
          "labelSize": "1",
          "parametricDomain": {
            "min": "-100",
            "max": "100"
          },
          "fillOpacity": "0.4",
          "domain": {
            "min": "-100",
            "max": "100"
          }
        },
        {
          "type": "expression",
          "id": "93",
          "color": "#6042a6",
          "latex": "t_{f}\\left(v\\right)=\\left(v.x\\cdot a_{11}\\left(c\\right)+v.y\\cdot a_{12}\\left(c\\right),v.x\\cdot a_{21}\\left(c\\right)+v.y\\cdot a_{22}\\left(c\\right)\\right)"
        },
        {
          "type": "expression",
          "id": "323",
          "color": "#000000",
          "latex": "t_{f1x}=\\operatorname{round}\\left(\\left(1\\cdot\\cos\\left(s_{0}\\right)+2\\cdot\\sin\\left(s_{0}\\right),1\\cdot\\sin\\left(s_{0}\\right)+-2\\cos\\left(s_{0}\\right)\\right).x,2\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "326",
          "color": "#388c46",
          "latex": "t_{f1y}=\\operatorname{round}\\left(\\left(1\\cdot\\cos\\left(s_{0}\\right)+2\\cdot\\sin\\left(s_{0}\\right),1\\cdot\\sin\\left(s_{0}\\right)+-2\\cos\\left(s_{0}\\right)\\right).y,2\\right)"
        },
        {
          "type": "expression",
          "id": "280",
          "color": "#2d70b3",
          "latex": "s=\\arctan\\left(2\\right)+\\frac{\\pi}{2}+t_{7}",
          "hidden": true,
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
          "id": "324",
          "color": "#c74440",
          "latex": "s_{0}=t_{7}+2\\arctan\\left(2\\right)"
        },
        {
          "type": "expression",
          "id": "296",
          "color": "#c74440",
          "latex": "t_{8}=\\operatorname{round}\\left(t_{7},2\\right)"
        },
        {
          "type": "folder",
          "id": "290",
          "title": "text"
        },
        {
          "type": "expression",
          "id": "292",
          "folderId": "290",
          "color": "#2d70b3",
          "latex": "s_{1}=\\operatorname{round}\\left(\\sin\\left(t_{7}\\right),2\\right)"
        },
        {
          "type": "expression",
          "id": "327",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "s_{2}=\\operatorname{round}\\left(-\\sin\\left(t_{7}\\right),2\\right)"
        },
        {
          "type": "expression",
          "id": "293",
          "folderId": "290",
          "color": "#388c46",
          "latex": "c_{1}=\\operatorname{round}\\left(\\cos\\left(t_{7}\\right),2\\right)"
        },
        {
          "type": "expression",
          "id": "299",
          "folderId": "290",
          "color": "#388c46",
          "latex": "p_{0}=\\left(-0.21,2.18\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "328",
          "folderId": "290",
          "color": "#000000",
          "latex": "p_{2}=\\left(0.825,1.2\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "332",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{2}+\\left(0,\\ 0.08\\right)",
          "showLabel": true,
          "label": "${t_{f1x}}",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "333",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{2}+\\left(0,\\ -0.08\\right)",
          "showLabel": true,
          "label": "${t_{f1y}}",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "309",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(1.1,0.08\\right)",
          "showLabel": true,
          "label": "1",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "319",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(.8,0.08\\right)",
          "showLabel": true,
          "label": "1",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "310",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(1.1,-0.08\\right)",
          "showLabel": true,
          "label": "2",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "318",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(.8,-0.08\\right)",
          "showLabel": true,
          "label": "2",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "311",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(1.1,0.02\\right)",
          "showLabel": true,
          "label": "⌈ ⌉",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "above",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "317",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(.8,0.02\\right)",
          "showLabel": true,
          "label": "⌈ ⌉",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "above",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "331",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{2}+\\left(0,0.02\\right)",
          "showLabel": true,
          "label": "⌈  ⌉",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "above",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "313",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(1.1,-0.02\\right)",
          "showLabel": true,
          "label": "⌊ ⌋",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "below",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "316",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{2}+\\left(0,-0.02\\right)",
          "showLabel": true,
          "label": "⌊  ⌋",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "below",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "330",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(.8,-0.02\\right)",
          "showLabel": true,
          "label": "⌊ ⌋",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "below",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "312",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(1.1,0\\right)",
          "showLabel": true,
          "label": "|  |",
          "hidden": true,
          "labelSize": "1.25",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "315",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(.8,0\\right)",
          "showLabel": true,
          "label": "|  |",
          "hidden": true,
          "labelSize": "1.25",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "329",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{2}+\\left(0,0\\right)",
          "showLabel": true,
          "label": "=|   |   ",
          "hidden": true,
          "labelSize": "1.25",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "308",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(0,0.08\\right)",
          "showLabel": true,
          "label": "cos(${t_{8}}) sin(${t_{8}})",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "307",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(0,-0.08\\right)",
          "showLabel": true,
          "label": "-sin(${t_{8}}) cos(${t_{8}})",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "295",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(0,0.02\\right)",
          "showLabel": true,
          "label": "⌈          ⌉",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "above",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "297",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(0,-0.02\\right)",
          "showLabel": true,
          "label": "⌊          ⌋",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "below",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "298",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{0}+\\left(0,0\\right)",
          "showLabel": true,
          "label": "|           |",
          "hidden": true,
          "labelSize": "1.25",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "300",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}=\\left(0.1,1.7\\right)",
          "hidden": true
        },
        {
          "type": "expression",
          "id": "291",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(0,0.08\\right)",
          "showLabel": true,
          "label": "${c_{1}} ${s_{1}}",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "294",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(0,-0.08\\right)",
          "showLabel": true,
          "label": "${s_{2}} ${c_{1}}",
          "hidden": true,
          "labelSize": "1.25"
        },
        {
          "type": "expression",
          "id": "306",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(0,0.02\\right)",
          "showLabel": true,
          "label": "⌈      ⌉",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "above",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "305",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(0,-0.02\\right)",
          "showLabel": true,
          "label": "⌊      ⌋",
          "hidden": true,
          "labelSize": "1.25",
          "labelOrientation": "below",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "304",
          "folderId": "290",
          "color": "#6042a6",
          "latex": "p_{1}+\\left(0,0\\right)",
          "showLabel": true,
          "label": "= |       |           ",
          "hidden": true,
          "labelSize": "1.25",
          "suppressTextOutline": true
        },
        {
          "type": "expression",
          "id": "320",
          "folderId": "290",
          "color": "#2d70b3"
        },
        {
          "type": "expression",
          "id": "282",
          "color": "#6042a6",
          "latex": "t_{7}=0",
          "hidden": true,
          "slider": {
            "hardMin": true,
            "hardMax": true,
            "animationPeriod": 5333.333333333333,
            "loopMode": "LOOP_FORWARD",
            "min": "0",
            "max": "\\tau"
          }
        }
      ]
    },
    "includeFunctionParametersInRandomSeed": true
  }