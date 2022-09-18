
let url = "https://api.github.com/users/";
 let uslist;
 let text = document.querySelector("input");
 let us = document.querySelector(".userdata");
 let list=document.querySelector("ul")
 let ass;
 window.addEventListener("keyup",(e)=>{
   if(e.keyCode===13){
     let sName = text.value;
   userdata(sName);
   }
 })

 const userdata = async (username) => {
   let data = await fetch(url + username);
   let res = await data.json();

   if (res.name) {
     userprofile(res);
  
   } else {
     userprofile(res.message);
   }
 };
 function userprofile(a) {
   us.innerHTML = `<div class="usr">
   <img src=${a.avatar_url ? a.avatar_url : ""}/>
   <div class="name">
 ${a.name ? a.name : a}
   </div>
 </div>`;
  
 }
 const userlist=async()=>{
   await fetch(`https://api.github.com/users`).then(res=>res.json
   ()).then(data=>uslist=data)
   uslist.forEach(e=>{
    let a=document.createElement("li")
    a.innerHTML=e.login 
   list.append(a)
     })
  list.append(ass)
 }
 userlist()


