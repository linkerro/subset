alert("subset");
function Monad(value) {
	var self={};
	var unit=value;
	
	var isFunction=function (func){
		var getType = {};
 		return func && getType.toString.call(func) === '[object Function]';
	};
	
	self.bind=function(func){
		if(isFunction(func)){
			//self[name]=func;
			return func(value);
		};
		//return self;
	};

	self.value=function(){
		return value;
	};
	
	return self;
};

function List(value,functions){
	var self=Monad(value);
	functions=functions||[];
		
	var foreach=function(func){
			var i,result,
			returnList=[];
		self.bind(function(list){
			for(i=0;i<list.length;i+=1){
				result=func(list[i]);
				if(result){
					returnList.push(result);
				};
			};
		});
		return returnList.length?List(returnList):self;
	};
	
	self.foreach=function(func){
		var newFunctions=functions;
		newFunctions.push({"func":self.foreach,"param":func});
		return List(value,newFunctions);
	};
	
	var where=function(func){
			return self.foreach(function(item){
				return func(item)&&item;
			});
	};

	self.where=function(func){
		var newFunctions=functions;
		newFunctions.push({"func":self.where,"param":func});
		return List(value,newFunctions);
	};
	
	self.value=function(){
		var i,result=self;
		for(i=0;i<functions.length;i++){
			result=functions[i].func.call(result,functions[i].param);
		};
		return result;
	};
	
	return self;
}
alert("subset end");
