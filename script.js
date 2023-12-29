function date(){
    let D = new Date() ;
    let d = D.getDate();
    let m = D.getMonth();
    let y = D.getFullYear();
    d = d.toString();
    m = m.toString();
    y = y.toString();
    let ch = d + "/" + m +  "/" + y;
    document.getElementById("date").innerHTML = ch;
}





/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}