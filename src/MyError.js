// export default MyError;

// let MyError=function(name,message){
// 	  let errorName='错误';
// 	  if(name){
// 		  errorName=name;
// 	  }
// 	  this.name = errorName;
// 	  this.message = message || '未知错误';
// 	  this.stack = (new Error()).stack;
// }
//   MyError.prototype = Object.create(Error.prototype);
//   MyError.prototype.constructor = MyError;

export default class MyError extends Error{
	constructor(name,message){
		super(message);
		this.name="错误";
		if(name){
			this.name=name;
		}
	}
}

