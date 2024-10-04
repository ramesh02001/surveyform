function pointbreaker(tagname){
  var element = document.createElement(tagname);
  
  return element;
 }





function creatTage1(tagname,Attriname,Attrivalue,contant){
  var element = document.createElement(tagname);
  element. setAttribute(Attriname,Attrivalue);
element.innerHTML= contant;
return element;
}

function creatTage2(tagname,Attriname,Attrivalue,Attriname1,Attrivalue1,contant){
  var element = document.createElement(tagname);
  element. setAttribute(Attriname,Attrivalue);
  element. setAttribute(Attriname1,Attrivalue1);
element.innerHTML= contant;
return element;
}
  

function creatTage(tagname,Attriname,Attrivalue ){
  var element = document.createElement(tagname);
  element. setAttribute(Attriname,Attrivalue,);
 
return element;
}

function creat (tagname,Attriname,Attrivalue){

}


function creatinput(tagname,Attriname,Attrivalue,Attriname1,Attrivalue1,Attriname2,Attrivalue2,Attriname3,Attrivalue3,Attriname4 , Attrivalue4 ){
  var  input = document.createElement( tagname);
  input.setAttribute( Attriname,Attrivalue);
  input.setAttribute( Attriname1,Attrivalue1);
  input.setAttribute( Attriname2,Attrivalue2);
  input.setAttribute( Attriname3,Attrivalue3);
  input.setAttribute( Attriname4 , Attrivalue4);
 
return input;
}



function creatinput1(tagname,Attriname,Attrivalue,Attriname1,Attrivalue1,Attriname2,Attrivalue2 ){
  var  input = document.createElement( tagname);
  input.setAttribute( Attriname,Attrivalue);
  input.setAttribute( Attriname1,Attrivalue1);
  input.setAttribute( Attriname2,Attrivalue2);
   
return input;
}

function creatinput2(tagname,Attriname,Attrivalue,Attriname1,Attrivalue1,Attriname2,Attrivalue2, Attriname3,Attrivalue3 ){
  var  input = document.createElement( tagname);
  input.setAttribute( Attriname,Attrivalue);
  input.setAttribute( Attriname1,Attrivalue1);
  input.setAttribute( Attriname2,Attrivalue2);
  input.setAttribute( Attriname3,Attrivalue3);
return input;
}














function cbutton(tagname,Attriname,Attrivalue,Attriname1,Attrivalue1,Attriname2,Attrivalue2,contant){
  var button = document.createElement(tagname );

button.setAttribute( Attriname,Attrivalue);
button.setAttribute( Attriname1,Attrivalue1);
button.setAttribute( Attriname2,Attrivalue2);
button.innerHTML= contant;
return button;
}

function creatthr(tagname,contant){
  var table =document.createElement(tagname);
  table.innerHTML=contant;
  return table;
}

 




var box = creatTage("div","class","box");
var container = creatTage("div","class","container")
box.append(container);
var row = creatTage("div","class","row");
container.append(row);
var col = creatTage("div","class","col-6");
row.append(col);
var card = creatTage("div","class","card");
col.append(card);
var heading = creatTage1("h1","id","title","Aadher Application Form")
card.append(heading);
var ptage = creatTage1("p","id","description","It's a normal verification conducted every year by e-government")
card.append(ptage);
var form = creatTage("form","id","form");
card.append(form);
var formgroup =creatTage("div","class","form-group");
form.append(formgroup);
var b1 = creatTage("div", "class","b1");
formgroup.append(b1);
var firstlabel = creatTage1("label","for","first-name","First Name:");
b1.append(firstlabel);


var bre1  = pointbreaker("br");
 b1.append(bre1 );


var firstinput = creatinput("input","type","text","id","first-name","name","firstname","placeholder","Enter your firstname", "required","true" ) 
b1.append(firstinput);
var b2 = creatTage("div", "class","b2");
formgroup.append(b2);
var lastname =  creatTage1("label","for","last-name","Last Name:")
b2.append(lastname);


