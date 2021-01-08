jQuery(document).ready(function () {
    $.ajax({
        url:"http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4952a05f15ae4ee690aea76c1dd839e7",
        type: "GET",
        dataType : "json",
        success: function (data) {
            console.log(data.articles);
            for(i=0; i<data.articles.length; i++){
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img>" +
                                    "<h3>" + data.articles[i].title + "</h3>"+
                                    "<p>" + data.articles[i].description + "</p>" +
                                    "<a href=" + data.articles[i].url + ">" +
                                    "<button>" + "Voir l'article" + "</button></div>");
            }
        }
    });
});

