console.log("Hello, World!");

let result = [];

$(document).ready(function () {

    $(".button").click(function () {

        if ($(".result").text() == 0) {
            $(".result").text(this.innerHTML);
        } else {
            $(".result").append(this.innerHTML);
        }

        // $(".result").text( $(".result").text(this.innerHTML));
        // $(".result").append(this.innerHTML);
    });

    $("#AC").click(function () {
        $(".result").text(0)
    });

    $("#equal").click(function () {
        var resultat = $(".result").text();
        console.log("Résultat :", resultat);
    });
});