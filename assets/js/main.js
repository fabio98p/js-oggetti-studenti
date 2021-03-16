console.log("ciao alessandro");

$(document).ready(function () {
	//creazione di un array con all'interno alcuni studenti
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
	//aggiunta di un oggetto in un array
	$("#btn").click(function () {
		var newStudent = {
			nome: $('#input-nome').val(),
			cognome: $('#input-cognome').val(),
			eta: $('#input-eta').val(),
		}
		students.push(newStudent)


		//tento di inserire le key nella tabella
		$("#students").html("")
		for (let i = 0; i < students.length; i++) {
			$("#students").append(`<tr id="student${i+1}"></tr>`);
			for (const key in students[i]) {
				$(`#student${i+1}`).append(`<td>${students[i][key]}</td>`);
				//console.log(students[i][key]);
			}
		}
	})

})