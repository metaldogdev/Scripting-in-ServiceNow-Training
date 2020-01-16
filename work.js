// Lab 1.1

var myString = "Hello World";
var myNum = 32;
var myArray = ['Smartphone', 'Tablet', 'Laptop'];

var myObj = {
    property1: 'first',
    property2: 'second',
    property3: 'third'
};

for (var i = 0; i < myArray.length; i++) {
    alert("The current value of myArray is: " + myArray[i]);
};


try {

}

catch(err) {
    g_form.addErrorMessage("A runtime error occurred: " + err);
}

// Lab 1.2

// Script used to practice Syntax Checking

var peripherals = [keyboard, mouse, printer, speakers,];
var myNum = .5;

for (var i = 0; i < peripherals.length; i++) {
    alert("Current peripheral is: " + peripherals[i]);
}

if (myNum) {
    myNum++;
    alert("myNum" myNum);
}

// Lab 2.1

function onLoad() {
    //Type appropriate comment here, and begin script below
    alert("The form has finished loading and is ready for user input");
}

function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    var saveAndClose = true;

    if(newValue == 6) { //Resolved
        alert("You cannot change the state to 'Resolved' from a list");
        saveAndClose = false;
    }

    if (newValue == 7) { //Closed
        alert("You cannot change the state to 'Closed' from a list");
        saveAndClose = false;
    }

    callback(saveAndClose);
}

// Lab  2.2

function onSubmit() {
    if(g_form.getValue('impact') == 1 && g_form.getValue('urgency') == 1 && !g_user.hasRoleExactly('major_inc_mgr')) {

        var ans = confirm("The customer is notified of all Priority-1 Incidents. Conform base information is included before submitting this P1 incident.\n\nSelect OK to submit, or Cancel to return to the record.");

        if(!ans) {
            g_form.addInfoMessage("Incident not submitted");
            g_form.addInfoMessage("If base information is unavailable, use the 'Additional comments' field to document why it is missing.");
            g_form.showFieldMsg('category', "Major incident base field");
            g_form.showFieldMsg('cmdb_ci', "Major Incident base field");
            g_form.showFieldMsg('assignment_group', "Major Incident base field");
            g_form.showFieldMsg('short_description', "Major Incident base field");
        }
        return ans;
    }
}