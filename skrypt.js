function myFunction() {
	
	
	function determinantofthematrix(matrix) {
        var det = 0;
        var n = matrix.length;
        if (n == 1) {
            return matrix[0][0];
        }
        if (n == 2) {
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        }
        for (var i = 0; i < n; i++) {
            var temp = [];
            for (var j = 1; j < n; j++) {
                var temp2 = [];
                for (var k = 0; k < n; k++) {
                    if (k == i) {
                        continue;
                    }
                    temp2.push(matrix[j][k]);
                }
                temp.push(temp2);
            }
            det += Math.pow(-1, i) * matrix[0][i] * determinantofthematrix(temp);
        }
        return det;
    }
	
	
	
	
	var zawartoscPolaTesktowego = document.getElementById('macierz').value;
	zawartoscPolaTesktowego = zawartoscPolaTesktowego.replaceAll(' ', ', ')
	var macierzPosortowanaWierszami = zawartoscPolaTesktowego.split('\n')
	var wielkoscMacierzy = macierzPosortowanaWierszami.length;
	var macierzKoncowa = `[`;
	
	for (i = 0; i < wielkoscMacierzy; i++) {
		
		macierzKoncowa = macierzKoncowa + `, [` + macierzPosortowanaWierszami[i] + `]`;
		
	}
	macierzKoncowa = macierzKoncowa + `]`
	macierzKoncowa = macierzKoncowa.replaceAll('[, ', '[');
	
	var wyznacznik = determinantofthematrix(eval(macierzKoncowa));
	wyznacznik = Math.round(wyznacznik * 1000) / 1000;
	
	console.log(macierzKoncowa);
	
	document.getElementById("wyznacznikMacierzy").innerHTML = `Wyznacznik macierzy: ${wyznacznik}`
	
}