function exercise01() {
    alert("Xin chao");
}

function exercise02(num) {
    num++;
    document.getElementById("ex2_result").innerHTML = num;
}

function exercise03() {
    let a = +(document.getElementById("num1").value);
    let b = +(document.getElementById("num2").value);
    if (a > b) {
        document.getElementById("ex3_result").innerHTML = "Number 1 > number 2"
    } else if (a <= b) {
        document.getElementById("ex3_result").innerHTML = "Sum of 2 number: " + (a + b)
    }
}

function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}

function exercise04() {
    let result = 0;
    alert("Before: " + result);
    result = addNumbers();
    alert("After: " + result)
}

function exercise05() {
    let star1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    let star2 = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    let star = document.getElementById("star").value;
    let index = "";
    for (let i = 0; i < star2.length; i++) {
        if (star === star2[i]) {
            index = i;
        }
    }
    if (index !== ""){
        document.getElementById("ex5_result").innerHTML = star1[index];
    } else {
        document.getElementById("ex5_result").innerHTML = "No star";
    }
}
