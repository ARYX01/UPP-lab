var totalRows = 10;
var totalColumn = 10;
var id = 0;
var color = ["black","navy","blue","#400080","#800080","#800000","#804000","#608000","#008000","#008060","#006080","#2a2a2a"]
var reset = 0;

function drawTable() {
	// pridobi div kjer ustvari oz postavi tabelo
    var div1 = document.getElementById('tabela');
	
    // ustvari element <table>
    var tbl = document.createElement("table");
	
    // ustvari vrstice
    for (var r = 0; r < totalRows; r++) {
        var row = document.createElement("tr");   
        // ustvari colone
        for (var c = 0; c < totalColumn; c++) {
            var cell = document.createElement("td");
			cell.innerHTML = "0";
			cell.setAttribute("id", id);
			cell.setAttribute("href", "0");
			cell.onclick = function(event) {
				var count = this.getAttribute("href");
				var stevec = this.innerHTML;
				stevec++;
				this.innerHTML = stevec;
				if(reset==1){
					count=0;
					reset=0;
				}
				barva(this.id,count);
				if (count==11)
					count=-1;
				count++;
				this.setAttribute("href", count);
			};
			id++;
            row.appendChild(cell);
        }           
    tbl.appendChild(row); // postavi vrstico v tabelo
    }
	div1.appendChild(tbl); // postavi celotno ustvarjen element <table> v <div1>
}
window.onload=drawTable; // izve funkcijo, ko je stran popolnoma naložena

function barva(who,num){
	//var bg = document.getElementById(who);
	//fix(color[num]);
	bg(num,who);
}
function bg(num, idbg){
	var bgid = document.getElementById(idbg);
	bgid.style.background = color[num];
	bgid.onmouseover = function(){
		bgid.className = 'hovered';
		bgid.style.background = "#9C9898";
		};
	bgid.onmouseout = function(){
		bgid.className = 'unhovered';
		bgid.style.background = color[num];
		};
}
function fill100(){
	reset=1;
	for (var i = 0; i < 100; i++) {
		var btn = document.getElementById(i);
		btn.innerHTML=(i+1);
		bg(11,i);
	}
}
function reset0(){
	reset=1;
	for (var i = 0; i < 100; i++) {
		var btn = document.getElementById(i);
		btn.innerHTML="0";
		bg(11,i);
	}
}
function div3(){
	var x = document.getElementById("textarea").value
	reset=1;
	for (var i = 0; i < 100; i++) {
		var btn = document.getElementById(i);
		if((i+1)%x==0)
			bg(2,i);
		else
			bg(11,i);
	}
}
