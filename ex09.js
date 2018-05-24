// ex09.js

function saveContact(contact){
	// store the contact object in the localStorage

	// localStorage.getItem("contactList");
	var contactList = localStorage.contactList || "[]";
	contactList = JSON.parse(contactList);
	contactList.push(contact);

	// localStorage.setItem("contactList", JSON.stringify(contactList))
	localStorage["contactList"] = JSON.stringify(contactList);
}

function listContacts(){
	// lst all the contacts from the localStorage on the div#output

	var contactList = localStorage.contactList || "[]";
	contactList = JSON.parse(contactList);

	var out = "";
	if(!contactList.length){
		out = "<h2>No entries in your contact list</h2>";
	}
	else {
		out = "<ol>";
		contactList.forEach(c => out+= `<li>${c.name} - ${c.city} ${c.email}`);
		out += "</ol>";	
	}

	document.querySelector("#output").innerHTML = out;
}

window.onload = function(){
	// initial display; one time when the window loads the HTML
	listContacts();
	document.querySelector("#name").focus();

	document.querySelector("#btnSave").onclick = function(){
		var name = document.querySelector("#name").value;
		var city = document.querySelector("#city").value;
		var email = document.querySelector("#email").value;

		if(!name){
			alert("Please enter name!!");
			document.querySelector("#name").focus();
			return;
		}


		saveContact({name, city, email});
		listContacts();

		// clear the textboxes
		document.querySelector("#name").value = "";
		document.querySelector("#city").value = "";
		document.querySelector("#email").value = "";

		document.querySelector("#name").focus();
	};

};










