var x= [9,10,-6,-6,-8];
const result=sumofarray(x);
console.log(result);

function sumofarray(n){
    var sum=0;
    for(var i=0;i<n.length;i++){
        if(n[i]>0){
            sum=sum+n[i];
        }

    }
    return sum
}



