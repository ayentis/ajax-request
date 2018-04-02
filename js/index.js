var lastRate = 0;
function updateRate() {
  $.get(url = "https://api.coindesk.com/v1/bpi/currentprice.json", function(
    res,
    st,
    xhr
  ) {
    let obj = JSON.parse(res);
    var copy = new Date();
    var delta = Number(obj.bpi.USD.rate.replace(",", "")) - lastRate;
    $("div").html(
      obj.bpi.USD.rate + " " + obj.chartName + " " + copy.getTime()
    );

    if (lastRate && delta > 0) $("div").css({ color: "green" });
    if (lastRate && delta < 0) $("div").css({ color: "red" });

    lastRate = Number(obj.bpi.USD.rate.replace(",", ""));
  });
}
updateRate();
$("button").on("click", () => updateRate());
setInterval(updateRate, 1000);