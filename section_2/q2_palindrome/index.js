
    const palindrome=()=> {
      
    var check_word = document.getElementById("check_word").value;
    if (check_word=="")
  {
    alert("Enter valid input")
  }
  else{
    var reverse = "";
    for (let i=check_word.length-1; i >= 0; i--) 
    {
      reverse += check_word[i];
    }
    console.log(reverse)
    if (reverse == check_word)
    {
      document.getElementById("palindrome_answer").innerHTML = `The word ${check_word} is palindrome`;
      document.getElementById("check_word").value = "";
    }
    else{
      document.getElementById("palindrome_answer").innerHTML = `The word ${check_word} is not palindrome word`;
      document.getElementById("check_word").value = "";
    }
  }
  }