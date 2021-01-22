// Solution of kilometre to meter problem.

function kilometerToMeter(kilometre){
    if(kilometre < 0){
        return "Distance cannot be negative. Please provide a positive integer."
    }
    return kilometre * 1000;  // As 1 kilometre = 1000 meter.
}


// Solution of budget calculator problem.

function budgetCalculator(watchAmount, phoneAmount, laptopAmount){
    if(watchAmount < 0 || phoneAmount < 0 || laptopAmount < 0){   //checks if negative amount is given.
        return "Amount cannot be negative. Please provide positive value."
    }
    else if(watchAmount == undefined || phoneAmount == undefined || laptopAmount == undefined){  //checks if all amounts are given.
        return "Please provide a value."
    }
    return (watchAmount * 50) + (phoneAmount * 100) + (laptopAmount * 500);
}


// Solution of hotel cost problem.

function hotelCost(days){
    var cost = 0;
    if(days < 0){
        return "Please provide a positive value."
    }
    else  if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var firstDays = 10 * 100;
        var remainingDays = days - 10;
        var secondDays = remainingDays * 80;
        cost = firstDays + secondDays;
    }
    else{
        firstDays = 10 * 100;
        secondDays = 10 * 80;
        remainingDays = days - 20;
        var thirdDays = remainingDays * 50;
        cost = firstDays + secondDays + thirdDays;
    }
    return cost;
}


// Solution of mega friend problem.

function megaFriend(friendArray){ 
    var maxLength = 0;
    var longest;
    if(!friendArray.length){  // Checks if the array is empty.
        return "Only non empty array that contains strings are valid";
    }
    for(var i = 0; i < friendArray.length; i++){
        if(friendArray[i].length > maxLength){
            maxLength = friendArray[i].length;
            longest = friendArray[i];
        }
    }

    return longest;
}













