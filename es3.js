// localStorage.setItem("nome", "<tr><td>1</td></tr> style = 'text-allign:center'>-</td><td>1</td><td>0</td></tr></tr>/td>");
// console.log("nome:", localStorage.getItem("nome"));
$("#tab").append(localStorage.getItem("nome"));
// localStorage.clear();
$("#btn1").click(function () {
  calculation("+");
});

$("#btn2").click(() => calculation("-"));

$("#btn3").click(() => {
  calculation("*");
});

$("#btn4").click(() => {
  calculation("/");
});

var calculation = function (segno) {
  var input1 = $("#num1");
  var input2 = $("#num2");
  console.log("input1:", input1.val());
  console.log("input2:", input2.val());
  console.log("segno:", segno);
  if (input1.val() && input2.val()) {
    var n1 = parseInt(input1.val());
    var n2 = parseInt(input2.val());
    switch (segno) {
      case "+":
        var risultato = n1 + n2;
        break;
      case "-":
        var risultato = n1 - n2;
        break;
      case "*":
        var risultato = n1 * n2;
        break;
      case "/":
        var risultato = n1 / n2;
        break;
    }
    var string =
      "<tr><td>" +
      n1 +
      "</td><td style='text-align:center'>" +
      segno +
      "</td><td>" +
      n2 +
      "</td><td>" +
      risultato +
      "</td></tr>";
    var table = localStorage.getItem("tabella");
    localStorage.clear();
    localStorage.setItem("tabella", table + string);
    $("#tab").append(string);
    input1.val("");
    input2.val("");
  }
    $("#tab").append(
      localStorage.getItem("tabella")
    );
  };