var bre2  = pointbreaker("br");
 b2.append(bre2 );


var  lastinput = creatinput("input","type","text","id","last-name","name","lastname","placeholder","Enter your lastname","required" , "true"   ) 
b2.append(lastinput);
var b3 = creatTage("div", "class","b3");
formgroup.append(b3);
var  address =  creatTage1("label","for","address"," Address:")
b3.append(address);
var  addressinput = creatinput("textarea","type","text","id","address","name","address","placeholder","Enter your address","required", "true"  ) 
b3.append(addressinput);
var b4 = creatTage("div", "class","b4");
formgroup.append(b4);
var pinlable =  creatTage1("label","for","pincode","Pincode:")
b4.append(pinlable);

var bre4  = pointbreaker("br");
 b4.append(bre4 );


var   pininput = creatinput("input","type","text","id","pincode","name","pincode","placeholder","Enter your pincode" ,"required", "true" ) 
b4.append(pininput);
var b5 = creatTage1("div", "class","b5","Gender:");
formgroup.append(b5);


var b6= creatTage("div", "class","b6");
formgroup.append(b6);
var malelable =  creatTage2("label","for"," male","class","ma","Male");
b6.append( malelable);
var maleinput = creatinput1("input","type","radio","id","male","name","male" ) 
malelable.append(maleinput);


var bre6  = pointbreaker("br");
 b6.append(bre6);

var  femalelable =  creatTage2("label","for","female","class","fe","Female");
b6.append( femalelable);
var femaleinput = creatinput1("input","type","radio","id","female","name","female" ) ;
b6.append( femalelable);
femalelable.append( femaleinput);

var b7 = creatTage1("div", "class","b7","choice of food:");
formgroup.append(b7);


var b8= creatTage("div", "class","b8");
formgroup.append(b8);


var  pizzalable =  creatTage2("label","for"," pizza","class","pi","pizza");
b8.append( pizzalable);


 

var pizinput = creatinput1("input","type","checkbox", "id","pizza","name","pizza" ) ;
pizzalable.append(pizinput);




var  saladlable =  creatTage2("label","for","salad","class","sa","salad");
b8.append( saladlable);

var salinput = creatinput1("input","type","checkbox","id","salad","name","salad" ) ;
saladlable.append(salinput);

var  sandlable =  creatTage2("label","for"," sandwich","class","san","sandwich" );
b8.append( sandlable);

var sandinput = creatinput1("input","type","checkbox","id","sandwich","name","sandwich" ) ;
sandlable.append(sandinput);

var  steaklable =  creatTage2("label","for","steak","class","st","steak" );
b8.append( steaklable);

var steakinput = creatinput1("input","type","checkbox","id","steak","name","steak" ) ;
steaklable.append(steakinput);

var fishlable =  creatTage2("label","for"," fish","class","fi","fish");
b8.append( fishlable);

var  fishinput = creatinput1("input","type","checkbox","id","fish","name","fish" ) ;
fishlable.append(fishinput);



var b9 = creatTage("div", "class","b9");
formgroup.append(b9);
var state =  creatTage1("label","for"," state","State:");
b9.append(state);

var bre9  = pointbreaker("br");
 b9.append(bre9 );


var  stateinput = creatinput("input","type","text","id","state","name","state","placeholder","Enter your state","required", "true" ) 
b9.append(stateinput);
 
var b10 = creatTage("div","class","b10");
formgroup.append(b10);
var lastname =  creatTage1("label","for"," country","Country:")
b10.append(lastname);

var bre10  = pointbreaker("br");
 b10.append(bre10 );



var  lastinput = creatinput("input","type","text","id","country","name","country","placeholder","Enter your country","required", "true" ) 
b10.append(lastinput);


var b11 = creatTage("div","class","b11");
formgroup.append(b11);

var  button1 = cbutton("button","type","submit","class"," btn btn-primary","id","submit","submit" ) ;
b11.append(button1);


