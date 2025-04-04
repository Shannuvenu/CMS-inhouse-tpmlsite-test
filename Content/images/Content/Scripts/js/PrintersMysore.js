//    To collect end- user usage analytics about your application,
//        insert the following script into each page you want to track.
//Place this code immediately before the closing </head > tag,
//    and before any other scripts.Your first data will appear 
//automatically in just a few seconds.
var appInsights = window.appInsights || function (config) {
    function i(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = "AuthenticatedUserContext", h = "start", c = "stop", l = "Track", a = l + "Event", v = l + "Page", y = u.createElement(o), r, f; y.src = config.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js"; u.getElementsByTagName(o)[0].parentNode.appendChild(y); try { t.cookie = u.cookie } catch (p) { } for (t.queue = [], t.version = "1.0", r = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; r.length;)i("track" + r.pop()); return i("set" + s), i("clear" + s), i(h + a), i(c + a), i(h + v), i(c + v), i("flush"), config.disableExceptionTracking || (r = "onerror", i("_" + r), f = e[r], e[r] = function (config, i, u, e, o) { var s = f && f(config, i, u, e, o); return s !== !0 && t["_" + r](config, i, u, e, o), s }), t
}({
    instrumentationKey: "049eb63c-386b-4db9-854a-8c94b7bfad59"
});

window.appInsights = appInsights;
appInsights.trackPageView();





if ($(window).width() > 800) {
    $(".sticky-2").hide();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();


        if (scroll >= 400) {
            $(".nav-down").addClass("darkHeader");
            $(".sticky-2").show().addClass("sticky-2-show");
            $(".sticky-1").hide();
            $(".navbar a ").css("color", "#4a4a4a");
            $(".st0-logo-crop").addClass("st0-logo-crop-inner");
            $(".nav li").addClass("inner-nav-color");


        }

        if (scroll <= 400) {
            $(".nav-down").removeClass("darkHeader");
            $(".sticky-1").show();
            $(".sticky-2").hide().removeClass("sticky-2-show");
            $(".nav-down").removeClass("darkHeader");
            $(".navbar a ").css("color", "#FFF");
            $(".st0-logo-crop").removeClass("st0-logo-crop-inner");
            $(".nav li").removeClass("inner-nav-color");
        }
    });


    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
}






$(document).ready(function () {
    $(".variable").slick({
        dots: false,
        infinite: true,
        variableWidth: true
    });
});


jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 30,
        time: 300
    });
});


new WOW().init();


//$(document).ready(function () {
//    $('#btnSubscribe').click(function () {
//        $('.modalsubcribtion')
//            .prop('class', 'modalsubcribtion fade') // revert to default
//            .addClass($(this).data('direction'));
//        $('.modalsubcribtion').modal('show');
//    });
//});


$(document).ready(function () {
    $('#btnWrite, #btnMedia, #btnEvents').click(function () {
        $('.modalForm')
            .prop('class', 'modalForm fade') // revert to default
            .addClass($(this).data('direction'));
        $('.modalForm').modal('show');
    });
});


//$(document).ready(function () {

//    $('#btnContact').click(function () {
//        $('.modalContact')
//            .prop('class', 'modalContact fade') // revert to default
//            .addClass($(this).data('direction'));
//        $('.modalContact').modal('show');
//    });

//});


$(document).ready(function () {
    $('#nav-icon4-inner').click(function () {
        $(this).toggleClass('open-inner');

    });
});


$(document).ready(function () {
    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});
function SendMail() {
    $.ajax({
        url: 'urlTEmailController\Index',
        data: { id: id }
    }).done(function () {
        alert('Added');
    });
}


$(".btn-click").click(function () {
    $('html,body').animate({
        scrollTop: $(".second").offset().top
    },
        'slow');
});


$(document).ready(function () {
    var showChar = 170;
    var ellipsestext = "...";
    var moretext = "READ MORE";
    var lesstext = "LESS";
    $('.more').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar - 0, content.length - showChar);

            var html = c + '<span class="moreelipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });


    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


$('.panel-collapse').on('shown.bs.collapse', function (e) {
    var $panel = $(this).closest('.panel');
    $('html,body').animate({
        scrollTop: $panel.offset().top
    }, 1000);
});


$(document).ready(function () {

    $('#btnMailSubmit').click(function () {

        $.ajax({
            url: 'http://www.printersmysore.com/Contact/ContactForm',
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                UserName: $('#txtName').val(),
                UserEmail: $('#txtEmail').val(),
                Body: $('#txtMessage').val(),
                Page: $('MediaSol')

            }),
            success: function (result) {

                alert("Thanks for your inquiry, we will get in touch shortly.");
            },
            error: function (result) {
                //alert("We are sorry, something went wrong, please send your query in an email to webmaster@printersmysore.co.in");
                alert("Thanks for your inquiry, we will get in touch shortly.");

            }

        });
        $('#btnClose').click();
        return false;

    });
});


