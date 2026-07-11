let user ={
    name: "Osama",
    age : 38,
    skills :["html","css","Js"],
    available : false,
    addresses :{
        ksa: "Riyad",
        eygpt: {
            one :"Cairo",
            two : "Giza",
        },
    },
    checkAv: function(){
        if(user.available === true){
            return `Free for Work`
        }else 
            return `Not free`;
    },

}

console.log(user.name );
console.log(user.skills.join(" | "));
console.log(user.age);

console.log(user.addresses.ksa);
console.log(user.addresses.eygpt.one);

console.log(user["addresses"]["eygpt"]["one"]);
console.log(user.checkAv());