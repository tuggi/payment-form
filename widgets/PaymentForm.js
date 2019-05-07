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

        signature: null
    }

    constructor();
    initialize();

    function initialize() {
        var transactionType = global.transaction_type = document.createElement("select");
        generateOptions(transactionType, "Transaction type");
        $(transactionType).addClass("transactionType");

        var referenceNumber = global.reference_number = document.createElement("input");
        $(referenceNumber).addClass("transactionType");

        var amount = global.amount = document.createElement("input");
        $(amount).addClass("transactionType");

        var currency = global.currency = document.createElement("input");
        $(currency).addClass("transactionType");
        
        var submitBtn = global.submitBtn = document.createElement("button");
        $(submitBtn).addClass("submitBtn");

        var wrapper = global.wrapper = document.createElement("div");
        $(wrapper).append(transactionType);
        $(wrapper).append(referenceNumber);
        $(wrapper).append(amount);
        $(wrapper).append(currency);
        $(wrapper).append(submitBtn);
        $(wrapper).addClass("wrapper");
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

        var creditCardOptn = document.createElement("option");
        $(creditCardOptn).text("Credit Card");
        $(creditCardOptn).val("Credit Card");

        var invoiceOptn = document.createElement("option");
        $(invoiceOptn).text("Invoice");
        $(invoiceOptn).val("Invoice");

        $(select).append(placeholder);
        $(select).append(creditCardOptn);
        $(select).append(invoiceOptn);
    }

    function constructor() {
        data.access_key = "77246056409d34449977303b767c984c";
        data.profile_id = "60DC420E-7BF0-4BAE-8C43-4F30C5F153C5";
        data.transaction_uuid = generateUniqid();
        data.signed_field_names = "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency";
        data.unsigned_field_names = "";
        data.signed_date_time = new Date().toISOString().split(".").shift() + "Z";
        data.locale = "en";

        // data.transaction_type = data.transaction_type.val();
        // data.reference_number = data.reference_number.val();
        // data.amount = data.amount.val();
        // data.currency = data.currency.val();
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