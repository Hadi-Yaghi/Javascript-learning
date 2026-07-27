/*
    String Methods
    -Access with index
    -Access with charAt
    -length()
    -trim
    -toUppercase
    -toLowerCase
    -chainMethods
*/
    let theName = " hadi ";
    console.log(theName);
    //access the index 1 and return a 
    console.log(theName[1]);
    //another method to do it 
    console.log(theName.charAt(1));

    //get the number of characters in a String
    console.log(theName.length);
    //method to remove the spaces
    console.log(theName.trim(0));

    //make the string toUppercase
    console.log(theName.toUpperCase);
    //make the string toLowerCase
    console.log(theName.toLowerCase);


    //the chain method
    console.log(theName.trim().charAt(2).toUpperCase());


    //=====================part two ===============//
    let a = " Elzero Web School" ;
    console.log(a.indexOf("W"));
    //start from the needed position to get the wanted string
    console.log("Web",8);   
    //get the index of the last characters
    console.log(a.lastIndexOf("o"));
    //cut the string
    //index-1
    console.log(a.slice(2,7));
    //start from the reverse positon
    console.log(a.slice(-2));

    //repeat
    console.log(a.repeat(2));

    //split
    //return as array 
    console.log(a.split());
    //split each string characters to the array
    console.log(a.slice(""));


    //=============part three ====================//
    console.log(a.substring(2));
    console.log(a.substring(2,6));

    //if the index is negative it start from 0
    console.log(-10,6);


    console.log(a.includes("web",8));
    


