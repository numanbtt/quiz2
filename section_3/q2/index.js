const calculate_sum =()=>{

    var number = +document.getElementById("number").value;
    document.getElementById("answer").innerHTML="";
    var string_number = number.toString();
    var sum=0;
    for (let i = 0; i < string_number.length; i++) {
        if ((+(string_number[i]))%2==1) {
            sum+= (+(string_number[i]))
            console.log(sum)
        }
        else{
            document.getElementById("answer").innerHTML=`There are no odd integers in the given number`
        }
    }
    document.getElementById("answer").innerHTML=`The sum of odd integers in given number is ${sum}`
}