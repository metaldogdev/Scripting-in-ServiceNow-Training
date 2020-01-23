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
        var twoDays = 2 * 24 * 60 * 60 * 1000; //milliseconds
        var nextWednesday = nextMonday + twoDays;
        current.cab_date.setDateNumericValue(nextWednesday);
    }
    catch (err) {
        gs.log("a runtime error occurred: " + err);
    }
})(current, previous);

// Lab 6.2

action.setRedirectURL(current);

var today = gs.nowDateTime();
var closed = current.closed_at;
var diff = gs.dateDiff(closed, today, true);
var thirtyDays = 30 * 24 * 60 * 60; //seconds

if (diff > thirtyDays) {
    gs.addErrorMessage("A problem cannot be reopened after it has been closed for more than 30 days. Please open a new Problem.")
}
else {
    new ProblemStateUtils().onReAnalyze(current);
}

// Lab 7.1 VIP Users

(function executeRule(current, previous /*null when async*/) {

    var makeVIP = new GlideRecord('sys_user');
    q1 = makeVIP.addQuery('title', 'CONTAINS', 'VP');
    q1.addOrCondition('title', 'CONTAINS', 'Vice');
    q1.addOrCondition('title', 'CONTAINS', 'Chief');
    makeVIP.query();

    while (makeVIP.next()) {
        makeVIP.vip = true;
        gs.log("ADMIN: " + makeVIP.name + " with title: " + makeVIP.title + " is now a VIP");
        makeVIP.update();
    }
})(current, previous);

//Lab 7.2 RCA Update PRB and Child INCs

(function executeRule(current, previous /*null when async*/) {

    if (!current.problem_id.nil()) {
        var prbRecord = new GlideRecord('problem');
        prbRecord.get(current.problem_id);
        prbRecord.work_notes += "\n\nRCA from " + current.number + ": " + current.u_rca;
        prbRecord.update();
    }

    var childIncs = new GlideRecord("incident");
    childIncs.addQuery("parent_incident", current.sys_id);
    childIncs.query();

    while (childIncs.next()) {
        childIncs.u_rca += "RCA from " + current.number + ": " + current.u_rca;
        childIncs.update();
    }

})(current, previous);

//Lab 7.3 addEncodedQuery

(function executeRule(current, previous /*null when async*/) {

    var makeVIP = new GlideRecord('sys_user');
    makeVIP.addEncodedQuerry("titleLIKEVice^ORtitleLIKEVP^ORtitleLIKEChief^roles=itil");
    makeVIP.query();

    while (makeVIP.next()) {
        makeVIP.vip = true;
        gs.log(makeVIP.name + " with title: " + makeVIP.title + " is now a VIP");
        makeVIP.update();
    }
})(current, previous);

//Lab 8.1 Tracking Impersonations

gs.log("<YOUR_INITIALS> Script: user: " + event.parm1 + " impersonated user " + event.parm2);

//Lab 8.2 Incident State Changed - Business Rule

***** condition -> current.state.changes()

    (function executeRule(current, previous /*null when async*/) {

        gs.eventQueue('incident.state.changed', current, previous.state.getDisplayValue(), current.state.getDisplayValue());

    })(current, previous);

//Lab 8.2 Incident State Changed - Script Action

var oldVal = event.parm1;
var newVal = event.parm2;

gs.log("<YOUR_INITIALS> Script: The Incident's State changed from " + oldVal + " to " + newVal + ".");


// Lab 9.1

function logPropertyValues(str) {
    this.debug = true;
    this.debugPrefix = "<your initials>";
    if (this.debug) {
        gs.log(this.debugPrefix + str);
    }
}

(function executeRule(current, previous) /*null when async*/){

    for (var property in current) {
        if (current[property]) {
            logPropertyValues(property + ", " + current[property]);
        }
    }

}) (current, previous);

// Lab 9.2 Restrict Location Options

var LocationsByRole = Class.create();
LocationsByRole.prototype = {
    initialize: function () {
        //Retrieve the logged-in user's 'User [sys_user]' record
        this.loggedInUser = new GlideRecord('sys_user');
        this.loggedInUser.get(gs.getUserID());
    },

    for CMDB: function() {
        var refQual = "";
        if (gs.hasRole('admin')) {
            //Admins may assign CIs to All locations
            refQual += "^EQ";
        }
        if (gs.hasRole('asset_mgr_local')) {
            //Users with this role may assign CIs to local locations
            refQual += "parent=" + this.loggedInUser.location.parent + "^EQ";
        }
        if (gs.hasRole('asset_mgr_corporate')) {
            //Users with this role may assign CIs to corporate locations
            refQual += "company=" + this.loggedInUser.location.company + "^EQ";
        }

        return refQual;
    },

    type: 'LocationsByRole'
};


