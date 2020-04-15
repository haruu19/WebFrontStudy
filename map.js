/**
 * MyMap 생성자로 사용될 함수를 구현
 */
var MyMap = function(){
	this.map = new Object();
}
MyMap.prototype = {
	put: function(key,value){
		this.map[key] = value;
	},
	get: function(key){
		return this.map[key];
	},
	clear: function(){
		for(var prop in this.map){
			delete this.map[prop];
		}
	},
	remove: function(key){
		delete this.map[key];
	},
	size: function(){
		var count=0;
		for(var prop in this.map){
			count++;
		}
		return count;
	}
}
