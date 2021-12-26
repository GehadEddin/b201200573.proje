function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
document.getElementById("submit").addEventListener("click", function() {
  let x = document.forms["myform"]["email"].value;
  let y = document.forms["myform"]["txt"].value;
  let z = document.forms["myform"]["text"].value;
  if(isNaN(x)&&isNaN(y)&&isNaN(z)) alert("Email başarılı gönderdiniz");});
$("#container").hover(function(){
    $("#container .content ").show();
  });
  $(" #container").mouseleave(function(){
    $("#container .content").hide();
  }); 
  $(" .cont").hover(function(){
    $("  .content1 ").show();
  });
  $(".cont").mouseleave(function(){
    $(" .content1").hide();
  });
  $(".cont1").hover(function(){
    $(" .content2 ").show();
  });
  $(" .cont1").mouseleave(function(){
    $(".content2").hide();
  });
  $(".cont2").hover(function(){
    $(".content3 ").show();
  });
  $(" .cont2").mouseleave(function(){
    $(" .content3").hide();
  });
  $(".cont3").hover(function(){
    $(".content4 ").show();
  });
  $(" .cont3").mouseleave(function(){
    $(" .content4").hide();
  });
  $("#container1").hover(function(){
    $(".content5 ").show();
  });
  $(" #container1").mouseleave(function(){
    $(".content5").hide();
  });