var table = creatTage("table", "class","table");
card.append(table);
 

var thead = pointbreaker("thead")
 table.append(thead);

var tr = pointbreaker("tr");
thead.append(tr);
 
var th1 =creatthr("th","FirstName")
tr.append(th1);

var th2 =creatthr("th","LastName")
tr.append(th2);
var th3 =creatthr("th","Address")
tr.append(th3);
var th4 =creatthr("th","Pincode")
tr.append(th4);
var th5 =creatthr("th","Gender")
tr.append(th5);

var th5 =creatthr("th","food")
tr.append(th5);
var th6 =creatthr("th","State")
tr.append(th6);

var th7=creatthr("th","Country")
tr.append(th7);
var tbody = pointbreaker("tbody")
 table.append(tbody);

document.body.append (box);





 
document.getElementById('submit').addEventListener('click', submitForm);

function submitForm() {
  
  const form = document.getElementById('form');
  const firstName  = document.getElementById('first-name');
  const lastName  = document.getElementById('last-name');
  const addressInput = document.getElementById('address');
  const pincodeInput = document.getElementById('pincode');
  
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const radioboxes = document.querySelectorAll('input[type="radio"]');
  const stateInput = document.getElementById('state');
  const countryInput = document.getElementById('country'); 
  
   const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
  const radioCount = Array.from(radioboxes).filter(radiobox => radiobox.checked).length;
 

 
  if (radioCount < 1   ) {
    alert("Please select at least one options.");
  } else {
    
  
  const selectedradio = Array.from(radioboxes)
  .filter(radiobox => radiobox.checked)
  .map(radiobox => radiobox.name);
  
    
   if (checkedCount < 2) {
    alert("Please select at least two food.");
  } else {
    //  const selectedItems = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    
    const selectedOptions = Array.from(checkboxes)
  .filter(checkbox => checkbox.checked)
  .map(checkbox => checkbox.name);
 
   
  
 
  const firstNameValue = firstName .value;
  const lastNameValue = lastName.value;
  const addressValue = addressInput.value;
  const pincodeValue = pincodeInput.value;
  
  const stateValue = stateInput.value;
  const countryValue = countryInput.value;
 
 
   
  if (firstNameValue.trim() === '' || lastNameValue.trim() === '' || addressValue.trim() === ''  || pincodeValue.trim() === ''  || 
    stateValue.trim() === ''  || countryValue.trim() === ''   ) {
 
    alert('Please fill out all fields.');
    
    
  }
 
 else{
  
  foo(firstNameValue,lastNameValue,addressValue ,pincodeValue,stateValue,countryValue,selectedOptions,selectedradio)}

}}

 
 
  form.reset();

  }

 
  
 

 
   
  function foo(firstName,lastName,address,pincode,state,country,selected,selectradio) {

 
    const newRow = document.createElement("tr");
    
    
    const  firstNameCell = document.createElement("td");
    const lastNameCell = document.createElement("td");
    const addressCell = document.createElement("td");
    
    const pincodeCell = document.createElement("td");
    const selectradioCell = document.createElement("td");
    const selectedCell = document.createElement("td");
    const stateCell = document.createElement("td");
    const countryCell = document.createElement("td");
   
   
    
    
    firstNameCell.textContent = `${firstName}`;
    lastNameCell.textContent = `${lastName}`;
    addressCell.textContent = `${address}`;
    pincodeCell.textContent = `${pincode}`;
    selectradioCell.textContent = selectradio.join(" ");
    selectedCell.textContent = selected.join(", ");
  
    stateCell.textContent = `${state}`;
    
    countryCell.textContent = `${country}`;
    
    
    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(addressCell);
    newRow.appendChild(pincodeCell);
   
    newRow.appendChild(selectradioCell);
    newRow.appendChild(selectedCell);
    newRow.appendChild(stateCell);
    newRow.appendChild(countryCell);
 
    document.querySelector(".table tbody").appendChild(newRow);
    
 
       document.getElementById("form").reset();
    
    
}