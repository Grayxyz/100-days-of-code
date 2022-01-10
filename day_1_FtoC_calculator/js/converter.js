function conversion() {
    let f = Math.round((document.getElementById("degreesF").value-32)/1.8);
    document.getElementById("conversion").innerHTML = f;
}