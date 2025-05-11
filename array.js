function myArray(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]=='red'){
            console.log(i+1, "Tomato is red!!!");
        }
        else{
            console.log(i+1, arr[i]);
        }

    }

}
color=['red', 'blue', 'green', 'yellow','pink'];
myArray(color);