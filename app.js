function num(num){
    var numbers = document.getElementById("input");
    numbers.value += num;
}

function clearfunc(){
    var numbers = document.getElementById("input");
    numbers.value = "0";
}

function result(){
    var numbers = document.getElementById("input");
    numbers.value = eval(numbers.value);

}