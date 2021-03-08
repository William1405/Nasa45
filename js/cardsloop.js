
			var flipCheck = 0;

			
			function rotateCards() {
			  if (flipCheck === 0) {
			    document.getElementById("front-3").classList.add("showGreen");
			    document.getElementById("back-3").classList.add("showRed");

			    document.getElementById("front-1").classList.add("showGreen");
			    document.getElementById("back-1").classList.add("showRed");

			    flipCheck = 1;

			    setTimeout(function () {
			      document.getElementById("front-2").classList.add("showGreen");
			      document.getElementById("back-2").classList.add("showRed");

			      document.getElementById("front-3").classList.add("showGreen");
			      document.getElementById("back-3").classList.add("showRed");

			      
			      }, 500);
			    
			  } else {
			    document.getElementById("front-3").classList.remove("showGreen");
			    document.getElementById("back-3").classList.remove("showRed");

			    document.getElementById("front-1").classList.remove("showGreen");
			    document.getElementById("back-1").classList.remove("showRed");

			    flipCheck = 0;

			    setTimeout(function () {
			      document.getElementById("front-2").classList.remove("showGreen");
			      document.getElementById("back-2").classList.remove("showRed");

			      
			    }, 500);
			  }
			}

setInterval(rotateCards, 4000); // Time in milliseconds
