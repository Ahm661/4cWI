function loadMatches(){
 
    fetch('https://api.openligadb.de/getbltable/s%C3%BCperlig/2023')
      .then(response => response.json())
      .then(json => fillTable(json))
}
 
 
function fillTable(data){
    console.log(data);
    let table = "";
    data.forEach((team, index) => {
        // let position = index +1;
       let output =
       '<div class="component">' + team.teamName +
       '<div class="wappen"><img src="' + team.teamIconUrl + '" alt="" height="35px" width="35px">' +
       '</div><div class="pk">' + team.points + '</div>'
      
       table += output;
    });
    document.getElementById("table").innerHTML=table;
}
 
loadMatches();