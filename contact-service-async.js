// contact-service-async.js

// self executing anonymous function
// window.ContactService = (function(){})();

window.ContactService = (function(){

	// local variables of this function; not accessible outside
	// will be kept in the closure scope for all functions
	// inside this function
	var contacts = [];
	var idCounter = 0;

	// constructor ContactService
	function ContactService(){
	}

	// member functions of class 'ContactService'
	ContactService.prototype.addNew = function(contact, callback){
		if(!callback || typeof callback!="function"){
			throw new Error("callback was not supplied or was not a function!");
		}

		// async execution of the logic for validation/adding
		setTimeout(function(){
			if(!contact || typeof contact!="object"){
				var err = {};
				err.code = 1001;
				err.message = "contact was not supplied or was not an object!";
				callback(err);
				return;
			}
			if(!contact.name || typeof contact.name !="string"){
				var err = {};
				err.code = 1002;
				err.message = "name was not supplied or was not a string!";
				callback(err);
				return;
			}
			// no error above
			contact.id = ++idCounter;
			contacts.push(contact);
			callback(null, contact.id); // first param is generally an error object
		}, 0);
	};


	ContactService.prototype.getById = function(id, callback){
		if(!callback || typeof callback!="function"){
			throw new Error("callback was not supplied or was not a function!");
		}
		setTimeout(function(){
			if(!id || typeof id!="number"){
				var err = {};
				err.code = 1003;
				err.message = "id was not supplied or was not a number!";
				callback(err);
				return;
			}
			var index = contacts.findIndex(c=>c.id==id);
			var c = contacts[index]?contacts[index]:null;
			callback(null, c);
		}, 0);
	};
	
	return ContactService;
})();

var cs = new ContactService();
cs.addNew({name: "Vinod", email: "vinod@vinod.co"}, ()=>{});
cs.addNew({name: "John Doe", email: "johndoe@mailinator.com"}, ()=>{});
cs.addNew({name: "Jane Doe", email: "janedoe@mailinator.com"}, ()=>{});









