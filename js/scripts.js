$(document).ready(function () {
    $.ajax({
        url: "dados/dados.json",
        dataType: "json",
        mimeType: "application/json",
        success: function (result) {
            $.each(result, function (key, val) {
                if (key == 0) {
                    $(".box-header").append("<div class='col-header'>\n\
                                                <div class='foto'><img src='dados/fotos/" + val.foto + "'></div>\n\
                                                <div class='dados'>\n\
                                                    <div class='nome'>NOME: <b>" + val.nome + "</b></div>\n\
                                                    <div class='cargo'>CARGO: <b>" + val.cargo + "</b></div>\n\
                                                    <div class='idade'>IDADE: <b>" + val.idade + "</b></div>\n\
                                                </div>\n\
                                            </div>");
                }
                $(".box-content").append("<div id='" + key + "' class='col-content'>\n\
                                            <div class='foto'>\n\
                                                <span class='badge'>" + val.id + "</span>\n\
                                                <img src='dados/fotos/" + val.foto + "'>\n\
                                            </div>\n\
                                            <div class='dados'>\n\
                                                <div class='nome'><b>" + val.nome + "</b></div>\n\
                                                <div class='cargo'>" + val.cargo + "</div>\n\
                                                <div class='idade'>" + val.idade + "</div>\n\
                                            </div>\n\
                                        </div>");
            });
        }
    });

    $(".box-content").on("click", ".col-content", function () {
        $(".box-content").find(".col-content").removeClass("box-selected");
        $(this).addClass("box-selected");
        
        $(".box-header").find(".foto").empty();
        $(this).find(".foto img").clone().appendTo(".box-header .foto");

        var nome = $(this).find(".dados .nome").text();
        $(".box-header").find(".nome").empty();
        $(".box-header .nome").append("<div class='nome'>NOME: <b>" + nome + "</b></div>");
        var cargo = $(this).find(".dados .cargo").text();
        $(".box-header").find(".cargo").empty();
        $(".box-header .cargo").append("<div class='cargo'>CARGO: <b>" + cargo + "</b></div>");
        var idade = $(this).find(".dados .idade").text();
        $(".box-header").find(".idade").empty();
        $(".box-header .idade").append("<div class='idade'>IDADE: <b>" + idade + "</b></div>");
    });
});