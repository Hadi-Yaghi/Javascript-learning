function showInfo(us="Un",ag="Un",rt="0",show="Yes", ...skills){
    document.write(`<div>`);
    document.write(`<h2>welcome , ${us}</h2>`);
    document.write(`<p>Age : ${ag}</p>`);
    document.write(`<p>Hour rate : $${rt}</p>`);
    if(show==="Yes"){
        if(skills.length >0){
            document.write(`<p> ${skills.join(" | ")} </p>`)
        }else{
            document.write(`<p>No skills available</p>`);
        }
        
    }else{
        document.write(`<p>skills are Hidden</p>`);
    }
    document.write(`</div>`);
}
showInfo("Roy",21,5,"Yes","Html","MERN stackaye");