// Lab 9.3

var HelloWorld = Class.create();
HelloWorld.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    alertGreeting: function () {
        return "Hello " + this.getParameter('sysparm_user_name') + "!";
    },

    type: 'HelloWorld'
});

function onLoad() {
    var ga = new GlideAjax('HelloWorld');
    ga.addParam('sysparm_name', 'alertGreeting');
    ga.addParam('sysparm_user_name', '<your_name>');
    ga.getXML(HelloWorldParse);

    function HelloWorldParse(response) {
        var answerFromXML = response.responseXML.documentElement.getAttribute('answer');
        alert(answerFromXML);
    }
}

// Lab 9.4

var AssignmentGroupUtils = Class.create();
AssignmentGroupUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    countGroupMembers: function () {
        var grpName = "";
        var message = "There are no members in this Assignment Group";
        var groupID = this.getParameter('sysparm_group_id');

        var grpMems = new GlideRecord('sys_user_grmember');
        grpMems.addQuery('group.sys_id', groupID);
        grpMems.query();

        if (grpMems.next()) {
            grpName = grpMems.getDisplayValue('group');
        }

        if (grpName != "") {
            message = "There are " + grpMems.getRowCount() + " members in the " + grpName + " group";
        }

        return message;
    },

    type: 'AssignmentGroupUtils'
});

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var membersGA = new GlideAjax('AssignmentGroupUtils');
    membersGA.addParam('sysparm_name', 'countGroupMembers');
    membersGA.addParam('sysparm_group_id', g_form.getValue('assignment_group'));
    membersGA.getXML(membersParse);

    function membersParse(response) {
        var myObj = response.responseXML.documentElement.getAttribute('answer');
        alert(myObj);
    }
}

// Lab 9.5

assignAnalyst: function() {
    var groupID = this.getParameter('sysparm_group_id');
    var membersArray = [];

    var membersGR = new GlideRecord('sys_user_grmember');
    membersGR.addQuery('group.sys_id', groupID);
    membersGR.query();

    while (membersGR.next()) {
        var member = {};
        member.sys_id = membersGR.user.sys_id.toString();
        member.name = membersGR.user.getDisplayValue();
        membersArray.push(member);
    }

    return JSON.stringify(membersArray);
},

// doplnit len: 'assignAnalyst'
// doplnit len: var members = JSON.parse(myObj);

if (members.length > 0) {
    var randomNum = Math.floor(Math.random() * members.length);
    g_form.setValue('assigned_to', members[randomNum].sys_id, members[randomNum].name);
}

else {
    g_form.setValue('assigned_to', "");
    alert("The assignment group has no users assigned to it");
}

// Lab 10.1

function confirmPriOne() {
    var pri = g_form.getValue('priority');
    if (pri != 1) {
        gsftSubmit(null, g_form.getFormElement(), 'sysverb_insert');
    }
    else {
        var confText = "Are you sure you want to submit a Priority 1 incident?";
        if (confirm(confText)) {
            gsftSubmit(null, g_form.getFormElement(), 'sysverb_insert');
        }
    }
}

// Lab 10.2

current.update();
try {
    userURL = "sys_user.do?sys_id=";
    action.setRedirectURL(userURL + current.caller_id);
    action.setReturnURL(current);
}
catch (err) {
    gs.error("<YOUR_INITIALS>", err);
}

// Lab 10.3

function updateProblem() {
    try {
        var problemID = g_form.getValue('problem_id');
        if (problem_id == "") {
            alert('Problem ID is empty');
        }
        else {
            gsftSubmit(null, g_form.getFormElement(), 'update_problem'); // call Action Name
        }
    }
    catch (err) {
        jslog("Client <your initials>: " + err);
    }
}

if (typeof window == 'undefined')
    serverSideFunction();

function serverSideFunction() {
    current.update();
    try {
        var problemNumber = current.problem_id;
        var workNotesMessage = "<your initials> - Problem " + problemNumber.getDisplayValue() + " updated from Incident " + current.number + " UI Action";
        var gr = new GlideRecord("problem");
        gr.addQuery("sys_id", current.problem_id);
        gr.query;
        if (gr.next()) {
            gr.work_notes = workNotesMessage;
            gr.update();
        }
        gs.addInfoMessage(workNotesMessage);
    }
    catch (err) {
        gs.error("Server <YOUR_INITIALS>", err);
    }
    action.setRedirectURL(current);
}