//$('.menuAnchor').on('click', function () {
//    $(this).addClass('active-link-inner');
//});


$(function () {
    $('#menuAnchor').on('click', '.menuAnchor', function (e) {
        e.preventDefault();
        $(this).parents('#menuAnchor').find('.active-link-inner').removeClass('active-link-inner').end().end().addClass('active-link-inner');
        $(activeTab).show();
    });
});


$(document).ready(function () {
    $(".bg-blr").mouseenter(function () {
        $(".blr-box").addClass('map-show')
    });
    $(".bg-blr").mouseleave(function () {
        $(".blr-box").removeClass('map-show')
    });

    $(".bg-davanagere").mouseenter(function () {
        $(".blr-box").hide();
        $(".bg-blr").removeClass("bg-blr-active");
        $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
        $(".Davanagere-box").addClass('map-show')

    });
    $(".bg-davanagere").mouseleave(function () {
        $(".Davanagere-box").removeClass('map-show')
        $(".bg-blr").addClass("bg-blr-active");
        $(".sub-print-area-blr").addClass("bg-blr-active-sub");
        $(".blr-box").show();


    });
    $(".bg-hosapete").mouseenter(function () {
        $(".blr-box").hide();
        $(".bg-blr").removeClass("bg-blr-active");
        $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
        $(".Ballari-box").addClass('map-show')

    });
    $(".bg-hosapete").mouseleave(function () {
        $(".Ballari-box").removeClass('map-show')
        $(".bg-blr").addClass("bg-blr-active");
        $(".sub-print-area-blr").addClass("bg-blr-active-sub");
        $(".blr-box").show();
    });

    $(".bg-hubbali").mouseenter(function () {
        $(".blr-box").hide();
        $(".bg-blr").removeClass("bg-blr-active");
        $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
        $(".Dharwad-box").addClass('map-show');

    });

    $(".bg-hubbali").mouseleave(function () {
        $(".Dharwad-box").removeClass('map-show');
        $(".bg-blr").addClass("bg-blr-active");
        $(".sub-print-area-blr").addClass("bg-blr-active-sub");
        $(".blr-box").show();
    });

    $(".bg-dk").mouseenter(function () {
        $(".blr-box").hide();
        $(".bg-blr").removeClass("bg-blr-active");
        $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
        $(".DakshinaKannada-box").addClass('map-show');
    });

    $(".bg-dk").mouseleave(function () {
        $(".DakshinaKannada-box").removeClass('map-show');
        $(".bg-blr").addClass("bg-blr-active");
        $(".sub-print-area-blr").addClass("bg-blr-active-sub");
        $(".blr-box").show();
    });

    $(".bg-mysuru").mouseenter(function () {
        $(".blr-box").hide();
        $(".bg-blr").removeClass("bg-blr-active");
        $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
        $(".Mysuru-box").addClass('map-show');

    });

    $(".bg-mysuru").mouseleave(function () {
        $(".Mysuru-box").removeClass('map-show');
        $(".bg-blr").addClass("bg-blr-active");
        $(".sub-print-area-blr").addClass("bg-blr-active-sub");
        $(".blr-box").show();
    });

    $(".bg-kalaburagi ").mouseenter(function () {
        $(".blr-box").hide();
        $(".bg-blr").removeClass("bg-blr-active");
        $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
        $(".kalaburagi-box").addClass('map-show');

    });

    $(".bg-kalaburagi ").mouseleave(function () {
        $(".kalaburagi-box").removeClass('map-show');
        $(".bg-blr").addClass("bg-blr-active");
        $(".sub-print-area-blr").addClass("bg-blr-active-sub");
        $(".blr-box").show();
    });
});


