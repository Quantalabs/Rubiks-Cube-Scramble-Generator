var scramble_button = document.getElementById("sb")
		
		var scramble = function () {
			var scramble_options = ["r","l","d","u","f","b"]
			var scramble_length = document.getElementById("scramble-length").value
			var scramble = []
			var FRU = document.getElementById("FRU")
			
			if(FRU.checked) {
				scramble_options = ["r","f","u"]
			} else {
				scramble_options = ["r","l","d","u","f","b"]
			}
			
			for(var i = 0; i<scramble_length; i++) {
				var prime = Math.round(Math.random())
				var option = Math.floor(Math.random() * scramble_options.length)

				if(prime == 0) {
					if(scramble[i] == scramble[i-1]) {
						prime = Math.round(Math.random())
						option = Math.floor(Math.random() * scramble_options.length)
						scramble.push(scramble_options[option] + "' ")
					} else {
						scramble.push(scramble_options[option] + "' ")
					}
				}
				else {
					if(scramble[i] == scramble[i-1]) {
						scramble[i-1] = scramble_options[option] + "2 "
					} else {
						scramble.push(scramble_options[option])
						scramble.push(" ")
					}
				}
			}
			document.getElementById("scramble").textContent = scramble.join("")
		}
		
		scramble_button.addEventListener("click",scramble)
