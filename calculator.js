			function findmyfov() {
			var _dist = parseFloat(document.getElementById('dist').value);
			
			var _size = parseFloat(document.getElementById('size').value);
			
			var _aspecth = parseInt(document.getElementById('aspecth').value);
			
			var _aspectw = parseInt(document.getElementById('aspectw').value);
			
			var _aspecthyp = Math.sqrt(_aspecth*_aspecth + _aspectw*_aspectw);
			
			var _height = _aspecth * (_size/_aspecthyp);

			var _width = _aspectw * (_size/_aspecthyp);

			var _result = (2 * (Math.atan(0.5*(_width/_dist)))) * (180/Math.PI);
			if (!isNaN(_result)) {
				document.getElementById('horizfovangle').value = Math.round(_result).toString() + ' degrees';
				document.getElementById('vertfovangle').value = Math.round((2 * (Math.atan(0.5*(_height/_dist)))) * (180/Math.PI)).toString() + ' degrees';
			}
		}
