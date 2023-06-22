var result = $(".result");
var buttons = $(".button");
var currentValue = "0";

buttons.click(function () {
    var buttonValue = $(this).text();
    
    switch (buttonValue) {
      case "AC":
        currentValue = "0";
        break;
      case "+/-":
        currentValue *= -1;
        break;
      case "%":
        currentValue /= 100;
        break;
      case "=":
        var expression = currentValue.replace("x", "*");
        currentValue = new Function('return ' + expression)();
        break;
      default:
        currentValue = currentValue === "0" ? buttonValue : currentValue + buttonValue;
        break;
    }
    
    result.text(currentValue);
});
