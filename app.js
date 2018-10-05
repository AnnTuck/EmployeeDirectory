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

};
    
//VERIFY NAME
function verify(name) {
    
    console.log("verify name", name);
    for (let i=0; i<employeeList.length; i++) {
        console.log(employeeList[i].name, name);
        // console.log(employeeList[i].name, /name/i);
        if (employeeList[i].name.toLowerCase() === name.toLowerCase()) {
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
     
    //Add new employee to the list
    employeeList[employeeList.length] = {name: newName, officeNum: newRoom, phoneNum: newPhone};
    
    //Display employee list
    render();
    
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
    
    //Clear employed status
    document.getElementById("isEmployee").innerHTML = " ";

    //Get employee name from user input
    let isName = document.getElementById("updateName").value;
    let index = verify(isName);  //Get index number of matched employee name
    

    //If match found, update office number and phone number.  Else indicate no match found.
    if (index <= employeeList.length) {
    employeeList[index].officeNum = document.getElementById("updateOffice").value;
    employeeList[index].phoneNum = document.getElementById("updatePhone").value;

    } else {
        document.getElementById("isEmployee").innerHTML = "Employee Not Found";
    }

render();
};


//REMOVE SELECTED EMPLOYEE FROM LIST

function removeFromList() {

    //Clear employed status
    document.getElementById("isEmployee").innerHTML = " ";
    
    let isName = document.getElementById("removeName").value;
    let index = verify(isName);  //Get index number of matched employee name
    
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
    
    //Input display change
    document.getElementById("add").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "none";

    //Sidebar menu color
    document.getElementById("viewSel").style.color = "yellow";
    document.getElementById("addSel").style.color = "white";
    document.getElementById("verifySel").style.color = "white";
    document.getElementById("updateSel").style.color = "white";
    document.getElementById("deleteSel").style.color = "white";   
};
function addInput() {
    //Clear employed status
    document.getElementById("isEmployee").innerHTML = " ";

    document.getElementById("add").style.display = "block";
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "none";

    //Sidebar menu color
    document.getElementById("viewSel").style.color = "white";
    document.getElementById("addSel").style.color = "yellow";
    document.getElementById("verifySel").style.color = "white";
    document.getElementById("updateSel").style.color = "white";
    document.getElementById("deleteSel").style.color = "white";
};
function verifyInput() {
    
    //Clear employed status
    document.getElementById("isEmployee").innerHTML = " ";

    document.getElementById("add").style.display = "none";
    document.getElementById("verify").style.display = "block";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "none";

    //Sidebar menu color
    document.getElementById("viewSel").style.color = "white";
    document.getElementById("addSel").style.color = "white";
    document.getElementById("verifySel").style.color = "yellow";
    document.getElementById("updateSel").style.color = "white";
    document.getElementById("deleteSel").style.color = "white";
};
function updateInput() {
    //Clear employed status
    document.getElementById("isEmployee").innerHTML = " ";
 
    document.getElementById("add").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementById("delete").style.display = "none";

    //Sidebar menu color
    document.getElementById("viewSel").style.color = "white";
    document.getElementById("addSel").style.color = "white";
    document.getElementById("verifySel").style.color = "white";
    document.getElementById("updateSel").style.color = "yellow";
    document.getElementById("deleteSel").style.color = "white";
};
function deleteInput() {

    //Clear employed status
    document.getElementById("isEmployee").innerHTML = " ";
 
    document.getElementById("add").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "block";

    //Sidebar menu color
    document.getElementById("viewSel").style.color = "white";
    document.getElementById("addSel").style.color = "white";
    document.getElementById("verifySel").style.color = "white";
    document.getElementById("updateSel").style.color = "white";
    document.getElementById("deleteSel").style.color = "yellow";
};



//Display the employee list when the page loads
viewInput();
render();

//SIDEBAR CONTROL
document.getElementById("viewSel").addEventListener("click", viewInput);
document.getElementById("addSel").addEventListener("click", addInput);
document.getElementById("verifySel").addEventListener("click", verifyInput);
document.getElementById("updateSel").addEventListener("click", updateInput);
document.getElementById("deleteSel").addEventListener("click", deleteInput);





