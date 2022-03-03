/**
 * Creates a sheet with the supplied name if it does not exist
 * @param {String} sheetName 
 * @returns Sheet object
 * @private
 */
 function createSheetIfNotExists_(sheetName) {
    var activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = activeSpreadSheet.getSheetByName(sheetName);
    if (!sheet) {
      Logger.log(`Creating new sheet ${sheetName}`);
      activeSpreadSheet.insertSheet(sheetName);
    }
    return sheet;
  }