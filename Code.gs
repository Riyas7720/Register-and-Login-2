function doGet(e) {
  var window = HtmlService.createTemplateFromFile("index");
  var form = window.evaluate();
  var frame = form.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return frame;
}

function checkLogin(username, password) {
  var url = '';// Give your sheet url here
    var ss= SpreadsheetApp.openByUrl(url);
      var webAppSheet = ss.getSheetByName("DATA");
        var getLastRow =  webAppSheet.getLastRow();
          var found_record = '';
            for(var i = 1; i <= getLastRow; i++)
              {
                if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
                  webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
                    {
                  found_record = 'TRUE';
                }    
              }
            if(found_record == '')
          {
        found_record = 'FALSE'; 
      }
    return found_record;  
  }

function AddRecord(usernamee, passwordd, email, phone) {
  var url = '';// Give your sheet url here
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  webAppSheet.appendRow([usernamee,passwordd,email,phone]);
  
}
