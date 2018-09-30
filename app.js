$(".employeeIndex");


let employees = document.querySelectorAll(".employeeIndex");
// document.write(employees.length);
// document.write(employeeList.length);

console.log("employees.length",employees.length);
console.log("employeeList.length",employeeList.length);

//


//DISPLAY EMPLOYEE INFO:
const render = function () {
//Clear the rendered list
$('.employeeIndex').empty();

//
    for (let i=0; i<employeeList.length; i++) {
       
        // $('.employeeIndex').addClass(".employeeIndex");
        // employees[i].innerText = employeeList[i].name

        // $('.employeeIndex').append(employees[i].innerText);
        // $('.employeeIndex').append(`<p>${employeeList[i]}</p>`);
        $('.employeeIndex').append(`<p>${employeeList[i].name}</p>`);
        $('.employeeIndex').append(`<p>${employeeList[i].officeNum}</p>`);
        $('.employeeIndex').append(`<p>${employeeList[i].phoneNum}</p>`);
        // document.write(employeeList[i].name);
        // document.write(employeeList[i].officeNum);
        // document.write(employeeList[i].phoneNum);
    }
    console.log("render()employees.length",employees.length);
    console.log("render()employeeList.length",employeeList.length);
}

render();
    

//ADD NEW EMPLOYEES TO LIST:

function addToList() {
    let newName = document.getElementById("addName").value;
    let newRoom = document.getElementById("addRoom").value;
    let newPhone = document.getElementById("addPhone").value;
      // var x = document.querySelector("myText").value;
    document.getElementById("demo").innerHTML = newName;
    console.log(newName);
    let newListLength = employeeList.length;
    console.log("newListLength",newListLength);
    employeeList[newListLength] = {name: newName, officeNum: newRoom, phoneNum: newPhone};
    // employeeList[8] = {name: newName, officeNum: newRoom, phoneNum: newPhone};
    console.log(employeeList[8]);
    // document.write(x);
        // document.querySelector("demo").innerHTML = x;
        
        // var x = document.getElementById("addName").value;
        // document.getElementById("demo").innerHTML = x;
        
        console.log("render2Start");
render();
console.log("render2End");
    
    }

//INDICATE IF PERSON IS EMPLOYED

function isEmployed() {
    document.getElementById("isEmployee").innerHTML = "";
    let isName = document.getElementById("verifyName").value;
    // let isName = name;
    console.log("verify isName", isName);
    let index = verify(isName);

    // let index = verify();
    console.log("verify.indexNameYes", index);
    
    if (index <= employeeList.length) {
        document.getElementById("isEmployee").innerHTML = "Yes";
        console.log("yes");
    } else {
        document.getElementById("isEmployee").innerHTML = "No";
        console.log('no');
    }

};


//VERIFY NAME
function verify(name) {
    // document.getElementById("isEmployee").innerHTML = "";
    // let isName = document.getElementById("verifyName").value;
    // // let isName = name;
    console.log("verify name", name);
    for (let i=0; i<employeeList.length; i++) {
        console.log(employeeList[i].name, name);
        if (employeeList[i].name === name) {
            // document.getElementById("isEmployee").innerHTML = "Yes";
            // console.log("yes");
            var indexNameYes = i;
            console.log("indexNameYes",indexNameYes);
        } 

        
    };

    // if (indexNameYes > employeeList.length) {
    //     document.getElementById("isEmployee").innerHTML = "No";
    //     console.log('no');
    // }
    return indexNameYes;  //Index number of found employee
    // return i; //Index number of found employee
    // console.log("index of found",i);
};


//UPDATE OFFICE AND PHONE NUMBER IF EMPLOYEE EXISTS
function updateList() {
    
    let isName = document.getElementById("updateName").value;
    console.log("update name", isName);
    let index = verify(isName);  //Get index number of matched employee name
    console.log("update index", index);

    if (index <= employeeList.length) {
    console.log("old office #", employeeList[index].officeNum);
    employeeList[index].officeNum = document.getElementById("updateOffice").value;
    console.log("new office #", employeeList[index].officeNum);

    console.log("old phone #", employeeList[index].officeNum);
    employeeList[index].phoneNum = document.getElementById("updatePhone").value;
    console.log("new phone #", employeeList[index].officeNum);
    } else {
        document.getElementById("isEmployee").innerHTML = "No";
        console.log('no');
    }
    render();

    // for (let i=0; i<employeeList.length; i++) {
    //     console.log(employeeList[i].name, name);
    //     if (employeeList[i].name === name) {
    //         // document.getElementById("isEmployee").innerHTML = "Yes";
    //         // console.log("yes");
    //         var indexNameYes = i;
    //         console.log("indexNameYes",indexNameYes);
    //     } 

    }


//REMOVE SELECTED EMPLOYEE FROM LIST

function removeFromList() {
    
    let isName = document.getElementById("removeName").value;
    console.log("remove name", isName);
    let index = verify(isName);  //Get index number of matched employee name
    console.log("remove index", index);

    if (index <= employeeList.length) {

        employeeList.splice(index,1) //Remove Employee from the list
    
    } else {
        document.getElementById("isEmployee").innerHTML = "Employee Not Found";
        console.log('Employee Not Found');
    }
    render();

    
    }
    
    // let i = verify(); 
    // if (isNameYes == true) {
        // console.log("index in updateList", i);
        // console.log("office", employeeList[i].officeNum);
        // console.log("phone",employeeList[i].phoneNum);

    // }


// return {
//     verify: isNameYes,
//     verify: i,
// };

// };


// let isName = document.getElementById("verifyName").value;

// console.log("verify isName", $.isNameYes);
// console.log("index",$.i);

// const addName = document.querySelector("#nameImput").innerText;
// const addName 
// document.write(x);
// let addName = document.getElementById("nameInput").value;
// document.write(addName);
// let inpooo = document.getElementById("addName").value;
// let inpooo = document.querySelector("myText").value;
// document.write(inpooo);

// render();

// document.querySelector("#nameInput")
// document.write(employeeList[7].name);
// employeeList.push("Fred");
// employeeList.name.push("Conrad");

// employeeList[8] = {name: inpooo, officeNum: "11", phoneNum: "444 444-4444"};
// document.write(employeeList[8]);

// document.write(employeeList[8].name);
// console.log("render2Start");
// render();
// console.log("render2End");
// let employeeList[7].name = "Fred";
// let employeeList[8].officeNum = "16";
// let employeeList[8].phoneNum = "555 555-5555";


