function tambah() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) + parseInt(b);
}


function kurang() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) - parseInt(b);
}


function kali() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) * parseInt(b);
}


function bagi() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) / parseInt(b);
}


function pangkat() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) ** parseInt(b);
}

function cekAngka() {
    //const bil1 = parseInt(document.getElementById("bilangan1").value);
    //const bil2 = parseInt(document.getElementById("bilangan2").value);

    //const bil1 = parseInt($("#bilangan1").val());
    //const bil2 = parseInt($("#bilangan2").val());

    //if (bil1 < bil2) {
    //    $("#output").html(bil1 + " lebih kecil dari pada " + bil2);
    //} else if (bil1 > bil2) {
    //    $(".myClass").html(bil1 + " lebih besar dari pada " + bil2);
    //} else {
    //    $("p").html(bil1 + " sama besar dari pada " + bil2);
    //}

    /*for (i in document.getElementsByClassName("myClass")) {
        document.getElementsByClassName("myClass")[i].innerHTML = "ini dom ke-" + i;
    }*/
    $("#output1 .mySpanClass").css("color", "red");
}