function minPositiveInt(){
    let N = prompt("Enter a number from 9 to 100000","")
    if((N > 9) && (N < 100000))
    {
        var p = 1
        var s = 0
        for(var i = 9; i > 1; i--)
        {
            while(N%i==0)
            {
                N = N/i
                s = s + i*p
                p = p*10
            }
        }
        N == 1? alert( "The minimum positive integer whose product of digits is N: " + s ) : alert( "Return 0. It is not possible to return a minimum positive integer whose product of digits is N." )
    }
    else
    {
        alert('Return 0. Invalid input. It is not possible to return a minimum positive integer whose product of digits is N. The number does not match the specified range. Try again.');
    }
}
console.log(minPositiveInt());