alert("subset test framework");
function Test(value, functions) {
//	var testState={
//		success=true;
//		failureMessage='';
//	};

	var self=Monad(value);
	var functions=functions||[];
		
	var assert=function(func){
			var i,result;
		self.bind(function(testState){
			if(testState.success){
				return Test({
					succes:func(testState),
					failureMessage:value.failureMessage
				});
			}else{
				return self;
			};
		});
		return returnList.length?List(returnList):self;
	};
	
	self.assert=function(func){
	};
	
	return self;
}
alert("subset test framework end");
//	var test2=List([3,2]);
//	var test3=test2.foreach(function(item){return item+2;})
//		.where(function(item){return item>4})
//		.foreach(function(item){alert(item)});
//	var test=Test({success=:true,
//		failureMessage:'lazy evaluation failed'
//	})
//	.assert(function(){return test3.value()=[3,2]});
//	test3=test3.value();
//	alert(test.assert(function(){
//		return test3.value()=[3,2]}))
//			.value()
//			.success;
//	debugger;
