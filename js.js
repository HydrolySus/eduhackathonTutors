/*
function toggleContent() {
  // Get the DOM reference
  var contentId = document.getElementById("content");
  // Toggle
  contentId.style.display == "block" ? contentId.style.display = "none" :
contentId.style.display = "block";
}
*/


var tutee_div = [
  '<div class="card mt-3"><div class="card-header">History</div><div class="card-body"><h5 class="card-title">Asclepias, Briar</h5><p class="card-text">UTC+8 | 7:00 - 9:00 | Monday - Wednesday</p><a href="#" class="btn btn-primary" onclick="tutee_1()">Select as Tutee</a></div></div>',
  '  <div class="card mt-3"><div class="card-header">ELA</div><div class="card-body"><h5 class="card-title">Camphor, Vervain</h5><p class="card-text">UTC-1 | 19:30 - 21:00 | Thursday - Sunday</p><a href="#" class="btn btn-primary" onclick="tutee_2()">Select as Tutee</a></div></div>',
  '  <div class="card mt-3"><div class="card-header">English Foreign Language</div><div class="card-body"><h5 class="card-title">Cho, Lyng-Bya</h5><p class="card-text">UTC+9 | 20:00 - 22:00 | Saturday - Sunday</p><a href="#" class="btn btn-primary" onclick="tutee_3()">Select as Tutee</a></div></div>',
  '<div class="card mt-3"><div class="card-header">Psychology</div><div class="card-body"><h5 class="card-title">Fescue, Samara</h5><p class="card-text">UTC+1 | 18:30 - 20:30 | Tuesday - Thursday</p><a href="#" class="btn btn-primary" onclick="tutee_4()">Select as Tutee</a></div></div>',
  '   <div class="card mt-3"><div class="card-header">Geometry  </div><div class="card-body"><h5 class="card-title">Lithops, Carya</h5><p class="card-text">UTC | 9:00 - 10:30 | Friday & Sunday - Monday</p><a href="#" class="btn btn-primary" onclick="tutee_5()">Select as Tutee</a></div></div>',
  '<div class="card mt-3">    <div class="card-header">    Speech/Debate  </div>  <div class="card-body"><h5 class="card-title">Puccoon, Basil</h5>  <p class="card-text">UTC-6 | 16:00 - 19:00 | Friday - Saturday</p><a href="#" class="btn btn-primary" onclick="tutee_6()">Select as Tutee</a></div></div>'
]




var tutee_subject = [
  "History",
  "ELA",
  "English Foreign Language",
  "Psychology",
  "Geometry",
  "Speech/Debate",
]




const toggleDisplay = mainContentToggle => mainContentToggle.style.display =
  (mainContentToggle.style.display == 'none') ?
  'block' :
  'none'

const toggleDisplayOffSus = contentToggle => contentToggle.style.display =
  (contentToggle.style.display == 'contents') ?
  'none' :
  'contents'



var confirmUserInfo = function() {
  var addFirstname = document.getElementById("firstName").value
  var addSurname = document.getElementById("lastName").value
  var addSubject = document.getElementById("subject").value
  var addTimezone = document.getElementById("timezone").value
  var addAvailEH = document.getElementById("availEH").value
  var addAvailEM = document.getElementById("availEM").value
  var addAvailLH = document.getElementById("availLH").value
  var addAvailLM = document.getElementById("availLM").value
  console.log(addFirstname)
  console.log(addSurname)
  console.log(addSubject)
  console.log(addTimezone)
  console.log(addAvailEH)
  console.log(addAvailEM)
  console.log(addAvailLH)
  console.log(addAvailLM)
  document.getElementById("my_firstName").placeholder = addFirstname
  document.getElementById("my_lastName").placeholder = addSurname
  document.getElementById("my_subject").value = addSubject
  document.getElementById("my_timezone").value = "UTC" + addTimezone
  document.getElementById("my_availE").placeholder = addAvailEH + ":" + addAvailEM
  document.getElementById("my_availL").placeholder = addAvailLH + ":" + addAvailLM
}

