function divshowhide() {
    var block_elm = document.getElementById('block');
    block_elm.style.display = (block_elm.style.display.match("none")) ? "" : "none";
    // if(a == "none")
    // {
    //     a.style.display = "";
    // }
    // if(a == "")
    // {
    //     a.style.display = "none";
    // }
}



function phone_move_over() {
    var arrow = document.getElementsByClassName("arrow-set");
    var phnoe_move = document.getElementsByClassName('mate20-phnoe');
    var shadow = document.getElementsByClassName('shadow');
    arrow[1].style.margin = "0 0 0 15px";
    phnoe_move[0].style.top = "0";
    shadow[0].style.top = "640px";
}

function phone_move_out() {
    var arrow = document.getElementsByClassName("arrow-set");
    var phnoe_move = document.getElementsByClassName('mate20-phnoe');
    var shadow = document.getElementsByClassName('shadow');
    arrow[1].style.margin = "0 0 0 5px";
    phnoe_move[0].style.top = "15px";
    shadow[0].style.top = "630px";
}


function hoverlist1() {
    var list1 = document.getElementsByClassName('hoverlist1');
    if(list1[0].style.display.match("none"))
        list1[0].style.display = "block";
}

function outlist1() {
    var list1 = document.getElementsByClassName('hoverlist1');
    if(list1[0].style.display.match("block"))
        list1[0].style.display = "none";
}

function hoverlist2() {
    var list2_nav = document.getElementsByClassName("list2-nav");
    var list2 = document.getElementsByClassName('hoverlist2');
    if(list2_nav[0].style.display.match("none"))
        list2_nav[0].style.display = "block";
    if(list2[0].style.display.match("none"))
        list2[0].style.display = "block";
}

function outlist2() {
    var list2_nav = document.getElementsByClassName("list2-nav");
    var list2 = document.getElementsByClassName('hoverlist2');
    if(list2_nav[0].style.display.match("block"))
        list2_nav[0].style.display = "none";
    if(list2[0].style.display.match("block"))
        list2[0].style.display = "none";
}

function list2_l0() {
    var list2_l0 = document.getElementsByClassName("list2-l0");
    var list2_l1 = document.getElementsByClassName("list2-l1");
    var list2_l2 = document.getElementsByClassName("list2-l2");
    if(list2_l0[0].style.display.match("none"))
    {
        list2_l0[0].style.display = "block";
        list2_l1[0].style.display = "none";
        list2_l2[0].style.display = "none";
    }
        
}

function list2_l1() {
    var list2_l0 = document.getElementsByClassName("list2-l0");
    var list2_l1 = document.getElementsByClassName("list2-l1");
    var list2_l2 = document.getElementsByClassName("list2-l2");
    if(list2_l1[0].style.display.match("none"))
    {
        list2_l0[0].style.display = "none";
        list2_l1[0].style.display = "block";
        list2_l2[0].style.display = "none";
    }
        
}

function list2_l2() {
    var list2_l0 = document.getElementsByClassName("list2-l0");
    var list2_l1 = document.getElementsByClassName("list2-l1");
    var list2_l2 = document.getElementsByClassName("list2-l2");
    if(list2_l2[0].style.display.match("none"))
    {
        list2_l0[0].style.display = "none";
        list2_l1[0].style.display = "none";
        list2_l2[0].style.display = "block";
    }
        
}






var slideIndex = 0;
showSlides();
 
// function PrevSlide(n) {
//     showSlides(slideIndex += n);
//   }
   
//   function NextSlide(n) {
//     showSlides(slideIndex = n);
//   }
 
  
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("img-banner");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;

    if (slideIndex > slides.length) 
    {
        slideIndex = 1
    }    

    for (i = 0; i < dots.length; i++) {
        dots[i].style.background = "darkgray";
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].style.background = "black";
    setTimeout(showSlides, 4000); 
}

// var story_card = document.querySelectorAll(".story-card");
// for(var i = 0; i <  story_card.length; i++)
// {
//     story_card[i].addEventListener('mouseover', function(){
//         var arrow = document.querySelectorAll(".arrow-toright");
//         for(var i = 0; i <  arrow.length; i++)
//         {
//             arrow[i].addEventListener('mouseover', function(){
//                 this.style.margin = "0 0 0 20px";
//             }
//             );
//         }
//     });
// }



