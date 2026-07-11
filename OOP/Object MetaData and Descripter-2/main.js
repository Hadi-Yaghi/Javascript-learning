const myobj = {
    a:1,
    b:2,
}

Object.defineProperty(myobj,{
    c:{
        configurable:true,
        value:3,
    },
    d:{
        configurable:true,
        value:4,
    },
    e:{
        configurable:true,
        value:5,
    }
});

console.log(myobj);
console.log(object.getOwnPropertyDescriptor(myobj,`c`));
console.log(object.getOwnPropertyDescriptor(myobj,`d`));