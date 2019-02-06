describe("Testing Async Functions", function(){

	var cs;

	beforeEach(function(){
		cs = new ContactService();
	});

	it("should get contact for id 1", function(finished){
		var id = 1;
		cs.getById(id, function(err, data){
			expect(err).toBe(null);
			expect(data).toBeDefined();
			expect(typeof data).toBe("object");
			expect(data.name).toBeDefined();
			expect(data.email).toBeDefined();
			expect(data.name).toEqual("Vinod");
			expect(data.email).toEqual("vinod@vinod.co");
			finished();
		});
	});
});