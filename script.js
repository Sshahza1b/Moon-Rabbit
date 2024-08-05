// function abc(){
//     console.log(this)
// }
// var obj={name:'shahzaib',age:22}

// abc.call(obj)

function abc(val){
    return Math.random()*val;
}

var ans1=abc(2)
var ans2= abc(2)