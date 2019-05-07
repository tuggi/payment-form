var root = "#root";

var widgets = {
    PaymentFormWidget: null,
};

function initializeWidget() {
    widgets.PaymentFormWidget = $.extend(true, {}, new PaymentForm());
    $(root).append(widgets.PaymentFormWidget.getWidget());

    setHandlers();
}

function setHandlers() {
    $(widgets.PaymentFormWidget.getSubmitButton()).on("click tap", function() { 
        // alert(widgets.PaymentFormWidget.getTransactionType().val());
    });
    $(widgets.PaymentFormWidget.getTransactionType()).on("change", function() { 
        widgets.PaymentFormWidget.getData().transaction_type = $(this).children("option:selected").val();
        console.log(widgets.PaymentFormWidget.getData());
    });
    $(widgets.PaymentFormWidget.getReferenceNumber()).on("change", function() { 
        widgets.PaymentFormWidget.getData().reference_number = $(this).val();
        console.log(widgets.PaymentFormWidget.getData());
    });
    $(widgets.PaymentFormWidget.getAmount()).on("change", function() { 
        widgets.PaymentFormWidget.getData().amount = $(this).val();
        console.log(widgets.PaymentFormWidget.getData());
    });
    $(widgets.PaymentFormWidget.getCurrency()).on("change", function() { 
        widgets.PaymentFormWidget.getData().currency = $(this).val();
        console.log(widgets.PaymentFormWidget.getData());
    });
    $(widgets.PaymentFormWidget.getSubmitButton()).on("click tap", function() { 
        // var formData = new FormData();
        var data = "";
        var dataObject = widgets.PaymentFormWidget.getData();
        for (var [key, value] of Object.entries(dataObject)) {
            if(value) {
                data += key + "=\"" + value + "\",";
            } else {
                data += key + "=,";
            }
        }
        data = data.slice(0, -1);
        console.log(data);
    });
}

$(document).ready(function() {
    initializeWidget();
});