var button = document.getElementById('button');

function calcHipotenusa() {
    var a = document.getElementById('xInput').value;
    var b = document.getElementById('yInput').value;

    var resultado = document.getElementById('resultado');

    var hipotenusa = Math.round(Math.sqrt((a*a) + (b*b)));

    resultado.innerHTML=hipotenusa;
};


button.addEventListener('click', calcHipotenusa)


var list1 = [];
var list2 = [];
var list3 = [];

var n = 1;
var x = 0;


function AddRow() {
    var AddRow = document.getElementById('show');
    var NewRow = AddRow.insertRow(n);

    list1[x] = document.getElementById("xInput").value;
    list2[x] = document.getElementById("yInput").value;
    
    list3 = [] ;
        for (var i = 0; i < list1.length; i++) {
            list3[i] = Math.round(Math.sqrt((list1[i]*list1[i]) + (list2[i]*list2[i])));
        }



    var cell1 = NewRow.insertCell(0);
    var cell2 = NewRow.insertCell(1);
    var cell3 = NewRow.insertCell(2);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];

    n++;
    x++;
}
