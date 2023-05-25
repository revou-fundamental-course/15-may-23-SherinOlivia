function hitungluas() {

    var sisiLuas = document.getElementById("sisi-luas").value;

    luas = sisiLuas * sisiLuas;
    
    document.getElementById("output_luas").innerHTML = '<span>'+luas+'</span>';

    document.getElementById("output_luas").value = luas;

}

function hitungkeliling() {

    var sisiKeliling = document.getElementById("sisi-keliling").value;

    keliling = 4 * sisiKeliling;
    
    document.getElementById("output_keliling").innerHTML = '<span>'+keliling+'</span>';

    console.log("Hasilnya adalah..", keliling)


}

function resetluas() {
    var sisiLuas = document.getElementById("sisi-luas").value="";
    document.getElementById("output_luas").innerHTML = "";
}

function resetkeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value="";
    document.getElementById("output_keliling").innerHTML = "";
}