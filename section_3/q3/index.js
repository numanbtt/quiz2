const calculate_sum =()=>{
    var sides = +document.getElementById("sides").value;
    if (sides =="" || sides<0) {
        alert("Enter proper number of sides for a closed polygon: minimum 3")
    }
    else{
        var sum = (Math.floor(sides)-2)*180;
        document.getElementById("answer").innerHTML=`The sum of interior angles of ${sides}-sides polygon is: ${sum}`
        document.getElementById("sides").value="";
    }
}