let FirstN = document.getElementById("FirstN");
let LastN = document.getElementById("LastN");
let Email = document.getElementById("email");
let pass = document.getElementById("pass");
let confirm = document.getElementById("confirm");
let btnsign = document.getElementById("btns");
let errorspan = document.getElementById("merror");
let errprpass = document.getElementById("Error");
let errorconfirm = document.getElementById("ercc");

btnsign.addEventListener("click", (event) => {

let valid = true;

event.preventDefault();

// هاي بحالة اليوزر رجع دخل الايميل بطريقة  صحيحة تنخفي المكتوب بالاحمر
errorspan.style.display = "none";
errorspan.textContent = "";

// هاي بحالة اليوزر رجع دخل الباس بطريقة صحيحة تنخفي المكتوب بالاحمر
errprpass.style.display = "none";
errprpass.textContent = "";

// هاي بحالة اليوزر رجع دخل الباس مطابق للباس الاصلي تنخفي المكتوب بالاحمر
errorconfirm.style.display = "none";
errorconfirm.textContent = "";


if (FirstN.value.trim()=== ""){
FirstN.classList.add("border" , "border-danger" , "border-2");
valid = false;
}

if (LastN.value.trim() === ""){
    LastN.classList.add("border" , "border-danger", "border-2");
    valid = false;
}

// emil
if ( Email.value.trim() === ""){
    Email.classList.add("border", "border-danger" , "border-2");
     valid = false;
}else if (!Email.value.match(/^[^\s@]+@[^\s@]+.[^\s@]+$/)){
    errorspan.style.display = "block";
    errorspan.textContent = "plz enter a valid address!";
    valid = false;
}


// pass
if ( pass.value.trim() === ""){
    pass.classList.add("border", "border-danger" , "border-2");
     valid = false;
}else if (pass.value.length<8){
    errprpass.style.display = "block";
    errprpass.textContent = "password be ar least 8 character!";
     valid = false;
}

// confirm
if ( confirm.value.trim()===""){
    confirm.classList.add("border", "border-danger", "border-2")
    valid= false;
}else if (confirm.value !== pass.value){
    errorconfirm.style.display = "block";
    errorconfirm.textContent = "password dont match";
    valid = false;    
}

// if ( valid === false){}
// else {}

});

FirstN.addEventListener("input" , ()=>{
    FirstN.classList.remove("border-danger");
    FirstN.classList.add("border-success");
})

LastN.addEventListener("input" , ()=>{
    LastN.classList.remove("border-danger");
    LastN.classList.add("border-success");
})
Email.addEventListener("input" , () => {
    Email.classList.remove("border-danger");
    Email.classList.add("border-success")
})

pass.addEventListener("input" , () => {
pass.classList.remove("border-danger");
pass.classList.add ("border-success")

})

confirm.addEventListener("input", () => {
    confirm.classList.remove("border-danger");
    confirm.classList.add("border-success");
})














