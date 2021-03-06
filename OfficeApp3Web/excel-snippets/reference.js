Excel.run(function (ctx) {
    var originalRange = ctx.workbook.worksheets.getActiveWorksheet().getRange("A1:C4");
    var newRange = originalRange.insert(Excel.InsertShiftDirection.down);
    originalRange.format.fill.color = "Red";
    newRange.format.fill.color = "Yellow";
    return ctx.sync().then(function () {
        console.log("Success! Inserted yellow range above red range.");
    });
}).catch(function (error) {
	console.log(error);
});