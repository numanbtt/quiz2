
function calculate_age(){
var dob=[];
var currentdt=[];
var dob_year="";
var currentdtyear="";
var age_in_year;
var dob_mon="";
var currentdtmon="";
var age_in_month;
var dob_days="";
var currentdtdays="";
var age_in_days;
    var date_of_birth = document.getElementById("dob").value;
    var currentdate = document.getElementById("today").value;
    //   for birthday date convert into array
    for(var i=0;i<date_of_birth.length;i++){
      dob.push(date_of_birth[i]);
        }  
        console.log(dob);

      //   for current date convert into array
    for(var j=0;j<date_of_birth.length;j++){
      currentdt.push(currentdate[j]);
        } 
        // age in years 
          for(var l=0;l<4;l++){
              dob_year+=dob[l];
           }  
           dob_year = +dob_year;  

          for(var m=0;m<4;m++){
              currentdtyear+=currentdt[m];
           }  
           currentdtyear = +currentdtyear; 
           // age in month
           for(var l=5;l<7;l++){
              dob_mon+=dob[l];
           }  
           dob_mon = +dob_mon;  
          for(var m=5;m<7;m++){
              currentdtmon+=currentdt[m];
           }  
           currentdtmon = +currentdtmon;
          //  age in days
          for(var l=8;l<=9;l++){
              dob_days+=dob[l];
           }  
           dob_days = +dob_days;  
          

          for(var m=8;m<=9;m++){
              currentdtdays+=currentdt[m];
           }  
           currentdtdays = +currentdtdays;
          
          // age in years 
             age_in_year = currentdtyear-dob_year;

          //  age in month
             age_in_month = currentdtmon-dob_mon;
          
          //  age in days
             age_in_days = currentdtdays-dob_days;
document.getElementById("answer").innerHTML= `You are ${age_in_year}years, ${age_in_month}months and ${age_in_days}days old`      
document.getElementById("dob").value="";
document.getElementById("today").value="";
}