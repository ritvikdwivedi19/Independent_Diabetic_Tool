/**
 * Created by Danny Monroy on 18/08/2016.

 */


//Global Variable in final value will be stored.
value = 0;

function alertBox() {
    document.getElementById("span_alert").onclick = function () {
        document.getElementById("alert").style.display = "none";
    }
}

function transition(num) {
    if(num != 3) {
        document.getElementById("question" + (num - 1)).style.display = "none";
        document.getElementById("question" + num).style.display = "inline";
    } else {
        document.getElementById("question" + (num - 1)).style.display = "flex";
        document.getElementById("question" + num).style.display = "inline-block";
    }
}

/*
* Gender Validation: Just passing if one or the other are clicked.
*/

function genderValidation() {
    document.getElementById("male").onclick = function () {
        value += 1;
        document.getElementById("gender_title").innerHTML = "Your gender is Male";
        window.setTimeout(transition, 1500, 2);
    }
    document.getElementById("female").onclick = function () {
        value += 0;
        document.getElementById("gender_title").innerHTML = "Your gender is Female";
        window.setTimeout(transition, 1500, 2);
    }
}

/* Age Validation
* AgeValueAssigment: Assigns the value if the validation is passed/
* ageValidation: Confirms that the age is not empty, older than 18 and is a valid digit for an age.
*/

function ageValueAssignment(age){
    document.getElementById("age_title").innerHTML = "You are " + age + " years old.";
    if(age >= 18 && age <= 49){
        value += 0;
        window.setTimeout(transition, 1500, 3);
    } else if (age > 50 && age <= 59){
        value += 5;
        window.setTimeout(transition, 1500, 3);
    } else if(age > 60 && age <= 69) {
        value += 9;
        window.setTimeout(transition, 1500, 3);
    } else {
        value += 13;
        window.setTimeout(transition, 1500, 3);
    }

    return age;

}

function ageValidation() {
    var numRegEx = /[0-9]{1,3}/;
    document.getElementById("ok_age").onclick = function () {

        var age =  document.getElementById("age").value;
        var ageEmpty = document.getElementById("ageEmpty");
        var ageWrong = document.getElementById("ageWrong");
        var ageYoung = document.getElementById("ageYoung");

        if(age === ""){
            ageEmpty.style.display = "block";
            ageWrong.style.display = "none";
            ageYoung.style.display = "none";

        } else if (!numRegEx.test(age) || age > 119 || age <= 0) {
            ageEmpty.style.display = "none";
            ageWrong.style.display = "block";
            ageYoung.style.display = "none";

        } else if (age < 18) {
            ageEmpty.style.display = "none";
            ageWrong.style.display = "none";
            ageYoung.style.display = "block";

        } else {
            ageEmpty.style.display = "none";
            ageWrong.style.display = "none";
            ageYoung.style.display = "none";
            ageValueAssignment(age);
        }

    }
}

function ethnicValidation() {
    document.getElementById("asian").onclick = function () {
        value += 6;
        document.getElementById("ethnic_title").innerHTML = "Your ethnic background is Asian";
        window.setTimeout(transition, 1500, 4);
    }
    document.getElementById("black").onclick = function () {
        value += 6;
        document.getElementById("ethnic_title").innerHTML = "Your ethnic background is Black";
        window.setTimeout(transition, 1500, 4);
    }
    document.getElementById("chinese").onclick = function () {
        value += 6;
        document.getElementById("ethnic_title").innerHTML = "Your ethnic background is Chinese";
        window.setTimeout(transition, 1500, 4);
    }
    document.getElementById("mixed").onclick = function () {
        value += 6;
        document.getElementById("ethnic_title").innerHTML = "Your ethnic background is Mixed";
        window.setTimeout(transition, 1500, 4);
    }
    document.getElementById("white").onclick = function () {
        value += 0;
        document.getElementById("ethnic_title").innerHTML = "Your ethnic background is White";
        window.setTimeout(transition, 1500, 4);
    }
    document.getElementById("none").onclick = function () {
        value += 6;
        document.getElementById("ethnic_title").innerHTML = "You have other ethnic background";
        window.setTimeout(transition, 1500, 4);
    }
}