$(document).ready(function () {
    if ($(window).width() < 1200) {
        $(".bg-blr").mouseenter(function () {
            $(".blr-box").addClass('map-show')
        });
        $(".bg-blr").mouseleave(function () {
            $(".blr-box").removeClass('map-show')
        });

        $(".bg-davanagere").mouseenter(function () {
            $(".blr-box").hide();
            $(".bg-blr").removeClass("bg-blr-active");
            $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
            $(".Davanagere-box").addClass('map-show');

        });
        $(".bg-davanagere").mouseleave(function () {
            $(".Davanagere-box").removeClass('map-show')
            $(".bg-blr").addClass("bg-blr-active");
            $(".sub-print-area-blr").addClass("bg-blr-active-sub");
            $(".blr-box").hide();


        });
        $(".bg-hosapete").mouseenter(function () {
            $(".blr-box").hide();
            $(".bg-blr").removeClass("bg-blr-active");
            $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
            $(".Ballari-box").addClass('map-show');

        });
        $(".bg-hosapete").mouseleave(function () {
            $(".Ballari-box").removeClass('map-show')
            $(".bg-blr").addClass("bg-blr-active");
            $(".sub-print-area-blr").addClass("bg-blr-active-sub");
            $(".blr-box").hide();
        });

        $(".bg-hubbali").mouseenter(function () {
            $(".blr-box").hide();
            $(".bg-blr").removeClass("bg-blr-active");
            $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
            $(".Dharwad-box").addClass('map-show');

        });
        $(".bg-hubbali").mouseleave(function () {
            $(".Dharwad-box").removeClass('map-show')
            $(".bg-blr").addClass("bg-blr-active");
            $(".sub-print-area-blr").addClass("bg-blr-active-sub");
            $(".blr-box").hide();
        });

        $(".bg-dk").mouseenter(function () {
            $(".blr-box").hide();
            $(".bg-blr").removeClass("bg-blr-active");
            $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
            $(".DakshinaKannada-box").addClass('map-show');

        });
        $(".bg-dk").mouseleave(function () {
            $(".DakshinaKannada-box").removeClass('map-show')
            $(".bg-blr").addClass("bg-blr-active");
            $(".sub-print-area-blr").addClass("bg-blr-active-sub");
            $(".blr-box").hide();
        });

        $(".bg-mysuru").mouseenter(function () {
            $(".blr-box").hide();
            $(".bg-blr").removeClass("bg-blr-active");
            $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
            $(".Mysuru-box").addClass('map-show');

        });
        $(".bg-mysuru").mouseleave(function () {
            $(".Mysuru-box").removeClass('map-show')
            $(".bg-blr").addClass("bg-blr-active");
            $(".sub-print-area-blr").addClass("bg-blr-active-sub");
            $(".blr-box").hide();
        });

        $(".bg-kalaburagi ").mouseenter(function () {
            $(".blr-box").hide();
            $(".bg-blr").removeClass("bg-blr-active");
            $(".sub-print-area-blr").removeClass("bg-blr-active-sub");
            $(".kalaburagi-box").addClass('map-show');

        });
        $(".bg-kalaburagi ").mouseleave(function () {
            $(".kalaburagi-box").removeClass('map-show')
            $(".bg-blr").addClass("bg-blr-active");
            $(".sub-print-area-blr").addClass("bg-blr-active-sub");
            $(".blr-box").hide();
        });
    }
});


//$('.responsive').slick({

//    infinite: false,
//    speed: 300,
//    slidesToShow: 3,


//});




$('.responsive').slick({

    infinite: false,
    speed: 300,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 4000,
            settings: {
                slidesToShow: 3,


            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                variableWidth: true,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,




            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,

            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,


            }
        }


    ]
});


$(document).ready(function () {
    $('.slick-next').click(function () {
        $('.left-slider').removeClass('left-slider');
    });

});


$(document).ready(function () {
    $('.slider').on('afterChange', function () {
        console.log($('.slider').slick('slickCurrentSlide'));
        var currentSlide = $('.slider').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.slick-prev').hide();
            $('.slick-next').show();
            $('.left-slider1').addClass('left-slider');
        }
        else if (currentSlide == 4) {
            $('.slick-next').hide();
            $('.slick-prev').show();

        }

        if (currentSlide > 0 && currentSlide < 4) {
            $('.slick-prev').show();
            $('.slick-next').show();
        }
    });
});

