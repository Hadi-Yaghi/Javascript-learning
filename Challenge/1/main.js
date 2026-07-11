let Title,Description,Date;

Title = "Hello Elzero";
Description = "Elzero webSchool";
Date ="25/10";

let markUp= `
    <div>
        <h3>${Title}</h3>
        <p>${Description}</p>
        <span>${Date}</span>
    </div>
`;

let result = markUp.repeat(4);
document.write(result);