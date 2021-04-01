function kiemTra(gTri) {
    var reg = /^[0-9]+/;
    if (gTri != "") {
        if (reg.test(gTri) == false) {
            alert("Số lượng sai!");
            return false;
        }
        else {
            return true;
        }
    }
}

function tinhTien() {
    var tt1 = 0, tt2 = 0; tt3 = 0, tt4 = 0;
    var sl1 = document.getElementById("txt1").value;
    var sl2 = document.getElementById("txt2").value;
    var sl3 = document.getElementById("txt3").value;
    var sl4 = document.getElementById("txt4").value;

    if (kiemTra(sl1) == true)
        tt1 = parseFloat(sl1) * 2000;
    if (kiemTra(sl2) == true)
        tt2 = parseFloat(sl2) * 1500;
    if (kiemTra(sl3) == true)
        tt3 = parseFloat(sl3) * 1200;
    if (kiemTra(sl4) == true)
        tt4 = parseFloat(sl4) * 1900;

    document.getElementById("tt").innerHTML = tt1 + tt2 + tt3 + tt4 + " VNĐ";
}