var filterUsers = function() {
  confirmUserInfo();
  var addAvailEH = document.getElementById("availEH").value * 1
  var addAvailEM = (document.getElementById("availEM").value) / 60
  var addAvailLH = document.getElementById("availLH").value * 1
  var addAvailLM = (document.getElementById("availLM").value) / 60
  var addTimezone = document.getElementById("timezone").value * 1
  var addSubject = document.getElementById("subject").value
  console.log(addAvailEM + addAvailEH - addTimezone)
  console.log(addAvailLM + addAvailLH - addTimezone)
  var userTimesE = addAvailEM + addAvailEH - addTimezone
  if (userTimesE >= 24) {
    userTimesE = userTimesE - 24
  } else if (userTimesE < 0) {
    userTimesE = 24 + userTimesE
  }
  var userTimesL = addAvailLM + addAvailLH - addTimezone
  if (userTimesL >= 24) {
    userTimesL = userTimesL - 24
  } else if (userTimesL < 0) {
    userTimesL = 24 + userTimesL
  }


  var filterIDtutee1 = 0
  var filterIDtutee2 = 0
  var filterIDtutee3 = 0
  var filterIDtutee4 = 0
  var filterIDtutee5 = 0
  var filterIDtutee6 = 0


{
  if (addSubject == tutee_subject[0]) {
    filterIDtutee1 += 5
  }
}

{
  if (addSubject == tutee_subject[1]) {
    filterIDtutee2 += 5
  }
}

{
  if (addSubject == tutee_subject[2]) {
    filterIDtutee3 += 5
  }
}

{
if (addSubject == tutee_subject[3]) {
  filterIDtutee4 += 5
}
}

{
if (addSubject == tutee_subject[4]) {
  filterIDtutee5 += 5
}
}

{
if (addSubject == tutee_subject[5]) {
  filterIDtutee6 += 5
}
}


var tuteeTimes = [
  filterIDtutee1,
  filterIDtutee2,
  filterIDtutee3,
  filterIDtutee4,
  filterIDtutee5,
  filterIDtutee6
]


var largest2 = tuteeTimes[0];

for (var i = 0; i < tuteeTimes.length; i++) {
  if (largest2 < tuteeTimes[i]) {
    largest2 = tuteeTimes[i];
  }
}
console.log(largest2);

if (tuteeTimes.indexOf(largest2) !== -1 && largest2 >= 5) {
  var recT2 = tuteeTimes.indexOf(largest2)
  console.log(recT2)
  document.getElementById("recommended").innerHTML = tutee_div[recT2]
}



/**
if (console.log(filterIDtutor1) > 5.5) {

}
**/
//console.log(tutor_times[0])
}





var btn = document.getElementById("submitForm");
btn.addEventListener("click", confirmUserInfo);
btn.addEventListener("click", filterUsers);
//  btn.addEventListener("click", toggleDisplayOffSus(document.querySelector('#contentToggle')));



var btn2 = document.getElementById("submitForm2");
//btn.addEventListener("click", toggleDisplayOffSus(document.querySelector('#contentToggle')));


var cancel = function() {
  document.getElementById("my_tutors").innerHTML = "None yet..."
}

var tutee_1 = function() {
  document.getElementById("my_tutors").innerHTML = '  <div class="card mt-3"><div class="card-header">History</div><div class="card-body"><h5 class="card-title">Asclepias, Briar</h5><p class="card-text">UTC+8 | 7:00 - 9:00 | Monday - Wednesday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a><a href="#" class="btn btn-primary ms-2" onclick="" data-bs-toggle="modal" data-bs-target="#commServModal">Collect Community Service</a></div></div>'
}
var tutee_2 = function() {
  document.getElementById("my_tutors").innerHTML = '  <div class="card mt-3"><div class="card-header">ELA</div><div class="card-body"><h5 class="card-title">Camphor, Vervain</h5><p class="card-text">UTC-1 | 19:30 - 21:00 | Thursday - Sunday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a><a href="#" class="btn btn-primary ms-2" onclick="" data-bs-toggle="modal" data-bs-target="#commServModal">Collect Community Service</a></div></div>'
}
var tutee_3 = function() {
  document.getElementById("my_tutors").innerHTML = '  <div class="card mt-3"><div class="card-header">English Foreign Language</div><div class="card-body"><h5 class="card-title">Cho, Lyng-Bya</h5><p class="card-text">UTC+9 | 20:00 - 22:00 | Saturday - Sunday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a><a href="#" class="btn btn-primary ms-2" onclick="" data-bs-toggle="modal" data-bs-target="#commServModal">Collect Community Service</a></div></div>'
}
var tutee_4 = function() {
  document.getElementById("my_tutors").innerHTML = '<div class="card mt-3"><div class="card-header">Psychology</div><div class="card-body"><h5 class="card-title">Fescue, Samara</h5><p class="card-text">UTC+1 | 18:30 - 20:30 | Tuesday - Thursday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a><a href="#" class="btn btn-primary ms-2" onclick="" data-bs-toggle="modal" data-bs-target="#commServModal">Collect Community Service</a></div></div>'
}
var tutee_5 = function() {
  document.getElementById("my_tutors").innerHTML = '      <div class="card mt-3"><div class="card-header">Geometry  </div><div class="card-body"><h5 class="card-title">Lithops, Carya</h5><p class="card-text">UTC | 9:00 - 10:30 | Friday & Sunday - Monday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a><a href="#" class="btn btn-primary ms-2" onclick="" data-bs-toggle="modal" data-bs-target="#commServModal">Collect Community Service</a></div></div>'
}
var tutee_6 = function() {
  document.getElementById("my_tutors").innerHTML = ' <div class="card mt-3">    <div class="card-header">    Speech/Debate  </div>  <div class="card-body"><h5 class="card-title">Puccoon, Basil</h5>  <p class="card-text">UTC-6 | 16:00 - 19:00 | Friday - Saturday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a><a href="#" class="btn btn-primary ms-2" onclick="" data-bs-toggle="modal" data-bs-target="#commServModal">Collect Community Service</a></div></div>'
}