// function arrow_set_over() {
    var arrow_set = document.querySelectorAll(".arrow-set");
    for (var i = 1; i < arrow_set.length; i++) {
        arrow_set[i].addEventListener('mouseover', function () {
            this.style.margin = "0 0 0 15px";
        }
        );
    }
// }



// function arrow_set_out() {
    for (var i = 0; i < arrow_set.length; i++) {
        arrow_set[i].addEventListener('mouseout', function () {
            this.style.margin = "0 0 0 0";
        }
        );
    }
// }



// var arrow = document.querySelectorAll(".arrow-toright");
// for (var i = 0; i < arrow.length; i++) {
//     arrow[i].addEventListener('mouseover', function () {
//         this.style.margin = "0 0 0 20px";
//     }
//     );
// }

// for (var i = 0; i < arrow.length; i++) {
//     arrow[i].addEventListener('mouseout', function () {
//         this.style.margin = "0 0 0 10px";
//     }
//     );
// }


// for(var i = 0; i <  story_card.length; i++)
// {
//     story_card[i].addEventListener('mouseout', function(){

//     });
// }



// var arrow = document.getElementsByClassName("story-card");
//  for(var i in arrow)
//  {
//      arrow[i].onmouseover = arrow_right_over();
//      arrow[i].onmouseout = arrow_right_out();
//  }

// function arrow_right_over() {
    // var arrow = document.querySelectorAll(".arrow-toright");
    //         for(var i = 0; i <  arrow.length; i++)
    //         {
    //             arrow[i].addEventListener('mouseover', function(){
    //                 this.style.margin = "0 0 0 20px";
    //             }
    //             );
    //         }
    // this.style.margin = "0 0 0 20px";
    // var story1 = document.getElementsByClassName("story-card");
    // var story = document.getElementsByClassName("story-card");
    // var arrow = document.getElementsByClassName(obj);
    // obj.style.margin = "0 0 0 20px";
    // for(var i = 0; i < story.length; i++)
    // {
    //     story[i].addEventListener('mouseover', function(){
    //     console.log(arrow[i].style.margin);
    //     arrow[i].style.margin = "0 0 0 20px";
    //     });
    // }

// }

// function arrow_right_out() {
    // this.style.margin = "0 0 0 10px";
    // var arrow = document.querySelectorAll(".arrow-toright");
    // for(var i = 0; i < arrow.length; i++)
    // {
    //     arrow[i].style.margin = "0 0 0 10px";
    // }
    // var story = document.querySelectorAll(".story-card");
    // var arrow = document.querySelectorAll(".arrow-toright");
    // arrow[0].style.margin = "0 0 0 10px";
    // for(var i = 0; i < story.length; i++)
    // {
    //     story[i].addEventListener('mouseout', function(){
    //     console.log(i);
    //     arrow[i].style.margin = "0 0 0 10px";
    //     });
    // }

// }

// function arrow_set_over() {
//     var arrow = document.getElementsByClassName("arrow-set");
//     arrow[4].style.margin = "0 40px 0 0";
// }

// function arrow_set_out() {
//     var arrow = document.getElementsByClassName("arrow-set");
//     arrow[4].style.margin = "0 60px 0 0";
// }

// function showimg() {
//     var img = document.getElementsByTagName("img");
//     img[42].style.display = "initial";
// }

// function hideimg() {
//     var img = document.getElementsByTagName("img");
//     img[42].style.display = "none";
// }


// var show_hide_img = document.querySelectorAll(".img");
// for (var i = 31; i < show_hide_img.length; i++) {
//     show_hide_img[i].addEventListener('mouseover', function () {
//         this.style.display = "";
//     }
//     );
// }


// var show_hide_img = document.querySelectorAll(".img");
// for (var i = 31; i < show_hide_img.length; i++) {
//     show_hide_img[i].addEventListener('mouseout', function () {
//         this.style.display = "none";
//     }
//     );
// }