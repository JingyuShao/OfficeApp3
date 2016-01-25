Excel.run(function (ctx) {
    var range = ctx.workbook.worksheets.getActiveWorksheet().getRange("A1:C3").load("values");
    var result = '';
	return ctx.sync().then(function () {
		for (var i = 0; i < range.values.length; i++) {
			for (var j = 0; j < range.values[i].length; j++) {
				result += range.values[i][j] + " ";
			}
		}
		console.log(result);
	});
}).catch(function (error) {
	console.log(error);
});