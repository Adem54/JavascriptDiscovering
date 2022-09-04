


const app=document.getElementById("app");

export const createInput=()=>{
    app.innerHTML=`
    <label for="name">Name</label>
    <input type="text" id="name" name="name"/>
    
    `;
}

app.innerHTML="<div>Hello</div>"