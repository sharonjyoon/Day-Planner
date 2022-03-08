$(document).ready(function () {
  let today = moment().format(`MMMM Do YYYY`)
  console.log(today)
  $(`#currentDay`).append(today);
})

var $textarea9 = $("#textarea9");
var $textarea10 = $("#textarea10");
var $textarea11 = $("#textarea11");
var $textarea12 = $("#textarea12");
var $textarea13 = $("#textarea13");
var $textarea14 = $("#textarea14");
var $textarea15 = $("#textarea15");
var $textarea16 = $("#textarea16");
var $textarea17 = $("#textarea17");

$(`button`).on(`click`, function () {
  localStorage.setItem(`9A.M.`, $textarea9.val())
  localStorage.setItem(`10A.M.`, $textarea10.val())
  localStorage.setItem(`11A.M.`, $textarea11.val())
  localStorage.setItem(`12P.M.`, $textarea12.val())
  localStorage.setItem(`1P.M.`, $textarea13.val())
  localStorage.setItem(`2P.M.`, $textarea14.val())
  localStorage.setItem(`3P.M.`, $textarea15.val())
  localStorage.setItem(`4P.M.`, $textarea16.val())
  localStorage.setItem(`5P.M.`, $textarea17.val())
})

$(`#textarea9`).append(localStorage.getItem(`9A.M.`));
$(`#textarea10`).append(localStorage.getItem(`10A.M.`));
$(`#textarea11`).append(localStorage.getItem(`11A.M.`));
$(`#textarea12`).append(localStorage.getItem(`12P.M.`));
$(`#textarea13`).append(localStorage.getItem(`1P.M.`));
$(`#textarea14`).append(localStorage.getItem(`2P.M.`));
$(`#textarea15`).append(localStorage.getItem(`3P.M.`));
$(`#textarea16`).append(localStorage.getItem(`4P.M.`));
$(`#textarea17`).append(localStorage.getItem(`5P.M.`));
