const start_conversion = ()=>{
    var number = +document.getElementById("number").value;
    var decimal_places = +document.getElementById("decimal_places").value;
    if (number== "" || decimal_places== "" || decimal_places < 0)
    {
        alert("Enter Valid number and positive decimal places")
        document.getElementById("decimal_places").value = "";
    }
    else{
        var rounded_number=Math.floor(number)
        var decimal_part=(number-rounded_number).toString();
        var reduced_part="";
        for (let i = 0; i <= decimal_places+1; i++) {
            reduced_part +=decimal_part[i]
        }
        reduced_part = +reduced_part
        console.log(rounded_number+reduced_part);
        document.getElementById("answer").innerHTML=`${rounded_number+reduced_part}`
        document.getElementById("number").value = "";
        document.getElementById("decimal_places").value = "";
    }
    }