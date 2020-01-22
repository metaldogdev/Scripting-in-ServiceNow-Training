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

catch (err) {
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

    if (newValue == 6) { //Resolved
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
    if (g_form.getValue('impact') == 1 && g_form.getValue('urgency') == 1 && !g_user.hasRoleExactly('major_inc_mgr')) {

        var ans = confirm("The customer is notified of all Priority-1 Incidents. Conform base information is included before submitting this P1 incident.\n\nSelect OK to submit, or Cancel to return to the record.");

        if (!ans) {
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

// Lab 2.3

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    // Document the current value of State, if New, use a decoration
    var incState = g_form.getValue('incident');
    jslog("<your_initials> = the value of incState is: " incState);

    if (incState == 1) {
        jslog("<your_initials> LINE 11 EXECUTED!");
        g_form.addDecoration('state', 'icon-edit', 'Gathering initial details');
        g_form.flash('state', 'teal', -4);
    }
}

// Lab 2.4

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var affectedCI = g_form.getReference('cmdb_ci', checkCI);

    function checkCI(affectedCI) {
        if (affectedCI.name == '3D PInball') {
            g_form.setValue('priority', 4);
            g_form.setValue('risk', 5);
            g_form.setValue('impact', 3);

            g_form.setReadOnly('priority', true);
            g_form.setReadOnly('risk', true);
            g_form.setReadOnly('impact', true);
        }
    }
}

// Lab 3.1

function onCondition() {
    if (g_form.getValue('close_code') == '' || g_form.getValue('close_notes') == '' || g_form.getValue('resolved_by') == '') {
        g_form.addInfoMessage("REMINDER: Populate the Resolution information fields before saving an Incident in a Resolved or Closed State");
    }
}

// Lab 4.1

function onLoad() {
    if (!g_user.hasRoleExactly('itil_admin')) {
        g_form.removeOption('pack_type', 'cym3');
        g_form.removeOption('pack_type', 'cym6');
    }
}

// Lab 4.2   FINISH THIS ONE

function onLoad() {
    if (!g_user.hasRoleExactly('itil_admin')) {
        g_form.removeOption('pack_type', 'cym3');
        g_form.removeOption('pack_type', 'cym6');
        g_form.setDisplay('ca_location', false);
        g_form.setDisplay('location_other', false);
    }
}

// Lab 5.1 

catch (err) {
    gs.log("JS!!!: a JavaScript runtime error occurred = " + err);
}

// Lab 5.2

(function executeRule(current, previous /*null when async*/) {
    try {
        if (current.u_rca.nil() && current.u_rca_included) {
            current.u_rca_included = false;
        }
        else if (!current.u_rca.nil() && !current.u_rca_included) {
            current.u_rca_included = true;
        }
    }

    catch (err) {
        gs.log("A runtime error occurred: " + err);
    }
})(current, previous);

// Lab 5.3

(function executeRule(current, previous /*null when async*/) {

    g_scratchpad.resolvedByFirstName = current.resolved_by.first_name;
    g_scratchpad.resolvedByFirstName = current.resolved_by.last_name;

    if (current.reopen_count.nil()) {
        g_scratchpad.reopenCount = "0";
    }
    else {
        g_scratchpad.reopenCount = current.reopen_count;
    }
})(current, previous);

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    if (oldValue > 5 && newValue <= 5) {
        var answer = confirm("This incident was Resolved by " + g_scratchpad.resolvedByFirstName + " " + g_scratchpad.reopenCount + " times.\n\nAre you sure you want to reopen it?");

        if (answer == false) {
            g_form.setValue('state', oldValue);
        }
    }
}

// Lab 6.1

(function executeRule(current, previous) /* null when async*/ {
    try {
        current.cab_date.setDisplayValue(gs.beginningOfNextWeek());
        var nextMonday = current.cab_date.dateNumericValue();
        var twoDays = 2*24*60*60*1000; //milliseconds
        var nextWednesday = nextMonday + twoDays;
        current.cab_date.setDateNumericValue(nextWednesday);
    }
    catch(err) {
        gs.log("a runtime error occurred: " + err);
    }
})(current, previous);