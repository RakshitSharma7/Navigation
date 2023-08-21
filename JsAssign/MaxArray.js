function findMaxValue(numbers) {
    var max=numbers[0];
    for(var i=0;i<numbers.length;i++){
        if(max<numbers[i]){
            max=numbers[i];
        }
    }
    return max;
    }
    // Example usage
    console.log(findMaxValue([5, 9, 2, 6, 3])); // Output: 9
    console.log(findMaxValue([-10, -5, -2, -8])); // Output: -2
    console.log(findMaxValue([100, 87, 92, 105])); // Output: 105
