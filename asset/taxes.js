var incomeA = 0;
var incomeB = 0;

var incomeASingleFiler = 0;
var incomeBSingleFiler = 0;

var totalIncome = incomeA + incomeB;

$("#submit").on("click", function() {
    incomeA = parseInt($("#salary-1").val());
    console.log(incomeA);
    if (incomeA <= 9875) {
        incomeASingleFiler = 0.1 * incomeA;
    } else if (9875 < incomeA && incomeA <= 40125) {
        incomeASingleFiler = 987.5 + (0.12 * (incomeA-9875));
    } else if (40125 < incomeA  && incomeA <= 85525) {
        incomeASingleFiler = 4617.5 + (0.22 * i(ncomeA-40125));
    } else if (85525 < incomeA && incomeA <= 163300) {
        incomeASingleFiler = 14605.5 + (0.24 * (incomeA-85525));
    } else if (163300 < incomeA && incomeA <= 207350) {
        incomeASingleFiler = 33271.5 + (0.32 * (incomeA-163300));
    } else if (207350 < incomeA && incomeA <= 518400) {
        incomeASingleFiler = 47367.5 + (0.35 * (incomeA-207350));
    } else {
        incomeASingleFiler = 157235 + (0.37 * (incomeA-518400));
    }

    $("#filing-individual-1").html(incomeASingleFiler);

});

$("#submit").on("click", function() {
    incomeB = parseInt($("#salary-2").val());
    console.log(incomeB);
    if(incomeB <= 9875) {
        incomeBSingleFiler = 0.1 * incomeB;
    }
    else if (9875 < incomeB <= 40125) {
        incomeBSingleFiler = 987.5 + (0.12 * (incomeB-9875));
    }
    else if (40125 < incomeB <= 85525) {
        incomeBSingleFiler = 4617.5 + (0.22 * (incomeB-40125));
    }
    else if (85525 < incomeB <= 163300) {
        incomeBSingleFiler = 14605.5 + (0.24 * (incomeB-85525));
    }
    else if (163300 < incomeB <= 207350) {
        incomeBSingleFiler = 33271.5 + (0.32 * (incomeB-163300));
    }
    else if (207350 < incomeB <= 518400) {
        incomeBSingleFiler = 47367.5 + (0.35 * (incomeB-207350));
    }
    else {
        incomeBSingleFiler = 157235 + (0.37 * (incomeB-518400));
    }

    $("#filing-individual-2").html(incomeBSingleFiler);
});