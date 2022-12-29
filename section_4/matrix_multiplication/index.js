var matrix1 = [];
var matrix2 = [];
var arr1=[];
var a1=0;
var arr2=[];
var a2=0;
function check_order() {
    let first_row = +document.getElementById("first_row").value;
    let first_col = +document.getElementById("first_col").value;
    let second_row = +document.getElementById("second_row").value;
    let second_col = +document.getElementById("second_col").value;
    if (first_col!=second_row || first_col<1 ||first_row<1||second_row<1||second_col<1){
        document.getElementById("impossible").innerHTML= `This is not a possible multiplication`;
    }
    else{
        document.getElementById("impossible").innerHTML= "";
        document.getElementById("first_row").readOnly =true;
        document.getElementById("first_col").readOnly =true;
        document.getElementById("second_row").readOnly =true;
        document.getElementById("second_col").readOnly =true;
        document.getElementById("impossible").innerHTML= `Order of matrices is locked for further calculations`;
    }
}


function add_to_first_array() {
    let first_row = +document.getElementById("first_row").value;
    let first_col = +document.getElementById("first_col").value;
    let first_entry = +document.getElementById("first_entry").value;
    if (first_col*first_row == a1) {
        document.getElementById("first_entry").readOnly =true;
        console.log(matrix1)
    }
    else{
        if (arr1.length<=first_col) {
            arr1.push(first_entry)
            a1++;
            console.log(arr1)
        }
        if (arr1.length==first_col){
            matrix1.push(arr1);
            arr1=[];
            console.log(matrix1)
        }
        if (first_col*first_row == a1) {
            document.getElementById("first_entry").readOnly =true;
            console.log(matrix1)
        }
    }
    
    document.getElementById("first_entry").value="";
}

function add_to_second_array() {
    let second_row = +document.getElementById("second_row").value;
    let second_col = +document.getElementById("second_col").value;
    let second_entry = +document.getElementById("second_entry").value;
    if (second_col*second_row == a2) {
        document.getElementById("second_entry").readOnly =true;
        console.log(matrix1)
    }
    else{
        if (arr2.length<=second_col) {
            arr2.push(second_entry)
            a2++;
            console.log(arr2)
        }
        if (arr2.length==second_col){
            matrix2.push(arr2);
            // matrix1.push(arr2, ...arr2);
            arr2=[];
            console.log(matrix2)
        }
    }
    if (second_col*second_row == a2) {
        document.getElementById("second_entry").readOnly =true;
        console.log(matrix2)
    }
    document.getElementById("second_entry").value="";
}
function show_matrices() {
    document.getElementById("first_matrix").innerHTML="First Matrix"
    document.getElementById("second_matrix").innerHTML="Second Matrix"
    for (let i = 0; i < matrix1.length; i++) {
        let h4 = document.createElement("p");
        h4.innerHTML=`[${matrix1[i]}]`
        document.getElementById("first_matrix").appendChild(h4);
    }
    for (let j = 0; j < matrix2.length; j++) {
        let h4 = document.createElement("p");
        h4.innerHTML=`[${matrix2[j]}]`
        document.getElementById("second_matrix").appendChild(h4);
    }
}

function multiply_matrices(){
    let first_row = +document.getElementById("first_row").value;
    let first_col = +document.getElementById("first_col").value;
    let second_col = +document.getElementById("second_col").value;
    var answer_array = [];
    for (var i = 0; i < first_row; i++) 
    {
        let answer_row=[]
        for (var j = 0; j < second_col; j++) 
        {
            let sum = 0;
            for (var x = 0; x < first_col; x++) 
            {
                sum += matrix1[i][x] * matrix2[x][j];
            }
            answer_row.push(sum)
        }
        answer_array.push(answer_row)
    }


    for (i = 0; i < first_row; i++) 
    {
            let h4 = document.createElement("h4");
        h4.innerHTML=`[<span class='text-3xl font-bold tracking-wide'>${answer_array[i]}</span>]`
        document.getElementById("answer").appendChild(h4);
        
    }
}