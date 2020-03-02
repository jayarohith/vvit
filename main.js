fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    display_info(data.basics);
})

function display_info(info){
   
    var bodyelement=document.querySelector("#root"); 

    let card=document.createElement("div")
    card.classList.add("card");
    bodyelement.appendChild(card);

    let heading=document.createElement("h1");
    heading.textContent=info.name;
    card.appendChild(heading);

    let line=document.createElement("hr");
    card.appendChild(line);

    let h=document.createElement("h2");
    h.textContent=info.role;
    card.appendChild(h);

    let email=document.createElement("a");
    email.href="email-to"+info.email;
    email.textContent=info.email;
    card.appendChild(email);
    
    let br=document.createElement("br");
    card.append(br);

    let br1=document.createElement("br");
    card.append(br1);
    
    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile_no;
    mobile.textContent=info.mobile_no;
    card.appendChild(mobile);

    // let br2=document.createElement("br");
    // card.append(br2);

    var button=document.createElement("a");
    button.textContent="view profile";
    button.classList.add("button");
    card.append(button);
}

    