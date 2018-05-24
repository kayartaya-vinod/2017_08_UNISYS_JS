window.ContactService = (function(){
	var idCounter = 0;
	var requiredFields = ["name", "email"];
	var contacts = [];	

	function _ContactService_(){
	}

	_ContactService_.prototype.addNew = function(c){
		if(!c || typeof c!="object"){
			throw "Missing contact or was not an object"
		}

		var missingFields = [];
		requiredFields.forEach(fld=>{
			if(!(fld in c)){
				missingFields.push(fld);
			}
		});
		if(missingFields.length){
			throw "Missing required fields : " + missingFields.join();
		}

		c.id = ++idCounter;
		contacts.push(c);
		return c.id;
	}

	_ContactService_.prototype.getById = function(id){
		if(!id || typeof id!="number"){
			throw "Id is missing or not a number";
		}
		var index = contacts.findIndex(c=>c.id==id);
		return contacts[index];
	}

	_ContactService_.prototype.getAll = function(){
		return contacts;
	}

	_ContactService_.prototype.update = function(c){
		if(!c || typeof c!="object"){
			throw "Missing contact or was not an object"
		}

		var missingFields = [];
		requiredFields.forEach(fld=>{
			if(!(fld in c)){
				missingFields.push(fld);
			}
		});
		if(missingFields.length){
			throw "Missing required fields : " + missingFields.join();
		}

		var index = contacts.findIndex(c_=>c_.id==c.id);

		contacts[index].name = c.name;
		contacts[index].email = c.email;
		contacts[index].city = c.city;
		return contacts[index];
	}

	_ContactService_.prototype.delete = function(id){
		if(!id || typeof id!="number"){
			throw "Id is missing or not a number";
		}
		var index = contacts.findIndex(c=>c.id==id);
		if(index==-1){
			throw "No data found for id " + id;
		}
		var c = contacts.splice(index, 1)[0];
		return c;
	}
	return _ContactService_;
})();