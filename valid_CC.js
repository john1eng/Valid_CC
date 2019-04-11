function testingCC(ccnumber,month,year){

var errors = [];
var errMsg = "";
if(ccnumber.length != 16 ){
  errors.push("Non 16-Digit\n");
}

if(month < 1 || month > 12 || year < 2019 || year > 2999){
  errors.push("Invalid Expiration Date");
}
console.log(errors);
//if no window alert then run validCreditCardNumber function
if(errors.length == 0){
  validCreditCardNumber(ccnumber,month,year);
}else{
for(var i=0; i<errors.length; i++){
  errMsg = errMsg + errors[i];
  }
    window.alert(errMsg);
  }
}


function validCreditCardNumber(ccnumber,month,year){
//store into a variable per function test CC
  var v1 = validNum(ccnumber);
  var v2 = multiNum(ccnumber);
  var v3 = sumMore16(ccnumber);
  var v4 = finalEven(ccnumber);
  var v5 = validExpir(month,year);

  //push error msg
  var errors = [];
  var errMsg = "";

  if(!v1){errors.push("invalid number");}
  if(!v2){errors.push("non-muliple number");}
  if(!v3){errors.push("sum less than 16");}
  if(!v4){errors.push("final not even");}
  if(!v5){errors.push("invalid expiration date");}

  for(var i = 0; errors[i]!=null; i++){
  console.log(errors[i]);
  errMsg = errMsg + errors[i] +", ";
  }

  errMsg = errMsg.substring(0,errMsg.length-2);
  console.log(errMsg);
//display msg in html
  if(v1&&v2&&v3&&v4&&v5){
    document.getElementById("result").innerHTML = "Valid Credit Card Number";
  }
    else{
        document.getElementById("result").innerHTML = "Invalid Credit Card { " + errMsg + " }";

    }
  }



function validNum(ccnumber){
  var n = [1,2,3,4,5,6,7,8,9,0]; //valid number
  //var a = []; //set array to store number
  var m = true; //marker to set to true
  var a = ccnumber;
  //console.log(a[1]);

  for(var i = 0; i<16; i++){
    for(var x = 0; x<10;x++){
      if(a[i]==n[x]){
      //console.log(m);
        break;
      }
      else if(x==9 && a[i]!=n[9]){
        m = false
        break;
      }
  }
  if(m ==false)
  break;
  }
console.log(m);
return m;
}

function multiNum(ccnumber){
  var a = ccnumber;
  var m = true;
  var m2 = a[0];
  var multiN = 0;

  for(var i=0; i<15; i++){
    if(a[0]!=a[i+1]){
    break;
  }else if((a[0]==a[i+1]) && i==14){
    m = false;
    break;
  }
  }
console.log(m);
return m;
}

function sumMore16(ccnumber){
  var a = ccnumber;
  var m = true;

  var num = 0;

  for(var i=0; i< a.length; i++){
    num = num + +a[i];
  }
  if(num <= 16){
  m = false;
  }
console.log(m);
return m;
}

function finalEven(ccnumber){
  var a = ccnumber;
  var m = true;

  if(a[15]%2 != 0 )
  m = false;

console.log(m);
return m;
}
 //finalEven();

//"{ valid: " + m + ", number: '" + a + "', " + "error: " + "'" + (error msg)+ "' }"

// Experation date
// invalid if
// 1.before current date
// var mm = today.getMonth();
// var yyyy = today.getFullYear();
// 2.over than three years

function validExpir(month,year){
  var mm = parseInt(month);
  var yyyy = parseInt(year);
  m = true;

  var d = new Date();
  var n = d.getFullYear();

  d1 = new Date();
  var n1 = d1.getMonth();

  console.log(n+3);
  console.log(yyyy);
  if(yyyy > (n + 3) || yyyy < n){ //if over 3 year then today then it is invalid
  m = false;
}
if( (yyyy == (n + 3)) && (mm > n1+1) ){//if expir year is equal to 3 plus year of today and expir month is less than today month
  console.log(m);
   m = false;
  }
  console.log(m);
  return m;
}