$(document).ready(function () {
    var currentSlide = $('.slider').slick('slickCurrentSlide');
    if (currentSlide == 0) {
        $('.slick-prev').hide();
    }
    else if (currentSlide == 4) {
        $('.slick-next').hide();

    }

});

$(document).ready(function () {
    if ($(window).width() < 1200) {
        $(document).ready(function () {
            $('.slider').on('afterChange', function () {
                console.log($('.slider').slick('slickCurrentSlide'));
                var currentSlide = $('.slider').slick('slickCurrentSlide');
                if (currentSlide == 0) {
                    $('.slick-prev').hide();
                    $('.slick-next').show();
                    $('.left-slider1').addClass('left-slider');
                }
                else if (currentSlide == 6) {
                    $('.slick-next').hide();
                    $('.slick-prev').show();

                }

                if (currentSlide > 0 && currentSlide < 6) {
                    $('.slick-prev').show();
                    $('.slick-next').show();
                }
            });
        });
        $(document).ready(function () {
            var currentSlide = $('.slider').slick('slickCurrentSlide');
            if (currentSlide == 0) {
                $('.slick-prev').hide();
            }
            else if (currentSlide == 6) {
                $('.slick-next').hide();

            }

        });
    }

});




//$(document).ready(function () {
//    $('.tab2').hide();
//    $('.tab-kar').click(function () {
//        $('.tab-other').removeClass('tab-active bot-line').addClass('right-line');
//        $('.tab-kar').addClass('tab-active').removeClass('right-line');
//    $('.tab1').show();
//    $('.tab2').hide();
//});
//});

//$(document).ready(function () {

//    $('.tab-other').click(function () {
//        $('.tab-other').addClass('tab-active bot-line').removeClass('right-line');
//        $('.tab-kar').removeClass('tab-active').addClass('right-line')//.css({'border-top':'none'});
//        $('.tab2').show();
//        $('.tab1').hide();
//    });
//});


function toggleTab(show, hide, removeDiv, addDiv) {
    $('.tab' + show).show();
    $('.tab' + hide).hide();
    $(removeDiv).removeClass('tab-active bot-line').addClass('right-line');
    $(addDiv).addClass('tab-active bot-line').removeClass('right-line');
    console.log(removeDiv);
    var paneId = $($('.tab' + show + ' li')[0]).find('a').attr('href')
    $(paneId).addClass('active');
}


//function RegionOnPincode(val) {
//    if (document.querySelector('input[name="place1"]:checked') == null) {
//        window.alert("You need to choose an option!");
        


//    }

//    else if ($('#pincode').val().trim().length == 0) {
//        $("#error").html("<span style='color:red'>Region does not exist, please enter a valid pincode</span>");


//        if ($('#checkbox21')[0].checked) {
//            $('#pincode').value = "";
//            $('.kar,.mandya,.Inter').hide();
//            $('.ROI').show();
//            console.log('2');
//             }
//    }
//    else {

//        var val = $("#pincode").val();
//        if (!Number.parseInt(val)) {
//            $("#error").html("<span style='color:red'>Region does not exist, please enter a valid pincode</span>");
//        }
//        $('.kar,.mandya,.ROI,.Inter').hide();
//                                 if ((val > 0) && ($('#checkbox20')[0].checked)) {
//            console.log('1');
//            $.ajax({
//                type: 'POST',
//                url: 'ChkVal',
//                dataType: 'json',
//                data: { RegionVal: val },
//                //data: { pincode: val },
//                error: function (e) { console.log(e) },
//                success: function (ResponseVal) {
//                    console.log(ResponseVal);
//                    DivisionArr = ['MANDYA', 'HUBLI', 'MANGALORE', 'DAVANAGERE', ' MYSORE', 'GULBARGA'];
//                    if (ResponseVal.str == null) {

//                        $("#error").html("<span style='color:red'>Region does not exist, please enter a valid pincode</span>");
//                        document.getElementById("pincode").value = "";
//                        console.log(document.getElementById("pincode").value);
//                    }
//                    else {

//                        if (DivisionArr.indexOf(ResponseVal.str.Division) > 0) {
//                            $("#error").html("");
//                            console.log('mndya');
//                            $('.mandya').show(); $('.kar').hide();
//                        }
//                        else {
//                            console.log('kaar');
//                            $("#error").html("");
//                            $('.mandya').hide(); $('.kar').show();
                            

//                        }





//                    }
//                }
//            }
//            );
//        }

                                





