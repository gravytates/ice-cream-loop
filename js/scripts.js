$(document).ready(function() {

   var flavors = ["mudslide", "vanilla", "mint chocolate chip", "cookie dough", "salted caramel"];

  flavors.forEach(function(flavor, id) {
    $("#flavor" + ++id).text(flavor);
  });
});
