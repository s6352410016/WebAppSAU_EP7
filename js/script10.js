function func1(){
    console.log('aaa');
}

func1();

function func2(n1 , n2 , f1){
    console.log(n1 + n2);
    f1();
}
func2(10,20,func1);

let x = () => {
    console.log('hello');
}
func2(100,200,x);