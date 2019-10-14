
function doGet(e){
  return HtmlService
  .createTemplateFromFile("index")
  .evaluate();
}

function include(filename){
  return HtmlService
   .createHtmlOutputFromFile(filename)
   .getContent();
}

function onSubmitClick(userInfo){
  var url = "https://docs.google.com/spreadsheets/d/1X0tE7aIFrY5w2IhTvzF53VQx4CD06GYhUTnehlYOxfo/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([new Date(), userInfo.name,userInfo.languages, userInfo.database]);
  
}

function getData() {
  return SpreadsheetApp
      .openById('1X0tE7aIFrY5w2IhTvzF53VQx4CD06GYhUTnehlYOxfo')
      .getDataRange()
      .getValues();
}
