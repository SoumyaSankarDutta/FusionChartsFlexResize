window.onload = function () {
  initResizeElement();
};

function initResizeElement() {
  var popups = document.getElementsByClassName("popup");
  var element = null;
  var startX, startY, startWidth, startHeight;

  for (var i = 0; i < popups.length; i++) {
    var p = popups[i];

    var right = document.createElement("div");
    right.className = "resizer-right";
    p.appendChild(right);
    right.addEventListener("mousedown", initDrag, false);
    right.parentPopup = p;

    var bottom = document.createElement("div");
    bottom.className = "resizer-bottom";
    p.appendChild(bottom);
    bottom.addEventListener("mousedown", initDrag, false);
    bottom.parentPopup = p;

    var both = document.createElement("div");
    both.className = "resizer-both";
    p.appendChild(both);
    both.addEventListener("mousedown", initDrag, false);
    both.parentPopup = p;
  }

  function initDrag(e) {
    element = this.parentPopup;

    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(element).width,
      10
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(element).height,
      10
    );
    document.documentElement.addEventListener("mousemove", doDrag, false);
    document.documentElement.addEventListener("mouseup", stopDrag, false);
  }

  function doDrag(e) {
    element.style.width = startWidth + e.clientX - startX + "px";
    element.style.height = startHeight + e.clientY - startY + "px";
  }

  function stopDrag() {
    document.documentElement.removeEventListener("mousemove", doDrag, false);
    document.documentElement.removeEventListener("mouseup", stopDrag, false);
  }
}
FusionCharts.ready(function () {
  let dataSource = {
    chart: {
      caption: "Sales Trends",
      subcaption: "FY 2018 - FY 2019",
      xaxisname: "Month",
      yaxisname: "Revenue",
      showvalues: "1",
      numberprefix: "$",
      labeldisplay: "WRAP",
      linethickness: "3",
      numVisiblePlot: "6",
      scrollheight: "10",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      scrollColor: "#cccccc",
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: "Jan 2012",
          },
          {
            label: "Feb 2012",
          },
          {
            label: "Mar 2012",
          },
          {
            label: "Apr 2012",
          },
          {
            label: "May 2012",
          },
          {
            label: "Jun 2012",
          },
          {
            label: "Jul 2012",
          },
          {
            label: "Aug 2012",
          },
          {
            label: "Sep 2012",
          },
          {
            label: "Oct 2012",
          },
          {
            label: "Nov 2012",
          },
          {
            label: "Dec 2012",
          },
          {
            label: "Jan 2013",
          },
          {
            label: "Feb 2013",
          },
          {
            label: "Mar 2013",
          },
          {
            label: "Apr 2013",
          },
          {
            label: "May 2013",
          },
          {
            label: "Jun 2013",
          },
          {
            label: "Jul 2013",
          },
          {
            label: "Aug 2013",
          },
          {
            label: "Sep 2013",
          },
          {
            label: "Oct 2013",
          },
          {
            label: "Nov 2013",
          },
          {
            label: "Dec 2013",
          },
        ],
      },
    ],
    dataset: [
      {
        data: [
          {
            value: "27400",
          },
          {
            value: "29800",
          },
          {
            value: "25800",
          },
          {
            value: "26800",
          },
          {
            value: "29600",
          },
          {
            value: "32600",
          },
          {
            value: "31800",
          },
          {
            value: "36700",
          },
          {
            value: "29700",
          },
          {
            value: "31900",
          },
          {
            value: "34800",
          },
          {
            value: "24800",
          },
          {
            value: "26300",
          },
          {
            value: "31800",
          },
          {
            value: "30900",
          },
          {
            value: "33000",
          },
          {
            value: "36200",
          },
          {
            value: "32100",
          },
          {
            value: "37500",
          },
          {
            value: "38500",
          },
          {
            value: "35400",
          },
          {
            value: "38200",
          },
          {
            value: "33300",
          },
          {
            value: "38300",
          },
        ],
      },
    ],
  };
  let dataSource1 = {
    chart: {
      caption: "Sales Trends 1",
      xaxisname: "Month",
      yaxisname: "Revenue",
      showvalues: "1",
      numberprefix: "$",
      labeldisplay: "WRAP",
      linethickness: "3",
      numVisiblePlot: "6",
      scrollheight: "10",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      scrollColor: "#cccccc",
      theme: "fusion",
    },
    categories: [
      {
        category: [
          { label: "Jan 2012" },
          { label: "Jan 2013" },
          { label: "Jan 2014" },
        ],
      },
    ],
    dataset: [
      {
        data: [{ value: "27400" }, { value: "17400" }, { value: "37400" }],
      },
    ],
  };
  var revenueChart = new FusionCharts({
    type: "scrollbar2d",
    renderAt: "chart-container4",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: dataSource,
  }).render();
  var revenueChart = new FusionCharts({
    type: "scrollbar2d",
    renderAt: "chart-container2",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: dataSource,
  }).render();
  var revenueChart = new FusionCharts({
    type: "scrollbar2d",
    renderAt: "chart-container3",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: dataSource,
  }).render();
});
