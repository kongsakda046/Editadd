
//ภาพ



//ใส่ Patition

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "Xml/CFG.xml", true);
xhttp.send();

function myFunction(xml) {
    var img,k,Test,x, y, z, con, i, xmlDoc, txt,id;
    var countE;
    var svg;


    xmlDoc = xml.responseXML;
    txt = "";
    k= "  ||||||||||||||||||||||||||||||||||||||||  "
    img=document.el
    contE = 0;

        x = xmlDoc.getElementsByTagName('Varname');
        y = xmlDoc.getElementsByTagName('Type');
        z = xmlDoc.getElementsByTagName('Dataset');
        con = xmlDoc.getElementsByTagName('Condition');
   input=xmlDoc.getElementsByTagName('Input');
   Ac=xmlDoc.getElementsByTagName('Action');
   var table="<tr><th>Varname</th><th>Type</th></tr>";
   for (i = 0; i < x.length; i++) {
    //txt += x[i].getAttribute('min') + "<br>"; 
    txt = txt +"<tr><th>"+ "Varname=" +"</th><th>"+  x[i].childNodes[0].nodeValue + " ";
    txt = txt + "Type=" +  y[i].childNodes[0].nodeValue + " ";
    txt = txt + "Dataset=" +  z[i].childNodes[0].nodeValue + "<br>";
    var j=0;
    
        while(j<z[i].childNodes[0].nodeValue){
         contE = contE+j;
        if(input[i]){
        if( x[i].childNodes[0].nodeValue=="Order Price"){
         txt += "id="+con[j].getAttribute('id') +" min=" + con[j].getAttribute('min') +k+ " max=" + con[j].getAttribute('max')  + "<br>";
         //txt += "j="+j+" min=" + con[j].getAttribute('min') + "<br>";    
        }else{
         txt +="id="+con[contE].getAttribute('id')+" value="+ con[contE].getAttribute('value') + "<br>";
        }
     }else{
         txt +="id="+Ac[j].getAttribute('id')+" value="+ Ac[j].getAttribute('value') + "<br>";

     }
     j++;
     
 }    
;  }

document.getElementById("Patiton").innerHTML = txt; 

}