var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var tdnum = parseInt(input[0]);
for (var i = 0; i < tdnum; i++) {
  var a = input[i + 1].split(" ");
  var studnum = parseInt(a[0]);
  var sum = 0;
  var cnt = 0;
  var result = 0;
  var persentage = 0;
  var str = "";
  for (var j = 0; j < studnum; j++) {
    sum += parseInt(a[j + 1]);
  }
  result = sum / studnum;
  for (var k = 0; k < studnum; k++) {
    if (result < parseInt(a[k + 1])) {
      cnt++;
    }
  }
  persentage = (cnt / studnum) * 100;
  persentage = persentage.toFixed(3);
  str = persentage + "%";

  console.log(str);
}
