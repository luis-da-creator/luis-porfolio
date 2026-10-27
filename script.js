// Colors used for the table row buttons
var rowHighlight = "#0d9488";
var rowNormal = "#273449";
var headerColor = "#0c4a6e";

$("#btnHide").click(function(){
    $("#profilePanel").hide("slow")
    $("#statusText").hide("slow")
})

$("#btnShow").click(function(){
    $("#profilePanel").show(1000)
    $("#statusText").show(1000)
})

$("#btnTitle").click(function(){
    $("#mainHeading").text("This is the Student Profile Page")
    $("#statusText").text("Welcome!")
})

$("#btnTitle").dblclick(function(){
    $("#mainHeading").text("Welcome Students!")
    $("#statusText").text("Waiting...")
})

$("#btnOdd").click(function(){
    $("#studentTable tr:odd").css("background", rowHighlight)
    $("#studentTable tr:even").css("background", rowNormal)
    $("#studentTable th").css("background", headerColor)
    $("#tableStatus").text("Odd Rows Selected")
})

$("#btnEven").click(function(){
    $("#studentTable tr:odd").css("background", rowNormal)
    $("#studentTable tr:even").css("background", rowHighlight)
    $("#studentTable th").css("background", headerColor)
    $("#tableStatus").text("Even Rows Selected")
})

$("#courseSelect").change(function(){
    $("#courseOutput").text($(this).val())
})
