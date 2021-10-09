import {def} from './utils.js';

const oldArrayPrototype=Array.prototype;
//以数组的prototype为构造器创建一个对象
export const newArrayMethodsObj=Object.create(oldArrayPrototype);

//重写7个方法(添加着7个属性，属性类型为function)
const methodsNeedChange=[
	'shift',
	'unshift',
	'push',
	'pop',
	'sort',
	'reverse',
	'splice'
];

//这里需要注意箭头函数的this
methodsNeedChange.forEach(methodsName=>{
	//保存数组原来的方法
	const original=oldArrayPrototype[methodsName];
	
	//给数组对象添加真正的数组方法
	def(newArrayMethodsObj,methodsName,function(){
		const ob=this.__ob__;
		const result=original.apply(this,arguments);
		let argsToArray=[...arguments];
		//新项变observe
		let inserted=[];
		switch(methodsName){
			case "push":
			case "unshift":
				inserted=arguments;
				break;
			case 'splice':
				inserted=argsToArray.slice(2);
				break;
		}
		if(inserted){
			ob.ArrayToObserve(inserted);
		}
		
		
		return result;
	},false);
})


