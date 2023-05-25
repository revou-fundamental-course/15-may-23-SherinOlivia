function hitungluas() {

    var sisiLuas = document.getElementById("sisi-luas").value;

    luas = sisiLuas * sisiLuas;
    /**to show the result of the formulaa.. : */
    document.getElementById("output_luas").innerHTML = '<span>'+luas+'</span>';

    console.log("Hasilnya adalah..", luas)

}

function hitungkeliling() {

    var sisiKeliling = document.getElementById("sisi-keliling").value;

    keliling = 4 * sisiKeliling;
    /**to show the result of the formula.. : */
    document.getElementById("output_keliling").innerHTML = '<span>'+keliling+'</span>';

    console.log("Hasilnya adalah..", keliling)


}
    /**buat hilangin/lepasin value yg diinput..aka reset.. : */
function resetluas() {
    var sisiLuas = document.getElementById("sisi-luas").value="";
    document.getElementById("output_luas").innerHTML = "";
}

function resetkeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value="";
    document.getElementById("output_keliling").innerHTML = "";
}