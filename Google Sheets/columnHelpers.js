/**
 * Return the column index value by the header name
 * @param {Sheet} sheet 
 * @param {String} name 
 * @returns 
 * @private
 */
function getColumnByName_(sheet, name) {
  // get column headers as an array to search through
  let headers = sheet.getDataRange().getValues().shift();
  // search array looking for specific text to return its position
  let colindex = headers.indexOf(name);
  return colindex + 1;
}

function getColumnRangeByName_(sheet, columnName) {
  let data = sheet.getRange("A1:1").getValues();
  let column = data[0].indexOf(columnName);
  if (column != -1) {
    return sheet.getRange(2, column + 1, sheet.getMaxRows());
  }
}

/**
 * Return all of the values for a column
 * @param {Sheet}} sheet 
 * @param {String} columnName 
 * @returns Object[]
 * @private
 */
function getColumnValuesByName_(sheet, columnName) {
  let column = getColumnRangeByName_(sheet, columnName);
  if (column != null) {
    return column.getValues();
  }
}

/**
 * Write the content of an array to a column.  This will overwrite any existing values.
 * @param {Sheet} sheet 
 * @param {String} column 
 * @param {String[]} values 
 * @private
 */
function addArrayToSheetColumn_(sheet, column, values) {
  const range = [column, "1:", column, values.length].join("");
  const fn = function (v) {
    return [v];
  };
  sheet.getRange(range).setValues(values.map(fn));
}
