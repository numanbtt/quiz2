
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
    for(var i=0;i<date_of_birth.length;i++){
      dob.push(date_of_birth[i]);
        }  
        console.log(dob);
    for(var j=0;j<date_of_birth.length;j++){
      currentdt.push(currentdate[j]);
        } 
          for(var k=0;k<4;k++){
              dob_year+=dob[k];
           }  
           dob_year = +dob_year;  

          for(var l=0;l<4;l++){
              currentdtyear+=currentdt[l];
           }  
           currentdtyear = +currentdtyear; 
           for(var m=5;m<7;m++){
              dob_mon+=dob[m];
           }  
           dob_mon = +dob_mon;  
          for(var n=5;n<7;n++){
              currentdtmon+=currentdt[n];
           }  
           currentdtmon = +currentdtmon;
          for(var o=8;o<=9;o++){
              dob_days+=dob[o];
           }  
           dob_days = +dob_days;  
          for(var p=8;p<=9;p++){
              currentdtdays+=currentdt[p];
           }  
           currentdtdays = +currentdtdays;
             age_in_year = currentdtyear-dob_year;
             age_in_month = currentdtmon-dob_mon;
             age_in_days = currentdtdays-dob_days;
document.getElementById("answer").innerHTML= `You are ${age_in_year}years, ${age_in_month}months and ${age_in_days}days old`
}