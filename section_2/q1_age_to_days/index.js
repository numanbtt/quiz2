const age_to_days=()=>{
    var answer=0;
    var age = +document.getElementById("age").value;
    if (age<0) {
        alert("Enter Valid age");
    }
    else{
        answer =Math.floor(age*365) + Math.floor(age/4);
        console.log(answer)
        document.getElementById("answer").innerHTML=`${answer}`
    }
    document.getElementById("age").value="";
}