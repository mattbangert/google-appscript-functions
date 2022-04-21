/**
 * Return the value of a cell via the row number and header name
 * @param {Sheet} sheet 
 * @param {String} columnName 
 * @param {Integer} row 
 * @returns Object
 * @private
 */
function getCellValueByColumnName_(sheet, columnName, row) {
  let cell = getCellRangeByColumnName_(sheet, columnName, row);
  if (cell != null) {
    return cell.getValue();
  }
}
/**
 * 
 * @param {*} sheet 
 * @param {*} columnName 
 * @param {*} row 
 * @returns
 * @private
 */
function getCellRangeByColumnName_(sheet, columnName, row) {
  let data = sheet.getDataRange().getValues();
  let column = data[0].indexOf(columnName);
  if (column !== -1) {
    return sheet.getRange(row, column + 1, 1, 1);
  }
}


/**
 * Return the last row number that is non-empty
 * @param {Sheet} sheet 
 * @param {Integer} column 
 * @returns Integer
 * @private
 */
function lastRowForColumn_(sheet, column){
  // Get the last row with data for the whole sheet.
  var numRows = sheet.getLastRow();
  // Get all data for the given column
  var data = sheet.getRange(1, column, numRows).getValues();
  // Iterate backwards and find first non empty cell
  for(var i = data.length - 1 ; i >= 0 ; i--){
    if (data[i][0] != null && data[i][0] !== ""){
      return i + 1;
    }
  }
}