//         }
//}


//}




//function RegionOnPincode(val) {
//    var val = $("#pincode").val();
//    if ($('#checkbox21')[0].checked) {
//        $('.ROI').show();
//        $('.Inter').hide();

//        $('.mandya').hide(); $('.kar').hide();
//    }

//    else if ($('#checkbox22')[0].checked) {
//        $('.Inter').show();
//        $('.ROI').hide();
//        $('.mandya').hide(); $('.kar').hide();
//    }


//    else if ($('#checkbox20')[0].checked) {


//        $.ajax({
//            type: 'POST',
//            url: 'ChkVal',
//            dataType: 'json',
//            data: { RegionVal: val },
//            //data: { pincode: val },
//            error: function (e) { console.log(e) },
//            success: function (ResponseVal) {

//                DivisionArr = ['MANDYA', 'HUBLI', 'MANGALORE', 'DAVANAGERE', ' MYSORE', 'GULBARGA'];
//                if (ResponseVal.str == null) {

//                    $("#error").html("<span style='color:red'>Region does not exist, please enter a valid pincode</span>");
//                }
//                else {

//                    if (DivisionArr.indexOf(ResponseVal.str.Division) > 0) { $('.mandya').show(); $('.kar').hide(); }
//                    else {

//                        $('.mandya').hide(); $('.kar').show();
//                    }
//                    $("#region").val(ResponseVal.str.District); $("#error").html('');
//                    $("#Region1").val(ResponseVal.str.District);
//                    $("#pincode1").val($("#pincode").val());

//                    if ($('#checkbox20')[0].checked || $('#checkbox21')[0].checked) {
//                        $("#Country option[value=India]").prop('selected', true);

//                    }
                   

                

//                }
//            }
//        });
//    }
//}

//*************comm on 10_5

function RegionOnPincode(val) {

    if (document.querySelector('input[name="place1"]:checked') == null) {
        window.alert("You need to choose an option!");
    }

    else if ($('#checkbox20')[0].checked) {

        var val = $("#pincode").val().trim();
        if (val.length == 0 || isNaN(val)) {
            $("#error").html("<span style='color:red'>Region does not exist, please enter a valid pincode</span>");
        }
        $('.kar,.mandya,.ROI,.Inter').hide();


        console.log('1');
        $.ajax({
            type: 'POST',
            url: 'ChkVal',
            dataType: 'json',
            data: { RegionVal: val },
            //data: { pincode: val },
            error: function (e) { console.log(e) },
            success: function (ResponseVal) {
                console.log(ResponseVal);
                DivisionArr = ['MANDYA', 'HUBLI', 'MANGALORE', 'DAVANAGERE', ' MYSORE', 'GULBARGA'];
                if (ResponseVal.str == null) {

                    $("#error").html("<span style='color:red'>Region does not exist, please enter a valid pincode</span>");
                }
                else {

                    if (DivisionArr.indexOf(ResponseVal.str.Division) > 0) {
                        $("#error").html("");
                        $('.mandya').show(); $('.kar').hide();
                    }
                    else {
                        $("#error").html("");
                        $('.mandya').hide(); $('.kar').show();
                    }

                }
            }
        }
        );
    }
    else if ($('#checkbox21')[0].checked) {
        $('.kar,.mandya,.Inter').hide();
        $('.ROI').show();
        console.log('2');
    }
    else {
        $('.kar,.mandya,.ROI').hide();
        $('.Inter').show();
        console.log('3');
    }



}



    //*************comm on 10_5

//    if ($('#checkbox20')[0].checked) {
//        var val = $("#pincode").val();
//        $.ajax({
//            type: 'POST',
//            url: 'ChkVal',
//            dataType: 'json',
//            data: { RegionVal: val },
//            //data: { pincode: val },
//            error: function (e) { console.log(e) },
//            success: function (ResponseVal) {

//                DivisionArr = ['MANDYA', 'HUBLI', 'MANGALORE', 'DAVANAGERE', ' MYSORE', 'GULBARGA'];
//                if (ResponseVal.str == null) {

//                    $("#error").html("<span style='color:red'>Region does not exist, please enter a valid pincode</span>");
//                }
//                else {

//                    if (DivisionArr.indexOf(ResponseVal.str.Division) > 0) { $('.mandya').show(); $('.kar').hide(); }
//                    else {

