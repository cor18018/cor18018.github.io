window.addEventListener("load", ()=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const d = new Date();
    var today = new Date();

    today = days[d.getDay()] + ", " + String(today.getDate()).padStart(2, "0") + " " + monthNames[d.getMonth()] 
    + " " + today.getFullYear();

    const current_date = document.querySelector("#currentDate");
    current_date.textContent = today;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

    const menubutton = document.querySelector(".menu");
    const mainnav = document.querySelector("#nav");
    menubutton.addEventListener("click", ()=> {mainnav.classList.toggle("resonsive")},false);
    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove("responsive");};
    
    const message = document.querySelector(".alert_message");
    var friday = d.getDate();
    if (friday != 5) {
        message.classList.toggle("no_alert");
    }
    else {
        message.classList.remove("no_alert");
    }
});