var rows = 8;
var columns = 8;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'cell'
});
$(document).ready( function () 
{
	//BW
	for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#bw").append($row.clone());
    }

    $( "#bw .cell" ).each(function( index ) {
  		//console.log( index + ": " + $( this ).text() );
  		var bw = ["black", "white"];
  		$(this).css("background-color", bw[Math.round(Math.random())]);
	});

	$row = $("<div />", {
    	class: 'row'
	});

	$square = $("<div />", {
    	class: 'cell'
	});

	//Grayscale
	for (var i = 0; i < 16; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < 16; i++) {
        $("#gray").append($row.clone());
    }

    $( "#gray .cell" ).each(function( index ) {
  		//console.log( index + ": " + $( this ).text() );
  		var gray = Math.floor(256*Math.random());
  		//var grayHex = "#" + gray + gray + gray;
  		var grayRGB = "rgb(" + gray + "," + gray + "," + gray +")";
  		$(this).css("background-color", grayRGB);
	});

	$row = $("<div />", {
    	class: 'row'
	});

	$square = $("<div />", {
    	class: 'cell'
	});

	//Color
	for (var i = 0; i < 24; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < 24; i++) {
        $("#color").append($row.clone());
    }

    $( "#color .cell" ).each(function( index ) {
  		//console.log( index + ": " + $( this ).text() );
  		var colorRGB = "rgb(" + Math.floor(256*Math.random()) + "," +
  			Math.floor(256*Math.random()) + "," +
  			Math.floor(256*Math.random()) + ")";
  		//var grayHex = "#" + gray + gray + gray;
  		//var grayRGB = "rgb(" + color + "," + gray + "," + gray +")";
  		$(this).css("background-color", colorRGB);
  		console.log($(this).css("background-color"));
  		console.log($(this).css("background-color").split(","));

  		var colors = $(this).css("background-color").split(",");
  		console.log(colors[0].split("(")[1]);
  		//console.log(parseInt(colors[0].split("(")[1].trim()))
	});

	$( "#invertButton" ).click(function() {
  		$( ".cell" ).each(function( index ) {
   			var colors = $(this).css("background-color").split(",");
   			var red = parseInt(colors[0].split("(")[1].trim());
   			var blue = parseInt(colors[1].trim());
   			var green = parseInt(colors[2].split(")")[0].trim());

   			var rgb = "rgb(" + (256 - red) + "," + (256 - blue) + "," + (256 - green) + ")";
   			$(this).css("background-color", rgb);
   			console.log(rgb);
	 	});
	});

	$("#reloadButton").click(function(){
		location.reload();
	});
})