//                        $('.mandya').hide(); $('.kar').show();
//                    }
//                    $("#region").val(ResponseVal.str.District); $("#error").html('');
//                    $("#Region1").val(ResponseVal.str.District);
//                    $("#pincode1").val($("#pincode").val());

//                    if ($('#checkbox20')[0].checked || $('#checkbox21')[0].checked) {
//                        $("#Country option[value=India]").prop('selected', true);

//                    }


//                    else if ($('#checkbox21')[0].checked) {
//                        $('.ROI').show();
//                        $('.Inter').hide();

//                        $('.mandya').hide(); $('.kar').hide();
//                    }



//                    else if ($('#checkbox22')[0].checked) {
//                        $('.Inter').show();
//                        $('.ROI').hide();
//                        $('.mandya').hide(); $('.kar').hide();
//                    }




//                }
//            }
//        });
    
    
    
//}


    function checkamt() {

        var arr = [];
        $('.rate').each(function () {
            if (this.checked) {
                arr.push(this.value);
            }

        });
        var sum = 0;

        for (var i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i]);
        }
        var price = sum;
        if (arr.length == 1) {

            price = sum - sum * .10;
        }

        else if (arr.length == 2) {

            price = sum - sum * .15;
        }
        else if (arr.length >= 3) {

            price = sum - sum * .20;
        }

        window.alert('price11111" ' + price);

        //console.log(price);


    }

    //function displayval(className) {
    //    var arr = [];
    //    $('.' + className).each(function () {
    //        if (this.checked) {
    //            arr.push({ 'Name': this.dataset.name, 'price': this.dataset.price, frequency: this.dataset.frequency });
    //        }

    //    });



    //    var checked_publs_price = 0

    //    for (var i = 0; i < arr.length; i++) {

    //        checked_publs_price += parseInt(arr[i].price);

    //    }
    //    var price = checked_publs_price;

    //    if (arr.length > 2 ) {

    //        var Discount = Number.parseFloat($('.Discount3').val()).toFixed(2);
    //        price = checked_publs_price - checked_publs_price * Discount;
    //        var DiscountPercent = Discount * 100;
    //        console.log(price);
    //        DisplayList(arr, DiscountPercent);
    //    }
    //    else if (arr.length == 2) {
    //        var Discount = Number.parseFloat($('.Discount2' + arr.length).val()).toFixed(2);
    //        price = checked_publs_price - checked_publs_price * Discount;
    //        var DiscountPercent = Discount * 100;
    //        console.log(price);
    //        DisplayList(arr, DiscountPercent);
    //    }

    //    else if (arr.length < 2 ) {
    //        var Discount = Number.parseFloat($('.Discount1' + arr.length).val()).toFixed(2);
    //        price = checked_publs_price - checked_publs_price * Discount;
    //        var DiscountPercent = Discount * 100;
    //        console.log(price);
    //        DisplayList(arr, DiscountPercent);
    //    }
    //    else {
    //        price = checked_publs_price
    //    }

    ////function DisplayList(arr, dis, ifdiscount) 
    // function DisplayList(arr, dis) {
    //     var disp_el = "";
    //     for (var i = 0; i < arr.length; i++) {
    //         disp_el += '<p id="Subscribed_content">' + arr[i].Name + ' :<span class="rupee-inner"></span>' + arr[i].price + '/ ' + arr[i].frequency + '</p>';
    //     }
    //     console.log(ifdiscount === true);

    //     if (ifdiscount === true) {
    //         disp_el += '<p class="pull-left subcrib-off-detail-text">You have got ';
    //         disp_el = disp_el + dis;

    //         //disp_el = disp_el + '%</p>< div class="pull-left" ><img src="../../Content/images/subscription-offer.png" class="img-position img-responsive subcrib-img-align subcrib-detail-img" alt="subscription-offer"> <div class="subscrib-offer-text1"> </div> </div>  <div class="clearfix"></div><input type="button" id="btnMailSubmit" value="Pay" class="subcrib-pay" title="">';
    //         disp_el = disp_el + '% discount</p>';

    //     }
    //     $('.subcrib-details').html(disp_el);
    // }

    //*****************
    function displayval(className, ifDiscount) {

        window.arr = [];
        $('.' + className).each(function () {
            if (this.checked) {
                arr.push({ PublicationName: this.dataset.name, PublicationPrice: this.dataset.price, PublicationFrequency: this.dataset.frequency });

            }

        });

        var checked_publs_price = 0

        for (var i = 0; i < arr.length; i++) {
            console.log("price123:" + arr[i].PublicationPrice);


            checked_publs_price += parseInt(arr[i].PublicationPrice);

        }

        window.price = checked_publs_price;

        if (ifDiscount) {
            if (arr.length > 2) {

                var Discount = Number.parseFloat($('.Discount3').val()).toFixed(2);
                price = checked_publs_price - checked_publs_price * Discount;
                var DiscountPercent = Discount * 100;
                console.log(DiscountPercent);
                DisplayList(arr, DiscountPercent, ifDiscount, price);
            }
            else {
                var Discount = Number.parseFloat($('.Discount' + arr.length).val()).toFixed(2);
                price = checked_publs_price - checked_publs_price * Discount;
                var DiscountPercent = Discount * 100;
                console.log(DiscountPercent);
                DisplayList(arr, DiscountPercent, ifDiscount, price);
            }


        }
        else {
            //var Discount = Number.parseFloat($('.Discount' + arr.length).val()).toFixed(2);
            price = checked_publs_price;
            //var DiscountPercent = Discount * 100;
            console.log(price);
            DisplayList(arr, DiscountPercent, ifDiscount, price);
        }



    }

    //function DisplayList(arr, dis, ifDiscount,price)
    function DisplayList(arr, dis, ifDiscount, price) {
        var disp_el = "";
        for (var i = 0; i < arr.length; i++) {
            disp_el += '<p id="Subscribed_content">' + arr[i].PublicationName + ' :<span class="rupee-inner"></span>' + arr[i].PublicationPrice + '/ ' + arr[i].PublicationFrequency + '</p>';
            //$.ajax({
            //    type: 'POST',
            //    url: 'Update_DB',
            //    dataType: 'json',
            //    data: {Name: arr[i].Name, Price: arr[i].price, Frequency: arr[i].frequency},
            //    error: function (e) { console.log(e) },
            //    success: function (values) { }
            //})
            console.log('Details of checked publns Name==' + arr[i].PublicationName + " price " + arr[i].PublicationPrice + " freq " + arr[i].PublicationFrequency);

        }
        console.log(ifDiscount === true);
        if (ifDiscount === true) {
            disp_el += '<p class="pull-left subcrib-off-detail-text"> You have got &nbsp;</p > ';
            disp_el = disp_el +'<div class="m">'+ dis;

            disp_el = disp_el + '% off<img src="../../Content/images/subscription-offer.png" class="img-position img-responsive subcrib-img-align subcrib-detail-img" alt="subscription-offer"> </div><div class="pull-left subscrib-offer-text"><div class="subscrib-offer-text1"> </div> </div>  Total = ' + price + '<div class="clearfix"></div><input type="button" id="btnMailSubmit" value="Pay" class="subcrib-pay" title="" onclick="Save_Val()"></p>';
            console.log('price=' + price);
        }
        else {
            disp_el = disp_el + 'Total =' + price;
            disp_el += '<input type="button" id="btnMailSubmit" value="Pay" class="subcrib-pay" title="" onclick="Save_Val()" >';
        }


        console.log('price=' + price);

        $('.subcrib-details').html(disp_el);
    }



    function Save_Val() {

        fname = $('#FName').val();
        lname = $('#LName').val();
        addr = $('#Addr').val();
        email = $('#Email').val();
        mobile = $('#Mobile').val();
        PublicationID =
            console.log(window.arr);
        $.ajax({
            type: 'POST',
            url: 'Update_DB',
            dataType: 'json',
            data: { fname: fname, lname: lname, addr: addr, email: email, mobile: mobile, price: window.price, arr: JSON.stringify(window.arr) },
            error: function (e) { console.log(e) },
            success: function (ResponseValues) { }
        });

        console.log('called');

    }

//function phonenumber(inputtxt) {
//    var phoneno = /^\d{10}$/;
//    if ($('#Mobile').val().match(phoneno)) {
//        return true;
//    }
//    else {
//        alert("Not a valid Phone Number");
//        return false;
//    }

//    return true;
//    } 

//function EmailCheck() {
//    console.log('ok');
//    var email = $('#Email').val();

//    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//    if (reg.test(email)) {
//        return true;
//    }
//    else {
//        alert("Not a valid Email ID");
//        return false;
//    }
//}


