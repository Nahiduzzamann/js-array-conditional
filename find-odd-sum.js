function findOddSum(){
    let numbers = [8,3,6,2,7,1,6];
    var j = 0 ;
    var sum = 0;
    var oddNumbers = [];
    for(var i=0; i < numbers.length; i++){
        if(numbers[i]%2 === 1){
            oddNumbers[j] = numbers[i];
            j++;
        }
    }
    
    for(var k=0; k < oddNumbers.length; k++){
            
        sum = sum + oddNumbers[k];
    }
    console.log('The sum of odd number is=',sum);
}

findOddSum();