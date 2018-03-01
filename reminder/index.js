/*
・xx月xx日のx - setdate

・x日のx時 - setdatehour

・xxか月後 - setmonth

・x日後 - setday

・x時間後 - sethour

・x分後 - setminute

*/

'use strict';
const moment = require('moment');
const schedule = require('node-schedule');
const now = new Date();
cons

function setdate(){
  var dateString = '11月18日';
  const month = dateString.match(/(.+)月/i)[1];
  const day = dateString.match(/月(.+)日/i)[1];
  let date = now.setMonth(month - 1).setdate(day);
  date = checkDate(date);
  return date;
}

function test(){

}

function reminder(task,date){
  schedule.scheduleJob(date, function(){
    push(user_id, task);
  })
}

function checkDate(date){
  const month = date.getMonth();
  const nowmonth = now.getMonth();
  const year = date.getFullYear();

  if(month < nowmonth) {
    date.setFullYear(year + 1);
  }
  return date;
}