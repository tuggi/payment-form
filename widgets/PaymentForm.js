var PaymentForm = function()  {
    var global = {
        transaction_type: null,
        reference_number: null,
        amount: null,
        currency: null,

        submitBtn: null,
        wrapper: null
    }

    var data = {
        access_key: null,
        profile_id: null,
        transaction_uuid: null,
        signed_field_names: null,
        unsigned_field_names: null,
        signed_date_time: null,
        locale: null,

        transaction_type: null,
        reference_number: null,
        amount: null,
        currency: null,

        // submit: null,
        signature: null
    }

    constructor();
    initialize();

    function initialize() {
        var transactionTypeLabel = document.createElement("label");
        $(transactionTypeLabel).text("Transaction Type: ");
        $(transactionTypeLabel).addClass("transactionTypeLabel");

        var transactionType = global.transaction_type = document.createElement("select");
        generateOptions(transactionType, "Transaction type");
        $(transactionType).addClass("transactionType");

        var transactionTypeContainer = document.createElement("div");
        $(transactionTypeContainer).append(transactionTypeLabel);
        $(transactionTypeContainer).append(transactionType);
        $(transactionTypeContainer).addClass("fieldContainer");

        var referenceNumberLabel = document.createElement("label");
        $(referenceNumberLabel).text("Reference Number: ");
        $(referenceNumberLabel).addClass("referenceNumberLabel");

        var referenceNumber = global.reference_number = document.createElement("label");
        $(referenceNumber).addClass("transactionType");

        var referenceNumberContainer = document.createElement("div");
        $(referenceNumberContainer).append(referenceNumberLabel);
        $(referenceNumberContainer).append(referenceNumber);
        $(referenceNumberContainer).addClass("fieldContainer");

        var amountLabel = document.createElement("label");
        $(amountLabel).text("Amount: ");
        $(amountLabel).addClass("amountLabel");

        var amount = global.amount = document.createElement("label");
        $(amount).addClass("transactionType");

        var amountContainer = document.createElement("div");
        $(amountContainer).append(amountLabel);
        $(amountContainer).append(amount);
        $(amountContainer).addClass("fieldContainer");

        var currencyLabel = document.createElement("label");
        $(currencyLabel).text("Currency: ");
        $(currencyLabel).addClass("currencyLabel");

        var currency = global.currency = document.createElement("label");
        $(currency).addClass("transactionType");

        var currencyContainer = document.createElement("div");
        $(currencyContainer).append(currencyLabel);
        $(currencyContainer).append(currency);
        $(currencyContainer).addClass("fieldContainer");

        var radioCC = generateRadio("Credit Card");
        var radioInvoice = generateRadio("Invoice");

        var submitBtn = global.submitBtn = document.createElement("button");
        $(submitBtn).text("submit");
        $(submitBtn).addClass("submitBtn");

        var wrapper = global.wrapper = document.createElement("div");
        $(wrapper).append(transactionTypeContainer);
        $(wrapper).append(referenceNumberContainer);
        $(wrapper).append(amountContainer);
        $(wrapper).append(currencyContainer);
        $(wrapper).append(radioCC);
        $(wrapper).append(radioInvoice);
        $(wrapper).append(submitBtn);
        $(wrapper).addClass("wrapper");
    }

    function generateRadio(label) {
        var radio = document.createElement("input");
        $(radio).attr({
            type: "radio",
            name: "paymentMode",
            value: label
        });
        $(radio).addClass("radio");
        
        var radioLabel = document.createElement("label");
        $(radioLabel).text(label);
        $(radioLabel).addClass("radioLabel");

        var wrapper = document.createElement("div");
        $(wrapper).append(radio);
        $(wrapper).append(radioLabel);
        $(wrapper).addClass("radioContainer");
        return wrapper;
    }

    function generateOptions(select, placeholderText) {
        var placeholder = document.createElement("option");
        $(placeholder).attr({
            disabled:'disabled',
            selected:'selected',
            hidden:'hidden'
        });
        $(placeholder).text(placeholderText);
        $(placeholder).val("");

        var authorizationOptn = document.createElement("option");
        $(authorizationOptn).text("Authorization");
        $(authorizationOptn).val("authorization");

        var saleOptn = document.createElement("option");
        $(saleOptn).text("Sale");
        $(saleOptn).val("sale");

        $(select).append(placeholder);
        $(select).append(authorizationOptn);
        $(select).append(saleOptn);
    }

    function constructor() {
        data.access_key = "77246056409d34449977303b767c984c";
        data.profile_id = "60DC420E-7BF0-4BAE-8C43-4F30C5F153C5";
        data.transaction_uuid = generateUniqid();
        data.signed_field_names = "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency";
        data.unsigned_field_names = "";
        data.signed_date_time = new Date().toISOString().split(".").shift() + "Z";
        data.locale = "en";
        // data.submit = "Submit";
    }

    function generateUniqid() {
        var a = "";
        var b = false;
        var c = Date.now()/1000;
        var d = c.toString(16).split(".").join("");
        while(d.length < 14){
            d += "0";
        }
        var e = "";
        if(b){
            e = ".";
            var f = Math.round(Math.random()*100000000);
            e += f;
        }
        return a + d + e;
    }

    PaymentForm.prototype.getTransactionType = function() { 
        return global.transaction_type;
    }

    PaymentForm.prototype.getReferenceNumber = function() { 
        return global.reference_number;
    }

    PaymentForm.prototype.getAmount = function() { 
        return global.amount;
    }

    PaymentForm.prototype.getCurrency = function() { 
        return global.currency;
    }

    PaymentForm.prototype.getSubmitButton = function() { 
        return global.submitBtn;
    }

    PaymentForm.prototype.getData = function() { 
        return data;
    }

    PaymentForm.prototype.getWidget = function() { 
        return global.wrapper;
    }
}