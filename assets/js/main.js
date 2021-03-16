console.log("ciao alessandro");

$(document).ready(function () {
	var students = [
		student1 = {
			nome: "alessandro",
			cognome: "berone",
			eta: 20,
		},
		student2 = {
			nome: "giorgiovanni",
			cognome: "barlone",
			eta: 40,
		},
		student3 = {
			nome: "franceppippo",
			cognome: "fumagalli",
			eta: 29,
		}
	]
	console.log(students);
	//tento di inserire le key nella tabella
	//tento di inserire le key nella tabella
	for (let i = 0; i < students.length; i++) {
		$("#students").append(`<tr id="student${i+1}"></tr>`);
		for (const key in students[i]) {
			$(`#student${i+1}`).append(`<td>${students[i][key]}</td>`);
			//console.log(students[i][key]);
		}
	}
})