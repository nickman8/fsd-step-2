console.log("111");



let textChange = (firstElem, secondElem) => {
    let bedroom = "спальни";
    let beds = "кровати"
    if (secondElem == 1)
    {
        beds = "кровать";
    }
    if (secondElem >= 5)
    {
        beds = "кроватей";
    }
    if (firstElem == 1)
    {
        bedroom = "спальня";
    }
    if (firstElem >= 5)
    {
        bedroom = "спален";
    }
    return `${firstElem} ${bedroom}, ${secondElem} ${beds}...`
}


$(".dropdown_circle").click(function(e) {
  //console.log(e.target.innerHTML);
  let firstElem = +$(e.target).offsetParent().children().children(".dropdown_elem__right").children("span")[0].innerHTML;
  let secondElem = +$(e.target).offsetParent().children().children(".dropdown_elem__right").children("span")[1].innerHTML;
  let thirdElem = +$(e.target).offsetParent().children().children(".dropdown_elem__right").children("span")[2].innerHTML;
  //console.log(firstElem, secondElem, thirdElem)
  
  if (e.target.innerHTML == "+") {
    // console.log($(e.target).offsetParent().prev().children(":last").children(":first").val());
    // $(e.target).offsetParent().prev().children(":last").children(":first").val("rrrr") ;
    
    if (e.target.previousSibling.innerHTML != "9") {
      e.target.previousSibling.innerHTML = +e.target.previousSibling.innerHTML + 1;
      
      const data = $(e.target).attr("data");
      //$(e.target).attr("data")

      if (data == "dropdown1") {
        firstElem += 1
      }
      if (data == "dropdown2") {
        secondElem += 1
      }
      if (data == "dropdown3") {
        thirdElem += 1
      }
      $(e.target).offsetParent().prev().children(":last").children(":first").val(textChange(firstElem,secondElem))
     
    }

  } else if (e.target.innerHTML == "-") {

    if (e.target.nextElementSibling.innerHTML != "0") {
        const data = $(e.target).attr("data");
      e.target.nextElementSibling.innerHTML = +e.target.nextElementSibling.innerHTML - 1;
      if (data == "dropdown1") {
        firstElem -= 1
      }
      if (data == "dropdown2") {
        secondElem -= 1
      }
      if (data == "dropdown3") {
        thirdElem -= 1
      }
      $(e.target).offsetParent().prev().children(":last").children(":first").val(textChange(firstElem,secondElem))
      
    }

  }

})
