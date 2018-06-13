var callOnce = false;
function supports_history_api() {

    document.getElementById('errorSpan').innerHTML = document.getElementById('msg').value;
    document.getElementById('msg').value = "";


}

function changeDthServiceProvider() {
    document.getElementById("errorSpan").innerHTML = "";
    var valuedetail = document.getElementById('dthServiceProviderId').value;

    if (valuedetail.trim() == "36") {

        document.getElementById('airtelDigital').style.display = "block";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";

    }
    else if (valuedetail.trim() == "17") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "block";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";
    }
    else if (valuedetail.trim() == "35") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "block";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";
    }
    else if (valuedetail.trim() == "21") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "block";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";
    }
    else if (valuedetail.trim() == "19") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "block";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";
    }
    else if (valuedetail.trim() == "27") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "block";
        document.getElementById('commonSubscriberId').style.display = "none";
    }
    else if (valuedetail.trim() == "0") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "block";

    }
}

var callOnce = false;
function supports_history_api() {

    document.getElementById('errorSpan').innerHTML = document.getElementById('msg').value;
    document.getElementById('msg').value = "";


}

function mobileUniqueOperator() {
    document.getElementById("mobileno1").value = "";

}
function mobileUniqueOperators() {
    //  alert("hi..........");
    document.getElementById("billpaymobileno1").value = "";
    var billpayOperatorId = document.getElementById("billpayOperatorId").value;
    //document.getElementById("billpaymobileno1").maxLength = billpayOperatorId.split("_")[1];
    //billpayOperatorId = billpayOperatorId.split("_")[0];
    //document.getElementById("billpayOperatorId").value =  billpayOperatorId;
    //alert("document.getElementById(billpaymobileno1).maxLength : "+document.getElementById("billpaymobileno1").maxLength);
    if (billpayOperatorId == 69) {
        document.getElementById("billpaymobileno1").placeholder = "enter dsl / landline number";
        document.getElementById("billpaymobileno1").maxLength = 11;
    } else {
        document.getElementById("billpaymobileno1").placeholder = "enter postpaid mobile number";
        document.getElementById("billpaymobileno1").maxLength = 10;
    }

}

window.onload = function () {
    // alert(document.getElementById("dthServiceProviderId").value);
    if (document.getElementById("dthServiceProviderId").value == "27") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "block";
        document.getElementById('commonSubscriberId').style.display = "none";


    }
    if (document.getElementById("dthServiceProviderId").value == "19") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "block";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";

    }

    if (document.getElementById("dthServiceProviderId").value == "21") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "block";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";

    }
    if (document.getElementById("dthServiceProviderId").value == "35") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "block";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";

    }
    if (document.getElementById("dthServiceProviderId").value == "17") {
        document.getElementById('airtelDigital').style.display = "none";
        document.getElementById('dishTv').style.display = "block";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";

    }
    if (document.getElementById("dthServiceProviderId").value == "36") {
        document.getElementById('airtelDigital').style.display = "block";
        document.getElementById('dishTv').style.display = "none";
        document.getElementById('relainceDigital').style.display = "none";
        document.getElementById('sunDirect').style.display = "none";
        document.getElementById('tataSky').style.display = "none";
        document.getElementById('videoconD2h').style.display = "none";
        document.getElementById('commonSubscriberId').style.display = "none";

    }
    if (document.getElementById("dataOperatorId").value != "0") {
        dataUniqueOperator();
    }


}