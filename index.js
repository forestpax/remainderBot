/*
・xx月xx日のx - setdate

・x日のx時 - setdatehour

・xxか月後 - setmonth

・x日後 - setday

・x時間後 - sethour

・x分後 - setminute

*/

// 1列目にリマインドする日時、2列目に事項
var ss = SpreadsheetApp.openById('1IMWsaS1aBV8zdIMvJcWcdeDE3wkRgCpfLxJisNCl12Y').getSheetByName('シート1');

function setdate(){
  var date = '11月18日';
  var month = date.match(/(.+)月/i)[1];
  var day = date.match(/月(.+)日/i)[1];
  Logger.log(month);
  Logger.log(day);
}

function test(){

}
