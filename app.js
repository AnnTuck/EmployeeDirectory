//FUNCTIONS
//...
//...


//DISPLAY EMPLOYEE INFO:
const render = function () {
    //Clear the rendered list
    $('.employeeIndex').empty();

    //Display the employee list.
    for (let i=0; i<employeeList.length; i++) {
        $('.employeeIndex').append(`<p>${employeeList[i].name}</p>`);
        $('.employeeIndex').append(`<p>${employeeList[i].officeNum}</p>`);
        $('.employeeIndex').append(`<p>${employeeList[i].phoneNum}</p>`);
        $('.employeeIndex').append(`<hr></hr>`);
        }
    
    console.log("render()employeeList.length",employeeList.length);
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

//ADD NEW EMPLOYEES TO LIST:
function addToList() {
    let newName = document.getElementById("addName").value;
    let newRoom = document.getElementById("addRoom").value;
    let newPhone = document.getElementById("addPhone").value;
     
    console.log(newName);
    //Add new employee to the list
    employeeList[employeeList.length] = {name: newName, officeNum: newRoom, phoneNum: newPhone};
    
    console.log(employeeList[8]);
    console.log("render2Start");
render();
    console.log("render2End");
};

    
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
};


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

//USER INPUT DISPLAY FUNCTIONS
function viewInput() {
    // document.getElementByClass("addSel").style.color = "yellow";
    document.getElementById("add").style.display = "none";
    console.log("viewSel11")
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "none";
};

function addInput() {
    // document.getElementByClass("addSel").style.color = "yellow";
    document.getElementById("add").style.display = "block";
    console.log("addSel11")
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "none";
};
function verifyInput() {
    console.log("verifySel11")
    // document.getElementByClass("addSel").style.color = "yellow";
    document.getElementById("add").style.display = "none";
    document.getElementById("verify").style.display = "block";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "none";
};
function updateInput() {
    console.log("updateSel11")
    // document.getElementByClass("updateSel").style.color = "yellow";
    document.getElementById("add").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementById("delete").style.display = "none";
};
function deleteInput() {
    console.log("deleteSel11")
    // document.getElementByClass("addSel").style.color = "yellow";
    document.getElementById("add").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "block";
};
//Display the employee list when the page loads
viewInput();
render();

// //SIDEBAR CONTROL
// document.getElementById("add").style.display = "none";
//???Why didn't it like me using classes for these?  Had to change them to id's???

document.getElementById("viewSel").addEventListener("click", viewInput);
document.getElementById("addSel").addEventListener("click", addInput);
document.getElementById("verifySel").addEventListener("click", verifyInput);
document.getElementById("updateSel").addEventListener("click", updateInput);
document.getElementById("deleteSel").addEventListener("click", deleteInput);

// $('.addSel').on('click', addInput);
// $('.verifySel').on('click', verifyInput);
// $('.updateSel').on('click', updateInput);
// $('.deleteSel').on('click', deleteInput);



