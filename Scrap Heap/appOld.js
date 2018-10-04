// $(".employeeIndex");


// let employees = document.querySelectorAll(".employeeIndex");

// console.log("employees.length",employees.length);
// console.log("employeeList.length",employeeList.length);




//DISPLAY EMPLOYEE INFO:
const render = function () {
    //Clear the rendered list
    $('.employeeIndex').empty();

    //Display the employee list.
    for (let i=0; i<employeeList.length; i++) {
        $('.employeeIndex').append(`<p>${employeeList[i].name}</p>`);
        $('.employeeIndex').append(`<p>${employeeList[i].officeNum}</p>`);
        $('.employeeIndex').append(`<p>${employeeList[i].phoneNum}</p>`);
        }
    console.log("render()employees.length",employees.length);
    console.log("render()employeeList.length",employeeList.length);
}


    

//ADD NEW EMPLOYEES TO LIST:
function addToList() {
    let newName = document.getElementById("addName").value;
    let newRoom = document.getElementById("addRoom").value;
    let newPhone = document.getElementById("addPhone").value;
     
    // document.getElementById("demo").innerHTML = newName;
    console.log(newName);
    let newListLength = employeeList.length;
    console.log("newListLength",newListLength);
    employeeList[newListLength] = {name: newName, officeNum: newRoom, phoneNum: newPhone};
    
    console.log(employeeList[8]);
    console.log("render2Start");
render();
    console.log("render2End");
    }

//INDICATE IF PERSON IS EMPLOYED

function isEmployed() {
    //Clear the Yes/No current employee indicator
    document.getElementById("isEmployee").innerHTML = ""; 

    //Get employee name from user input.
    let isName = document.getElementById("verifyName").value;
      console.log("verify isName", isName);
    //Call verify function and get index number of employee name match on employeeList
    let index = verify(isName);

    
    console.log("verify.indexNameYes", index);
    //if a valid index number was retured from verify function, then a match was found. Else no match found.
    if (index <= employeeList.length) {
        //Indicate that match was found to screen
        document.getElementById("isEmployee").innerHTML = "Employee record found";
        console.log("yes");
    } else {
        //Indicate that no match was found 
        document.getElementById("isEmployee").innerHTML = "Employee not found";
        console.log('no');
    }

};


//VERIFY NAME
function verify(name) {
    
    console.log("verify name", name);
    for (let i=0; i<employeeList.length; i++) {
        console.log(employeeList[i].name, name);
        if (employeeList[i].name === name) {
            var indexNameYes = i;
            console.log("indexNameYes",indexNameYes);
        } 

    };

    return indexNameYes;  //Index number of employee
    
};


//UPDATE OFFICE AND PHONE NUMBER IF EMPLOYEE EXISTS
function updateList() {
    
    //Get employee name from user input
    let isName = document.getElementById("updateName").value;
    console.log("update name", isName);
    let index = verify(isName);  //Get index number of matched employee name
    console.log("update index", index);

    //If match found, update office number and phone number.  Else indicate no match found.
    if (index <= employeeList.length) {
    console.log("old office #", employeeList[index].officeNum);
    employeeList[index].officeNum = document.getElementById("updateOffice").value;
    console.log("new office #", employeeList[index].officeNum);

    console.log("old phone #", employeeList[index].officeNum);
    employeeList[index].phoneNum = document.getElementById("updatePhone").value;
    console.log("new phone #", employeeList[index].officeNum);
    } else {
        document.getElementById("isEmployee").innerHTML = "Employee Not Found";
        console.log('no');
    }

    render();
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
};
    

render();
    



