
 

var glueStick= "Happy Thanksgiving, eat lots of turkey, mashed potatoes, and stuffing!";



var turkey= "https://www.cacklehatchery.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/a/narraa_turk_poults_1_.jpg"

var imageArray= [
  "https://cdn.differencebetween.net/wp-content/uploads/2015/02/squash-458023_1280-1024x652.jpg",
    turkey,
       "https://cdn.shopify.com/s/files/1/0083/4602/products/organic_new_england_pie_pumpkin01_fc4db80c-4f84-4806-8783-d8a8ba094c93.jpg?v=1427263497",
    "https://animal-dream.com/data_images/turkey/turkey8.jpg",
    "https://thecheeps.files.wordpress.com/2015/09/etnico-autumn-leaves.jpg",

]
    
    
    var currentIndex= 0;
    
    function renderImage() {
    if(currentIndex<0){
    currentIndex= imageArray.length-1;
    
    } else if(currentIndex >= imageArray.length) {
    currentIndex=0}
    
    $('#thePhoto').attr('src', imageArray[currentIndex]);
    
    }
    
    renderImage();



$('#forwardBtn').on('click', function(){
    currentIndex ++;
    renderImage();
    
});


$('#backBtn').on('click', function(){
    currentIndex --;
    renderImage();
});



$('#dogeDoge').on('click', function(){
    alert("Yay! Now scroll through the pictures again ;)");
    imageArray.push("https://66.media.tumblr.com/777cc425a31b60b4d59d88d60c4281c9/tumblr_mwksyiw48m1rbfce3o1_500.jpg");
     var glueStick= "Everything is glue... Everything is glue! Don't believe me, I'll show you that everything is glue! ...Peter, what... are you talking about? Don't worry about it, ok? This is Kermit, who turns into Sermet! Clues, caboose, moose, glUE STick!! Peach is a Weech, but now she is a Paesch, Paesch, beige, wage, glUE Stick!! You are my friend and you're on the Internet, net , gnat, newt, glUE STick!! Marble likes to gargle on the chicken that he gobbles, goggles, models, bottles, bills, pills, gills,stills, glUE STick!I can turn anything into glUE! Why are you doing this Peter?SHUT UP DON'T ASK QUESTIONS." ;
});


var name= prompt("Tell me your name")
var outputString = "E3 Happy Thanksgiving" + "  " +name+ " E3" ;

$("h1"). html(outputString);



google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
     
function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Person', 'Thanksgivinginess'],
          ['Mom',     11],
          ['James',      6],
          ['Me',  2],
          ['Dad', 5],
          
        ]);

            
           var chartWidth= $ (window).width()*0.3
        var options = {
          title: 'Thanksgivingness of my family',
          pieHole: 0.8,
             width: 600,
            height: 600,
            backgroundColor: '#FFB386',
            slices: {  2: {offset: 0.4},
            0: { color: 'brown' },
            3: { color: 'orange' } },
            
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }


$(document).ready(function(){
    $("p").hover(function(){
        $(this).css("background-color", "brown");
        }, function(){
        $(this).css("background-color", "#FFB386");
    });
});



     
