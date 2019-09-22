	
var pictures = new Array();
pictures[0] = new Image();
pictures[0].src = "http://emunix.emich.edu/~haynes/231/wi11/Pictures/miBlack.jpeg";
pictures[1] = new Image();
pictures[1].src = "http://emunix.emich.edu/~haynes/231/wi11/Pictures/miBrown.jpeg";

function boom (param) {
   var id = document.getElementById(param);
   id.src = "http://psacake.com/web/dots/FF00FF.gif";
   }
   
function gridPopulate () {
	if (confirm("want to see a pretty table?") ) {
		var rows = parseInt(prompt("Enter rows", "3"));
		var cols = parseInt(prompt("Enter cols", "2"));
		
		var s = "<table>";
		for (var i=0; i<rows; i++) {
			s += "<tr> ";
			for (var j=0; j<cols; j++) {
				var ix = (i * rows + j) % pictures.length;
				var id = i + "-" + j;
				s += "<td> <img src=' " + pictures[ix].src + 
					 "' " +
					 "title='" + id + "' " +
					 " id='" + id + "' " +
					 " onClick='boom(\"" + id + "\"); '" +
					 " height='100' width='100' ></td>";
					 
				//alert(s);
			}
			s += "</tr>";
		}
		s += "</table>";
		document.write(s);
		document.write("<br /> <br />");
	
	}	// if confirm
}
		   	