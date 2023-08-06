var table = document.getElementById("recording");

var records = localStorage.getItem("record");
var records_read = JSON.parse(records);

var rec_clean = records.replace(/{"play_time":"|]|}|\[|"point":|"/g, '');
var arr_recode = rec_clean.split(',');

var cell = 0;

while (cell < arr_recode.length) {
	var tr_recording = table.tBodies[0].insertRow(-1);
	var td_recording = tr_recording.insertCell(-1);
	td_recording.appendChild(document.createTextNode(arr_recode[cell]));
	cell++;
	var td_recording = tr_recording.insertCell(-1);
	td_recording.appendChild(document.createTextNode(arr_recode[cell]));
	cell++;
}