$(document).ready(function(){
    //lang 부분
    var num = 0
    $('.lang > a').click(function(){
        $('.lang ul').toggle()
        if(num == 0){
           $('.lang i').removeClass().addClass('fas fa-caret-up')
            num = 1
    }else{
        $('.lang i').removeClass().addClass('fas fa-caret-down')
        num = 0
    }
    })
    //subNav 오픈 부분
    $('.mainNav').hover(function(){
        $('.subNav').stop().slideToggle()
        $('.slideBg').stop().slideToggle()
    })
    //bestMenu tabBtn, brand story부분
    $('.tabBtn li').click(function(){
        $(this).children().addClass('on')
        $(this).siblings().children().removeClass()
        var li = $(this).index()
        //alert(li)
        $('.tabCon > div').hide()
        $('.tabCon > div').eq(li).show()
    })
    //teaStory slide 될때 opacity 부분
    $(window).scroll(function(){
        var c1 = $('.con1').offset().top - 700
        var c2 = $('.con2').offset().top - 700
        var c3 = $('.con3').offset().top - 700
        var c4 = $('.con4').offset().top - 700
		var scr = $(window).scrollTop()
        
        if(scr > c1){
            $('.con1').animate({
                opacity: 1
            }, 1000)
            $('.line1').animate({
                opacity: 1
            }, 1500)
        }
        if(scr > c2){
            $('.con2').animate({
                opacity: 1
            }, 1000)
            $('.line2').animate({
                opacity: 1
            }, 1500)
        }
        if(scr > c3){
            $('.con3').animate({
                opacity: 1
            }, 1000)
            $('.line3').animate({
                opacity: 1
            }, 1500)
        }
        if(scr > c4){
            $('.con4').animate({
                opacity: 1
            }, 1000)
        }
    })
	//teaBg slide 될때 opacity 부분
	$(window).scroll(function(){
		var t1 = $('.tea1').offset().top
        var t2 = $('.tea2').offset().top
        var t3 = $('.tea3').offset().top
        var t4 = $('.tea4').offset().top
        var scr = $(window).scrollTop()
        console.log(t1,	scr)
		
		if(scr > t1){
            $('.tea1 dl').animate({
                opacity: 1
            }, 1000)
        }
        if(scr > t2){
            $('.tea2 dl').animate({
                opacity: 1
            }, 1000)
        }
        if(scr > t3){
            $('.tea3 dl').animate({
                opacity: 1
            }, 1000)
        }
        if(scr > t4){
            $('.tea4 dl').animate({
                opacity: 1
            }, 1000)
        }
	})
    //fixed mouse될때 열리는 부분
    $('.fixed').mouseenter(function(){
        $('.fixed').stop().animate({
            right: '0px'
        }, 700)
		$('.fixed i').stop().animate({
			opacity: 0
		})
    })
    $('.fixed').mouseleave(function(){
        $('.fixed').stop().animate({
            right: '-670px'
        }, 700)
		$('.fixed i').stop().animate({
			opacity: 1
		})
    })
	//findOfTea 맞춤 차 시작부분
	var num = 0
	$('.findBg ul li').click(function(){
		var li = $(this).index()
		//alert(li)
		if(li < 8){
			$('.findBg ul li a').removeClass('on').eq(li).addClass('on')
		}
        $('.fmt').show()
        $('.fmt dl').hide().eq(li).show()
		
	})
	//맞춤차 open hide 부분 
    $('.fmtClose i').click(function(){
        $('.fmt').hide()
        $('.fmt dl').eq(li).hide()
        $('.findBg ul li a').removeClass('on')
    })
})