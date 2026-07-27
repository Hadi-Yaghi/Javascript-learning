
let Admin = ["Ahmed", "Osama","Sayed"]
let Employee= ["Amgad","Samah","Ameer","Omar","Othman","Amnay","Samia"]
let count;
for (count = 1; count < Admin.length; count++) {
    if (Admin[count] === "Stop") break;
}

document.write(`<div>We have ${count} Admins</div>`);
document.write("<hr>");


for(let i=0;i<Admin.length;i++)
{
    document.write(`<div>The Admin for team 1 is ${Admin[i]}</div>`);
    document.write("<h2>Teams Members</h2>");
    let x = Admin[i].charAt(0)
    let k = 0;
    for(let j = 0; j<Employee.length;j++) {

            if(Employee[j].charAt(0) === x) {
                document.write(`<p>- ${++k} ${Employee[j]} </p>`);
            }
        
    }
        document.write("<hr>");
}