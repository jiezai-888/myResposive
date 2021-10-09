import MyError from './MyError.js';
import observe from './observe.js';

//添加属性
export default function defineResonsive(objData,objKey,value){
	
	if(arguments.length<=1){
		throw new MyError("参数欠缺","输入的参数太少,报错！");
		return;
	}
	// else if(Array.isArray(objData)){
	// 	throw new MyError("数组转对象错误","你输出的是数组，会被转换成为对象，需要注意!");
	// }
	
	if(arguments.length===2){
		value=objData[objKey];
	}
	
	//如果是引用类型再循环调用一次
	let childOb=observe(value);
	
	Object.defineProperty(objData,objKey,{
		enumerable:true,
		configurable:true,
		get(){
			console.log('你正在访问我的属性',value);
			return value;
		},
		set(newValue){
			console.log('你正在改变该属性的值',newValue);
			if(value===newValue){
				return;
			}
			value=newValue;
			childOb=observe(newValue);
		}
	});
};