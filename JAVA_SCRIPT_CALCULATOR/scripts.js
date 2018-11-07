function numbers(num){
	var screen1 = document.getElementById("screen");
	//ko sklicemo to funkcijo se dobi kar je na ekranu kalkulatorja
    if(num=="="){
      //alert("enako");
        //razdeli funkcijo na posamezne elemente in jih postavi v array 
        var all=screen1.value.split(" ");
        var dolzina = all.length;
		//alert(dolzina);
        for (var i = all.length - 1; i >= 0; i--) {
            if(all[i]==")")
                var c = all[i-1];
        }
        var a=parseFloat(all[0]);
        //alert(a);
        var op=all[1];
        //alert(op);
        var b=parseFloat(all[2]);
        //alert(b);
        /*if (b==0) {
            screen1.value="division by zero!"
        }*/
        calc(op, a, b);
    }
    else
    	screen1.value = screen1.value + num;
}

function cls(){
   var screen1=document.getElementById("screen");
   screen1.value='';
}

function calc(op, a, b){
var screen1 = document.getElementById("screen");
var result;
    switch(op){   
            case '+':
                result = a + b;
                screen1.value = result;
                break;
            case '-':
                result = a - b;
                screen1.value = result;
                break;
            case '*':
                result = a*b;
                screen1.value = result;
                break;
            case '/':
                result = a / b;
                screen1.value = result;
                break;
            case '%':
                result = a % b;
                screen1.value = result;
                break;
            default:
              break;
        }
}
