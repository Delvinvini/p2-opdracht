document.addEventListener("DOMContentLoaded", function() {


    var outputelement = document.getElementById("output");

    for (var i = 1; i <= 100; i++) {
    var textNode = this.createTextNode("Dit is regel " + i);

    outputelement.appendChild(textNode);

    if (i < 100) {
        outputelement.appendChild(document.createElement("br"));
        }
    }
});   