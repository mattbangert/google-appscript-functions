/**
 * Creates a sheet with the supplied name if it does not exist
 * @param {String} sheetName 
 * @returns Sheet object
 * @private
 */
 function createSheetIfNotExists_(sheetName) {
    let activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = activeSpreadSheet.getSheetByName(sheetName);
    if (!sheet) {
      Logger.log(`Creating new sheet ${sheetName}`);
      activeSpreadSheet.insertSheet(sheetName);
    }
    return sheet;
  }

  /**
   * Removes duplicate rows from a sheet
   * @param {String} sheetName
   * @private 
   */
  function removeDuplicateRows_(sheetName) {
    let activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = activeSpreadSheet.getSheetByName(sheetName);
    let data = sheet.getDataRange().getValues();
    let newData = [];
    for (i in data) {
      let row = data[i];
      let duplicate = false;
      for (j in newData) {
        if (row.join() === newData[j].join()) {
          duplicate = true;
        }
      }
      if (!duplicate) {
        newData.push(row);
      }
    }
    sheet.clearContents();
    sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  }