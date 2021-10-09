//监听
import Observer from "./Observer.js";
import MyError from "./MyError.js"

export default function observe (obj){
	
	if(typeof obj!='object') {
		// throw new MyError("非引用类型","监听的是引用类型,该参数不是特定类型,报错！");
		return;
	};
	let ob;
	
	//判断是否存在__ob__
	if(typeof obj.__ob__!=='undefined'){
		//存在__ob__属性
		ob=obj.__ob__;
	}else{
		ob=new Observer(obj);
	}
	// return ob;
}