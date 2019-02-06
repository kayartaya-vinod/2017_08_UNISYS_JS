// contact-service.spec.js

// test suite:
describe("Testing contact-service methods", function(){

	// one or more test suite/spec here
	describe("Testing addNew() function", function(){

		var cs;

		// with in the current test suite, execute before each test spec
		beforeEach(function(){
			cs = new ContactService();
		});
		
		// one or more test suite/spec here
		it("Should test addNew() with out arguments", function(){
			// method calls and assertions
			
			expect("addNew" in cs).toBe(true);
			expect(typeof cs.addNew).toBe("function");
			
			// calling addNew() with out arguments
			try{
				cs.addNew(); // should throw an exception
				fail("Was expecting an error; but did not get one!");
			}
			catch(e){
				// nothing to be done here;
			}
		});

		it("Should test addNew() using \"string\" parameter", function(){
			try{
				cs.addNew("dummy");
				fail("Was expecting an error; but did not get one!");
			}
			catch(e){
				expect(true).toBe(true);
			}
		});
		it("Should test addNew() with an empty object (without name/email)", function(){
			try{
				var contact = {};
				cs.addNew(contact);
				fail("Was expecting an error; but did not get one!");
			}
			catch(e){
				expect(true).toBe(true);
			}

		});

		it("Should add a contact object", function(){
			var len1 = cs.getAll().length;
			var name = "Vinod", email="vinod@vinod.co", city="Bangalore";

			var id = cs.addNew({name, email, city});
			var len2 = cs.getAll().length;
			expect(len2).toEqual(len1+1);
			expect(id).toBeDefined();
		});
	});

	// one or more test suite/spec here
	describe("Testing getAll() function", function(){

	});
});






