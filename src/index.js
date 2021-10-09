import defineResonsive from './defineResonsive.js'
import Observer from './Observer.js';
import observe from './observe.js'

// let obj={
// 	human:{
// 		'name':'人类',
// 		person:{
// 			'title':'具体的个人',
// 			'name':'安德鲁',
// 			'age':19,
// 			hobbies:[
// 				'篮球','排球','自行车','羽毛球'
// 			]
			
// 		}
// 	}
// }

let obj={
	name:'xiaomi',
	age:19,
	hobbies:[
		'羽毛球','足球','篮球'
	]
};

// defineResonsive(obj,"name","xiaomi");
// let name=[];
// defineResonsive(name,"number",12);


observe(obj);
// obj.name="oppo";
// obj.hobbies.push("骑自行车");

//引用地址不变不会激发set()方法
obj.hobbies.splice(1,0,8888);
// obj.human.person.name="oppo";

console.log("index.js输出：",obj);

