
function openPage(event, name) {
    //set back to top of page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    var i, tabcontent, tablinks;

    // hide others
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    event.currentTarget.className += " active";
}
function iconInfo(id){
  var iconcontent = document.getElementsByClassName("iconcontent");
  for (i = 0; i < iconcontent.length; i++) {
    iconcontent[i].style.display = "none";
  }
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.getElementById("defaultOpen").click();
var iconcontent = document.getElementsByClassName("iconcontent");
for (i = 0; i < iconcontent.length; i++) {
  iconcontent[i].style.display = "none";
}
