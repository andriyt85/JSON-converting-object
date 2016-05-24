
var i;   
var Person = {
	firstName: "Andrii",
	lastName: "Tarnovskyi",
	age: "30",
	salary: "1000"
};
 

$('document').ready( function () {
	$('#jsconv').click( function () {
		var json = JSON.stringify(Person)
		i = json;
		console.log(json);
		$('#demo').html("<strong>JSON object:</strong>" + " " + json);	
		$('#info').html("You can see full output in browser console");	
	});
});

$('document').ready( function () {
	$('#objconv').click( function () {
		var obj = JSON.parse(i)
		console.log(obj);
		$('#demo').html("<strong>JavaScript object:</strong>" + " " + obj.firstName
			+ " " + obj.lastName + " " + obj.age + " " + "years old " +
			"with salary" + " " + obj.salary);
		 $('#info').html("You can see full output in browser console");		
	});
});
