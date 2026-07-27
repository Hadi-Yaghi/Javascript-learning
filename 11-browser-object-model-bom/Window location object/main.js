console.log(location);


console.log(location.href);
//this will direct the page into google
location.href = "https://google.com" ;
//this will direct the page into sec02;
location.href = "/#sec02";
//this will give the host  of the page with the port
console.log(location.host);
//this will return just the host without the port
console.log(location.hostname);
//this will return the protcol used 
console.log(location.protocol);

//this will reload the page 
console.log(location.reload());
//change the current url
//it will remove the page from the history;
location.replace("https://google.com");


