export const def=function(obj,key,value,enumerable){
	//实施添加__ob__的具体行为
	Object.defineProperty(obj,key,{
		value,
		enumerable,
		writable:true,
		configurable:true
	})
};