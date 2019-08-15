//front backend
$(document).ready(function(){
  $("form#triangleForm").submit(function(event){
    $(".alert").hide();
    console.log("check");
    var a = parseInt($("#length1").val());
    var b = parseInt($("#length2").val());
    var c = parseInt($("#length3").val());
    var type = triangleType(a, b, c);
    $("." + type).show();
    event.preventDefault();
  });
});
//backend
function triangleType(a, b, c) {
  if ( a === b && b === c) {
    return "equi";
  } else if ( a === b || a === c || b === c){
    return "iso";
  } else if ( a + b <= c || a + c <= b || b + c <= a ) {
    return "nat";
  } else {
    return "scal";
  }
}
