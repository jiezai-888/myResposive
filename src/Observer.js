//添加__ob__标记
import {def} from './utils.js';
import defineResonsive from './defineResonsive.js';
import {newArrayMethodsObj} from './array.js';
import observe from './observe.js';

export default class Observer{
	constructor(obj) {
		def(obj,'__ob__',this,false);
		console.log("我是Observer",obj);
		if(Array.isArray(obj)){
			//改变proto指向
			Object.setPrototypeOf(obj,newArrayMethodsObj);
			this.ArrayToObserve(obj);
		}else{
			this.walk(obj);
		}
	}
	
	//遍历对象的属性
	walk(obj){
		for (let item in obj) {
			defineResonsive(obj,item);
		}
	}
	//变成observe
	ArrayToObserve(arr){
		//在遍历的过程中，length变化
		for(let i=0,lg=arr.length;i<lg;i++){
			observe(arr[i]);
		}
	}
}