var fruit = [
    { fruitName: "Apple", 
      fruitQuantity: 20 },
    { fruitName: "Orange", 
      fruitQuantity: 10 },
    { fruitName: "Banana", 
      fruitQuantity: 15 },
    { fruitName: "Kiwi", 
      fruitQuantity: 5 },
    { fruitName: "Blueberry", 
      fruitQuantity: 5 },
    { fruitName: "Grapes", 
      fruitQuantity: 10 }
  ];
  
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  
  // Set up the chart
  var chartWidth = 350;
  var chartHeight = 250;
  var barHeight = 50;
  var barMargin = 5;
  var chartX = 0;
  var chartY = 10;
  
  // Define the fruitColor
  var fruitColor = {
    "Apple": "red",
    "Orange": "orange",
    "Banana": "yellow",
    "Kiwi": "green",
    "Blueberry": "blue",
    "Grapes": "purple"
  };
  
  // Draw the bars and labels
  for (var i = 0; i < fruit.length; i++) {
    var item = fruit[i];
    var barWidth = (item.fruitQuantity / (chartWidth/25)) * chartWidth;
    var barX = chartX;
    var barY = chartY + (i * (barHeight + barMargin));
    ctx.fillStyle = fruitColor[item.fruitName];
    ctx.fillRect(barX, barY, barWidth, barHeight);
  
    // Draw the label
    var labelText = item.fruitName + " (" + item.fruitQuantity + ")";
    var fontSize = 20;
    ctx.font = "italic bold " + fontSize + "px Arial";

    var labelX = barX + barWidth / 2;
    var labelY = barY + barHeight / 2 + fontSize / 2;
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
   
    ctx.fillText(labelText, labelX, labelY);
    
  }
  