function familyValidation() {
    document.getElementById("familyYes").onclick = function () {
        value += 5;
        document.getElementById("family_title").innerHTML = "You do have immediate family that have diabetes";
        window.setTimeout(transition, 1500, 5);
    }
    document.getElementById("familyNo").onclick = function () {
        value += 0;
        document.getElementById("family_title").innerHTML = "You do not have immediate family that have diabetes";
        window.setTimeout(transition, 1500, 5);
    }
}

function waistValueAssignment(waist){
    document.getElementById("waist_title").innerHTML = "Your waist is " + waist +" cm";

    if(waist < 90){
        value += 0;
    } else if(waist >= 90 && waist <= 99.9){
        value += 4;
    } else if(waist >= 100 && waist <= 109.9){
        value += 6;
    } else {
        value += 9;

    }
    window.setTimeout(transition, 1500, 6);
}

function waistValidation() {
    var numRegEx = /[0-9]{1,3}/;
    document.getElementById("ok_waist").onclick = function () {
        var waist =  document.getElementById("waist").value;
        var waistEmpty = document.getElementById("waistEmpty");
        var waistWrong = document.getElementById("waistWrong");

        if(waist === ""){
            waistEmpty.style.display = "block";
            waistWrong.style.display = "none";
        } else if(!numRegEx.test(waist)){
            waistEmpty.style.display = "none";
            waistWrong.style.display = "block";
        } else {
            waistEmpty.style.display = "none";
            waistWrong.style.display = "none";
            waistValueAssignment(waist);
        }
    }
}

function bmiCalculation(height, weight) {

    height = height /100;

    var bmi = (weight / height ) / height;
    bmi = Math.round(bmi);
    document.getElementById("bmi").value = bmi;

    if(bmi < 25){
        value += 0;
    } else if (bmi >= 25 && bmi < 30) {
        value += 3;
    } else if (bmi >= 30 && bmi < 35) {
        value += 5;
    } else {
        value += 8;
    }

    window.setTimeout(transition,2000,7);
}

function bmiValidation(){

    var numRegEx = /[0-9]{1,3}/;

    document.getElementById("ok_bmi").onclick = function () {

        var height =  document.getElementById("height").value;
        var heightEmpty = document.getElementById("heightEmpty");
        var heightWrong = document.getElementById("heightWrong");
        var weight =  document.getElementById("weight").value;
        var weightEmpty = document.getElementById("weightEmpty");
        var weightWrong = document.getElementById("weightWrong");

        if(height === "" && weight !== ""){
            heightEmpty.style.display = "block";
            heightWrong.style.display = "none";
        } else if(!numRegEx.test(height) && numRegEx.test(weight)){
            heightEmpty.style.display = "none";
            heightWrong.style.display = "block";
        } else if (weight === "" && !height === ""){
            weightEmpty.style.display = "block";
            weightWrong.style.display = "none";
        } else if (!numRegEx.test(weight) && numRegEx.test(height)) {
            weightEmpty.style.display = "none";
            weightWrong.style.display = "block";
        } else if (height === "" && weight === ""){
            heightEmpty.style.display = "block";
            weightEmpty.style.display = "block";
        } else if (!numRegEx.test(height) && !numRegEx.test(weight)) {
            heightWrong.style.display = "block";
            weightWrong.style.display = "block";
        } else {
            bmiCalculation(height,weight);
        }
    }
}

function medicationValidation() {
    document.getElementById("medicationYes").onclick = function () {
        value += 5;
        document.getElementById("medication_title").innerHTML = "7) You have taken medication for High Pressure";
        finalAnswer(value);
        window.setTimeout(transition, 1500, 8);
    }
    document.getElementById("medicationNo").onclick = function () {
        value += 0;
        document.getElementById("medication_title").innerHTML = "7) You haven't taken medication for High Pressure";
        finalAnswer(value);
        window.setTimeout(transition, 1500, 8);
    }

}

function finalAnswer(value) {

    if(value >= 0 && value <= 6){
        document.getElementById("lowRisk").style.display = "inline";
    } else if(value > 6 && value <= 15){
        document.getElementById("increasedRisk").style.display = "inline";
    } else if(value > 16 && value <= 24){
        document.getElementById("moderateRisk").style.display = "inline";
    } else {
        document.getElementById("highRisk").style.display = "inline";
    }
}

var obj1 = {

};

obj1.age = ageValueAssignment();



window.onload = function () {

    alertBox();
    genderValidation();
    ageValidation();
    ethnicValidation();
    familyValidation();
    waistValidation();
    bmiValidation();
    medicationValidation();


}
