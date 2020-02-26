// $('.one').on('mouseover',function(){
//     $(this).css('opacity','0.4');
// })
//  .on('mouseleave',function(){
//     $(this).css('opacity','1');
// });
// $('.two').on('mouseover',function(){
//     $(this).css('opacity','0.4');
//     $(this).css()
// })
// .on('mouseleave',function(){
//    $(this).css('opacity','1');
// });


(function() {
    const images = document.querySelectorAll('img[data-animation="gif"]');
    [].forEach.call(images,function(image) {
        image.addEventListener('click', toggleImage);
        image.insertAdjacentHTML('afterend', '<div class="GIFstopped"><span>&#9658;</span></div>');
    });

    function toggleImage() {
        var myImage = this;
        var ext2 = myImage.getAttribute('data-animation');
        var ext1 = myImage.src.substr((~-myImage.src.lastIndexOf(".") >>> 0) + 2);
        if (ext2 == "gif") {
            toggleItem(myImage, ext1, ext2, 'GIFplaying', '');
        } else {
            toggleItem(myImage, ext1, ext2, 'GIFstopped', '<span>&#9658;</span>');
        }
    }

    function toggleItem(myImage, ext1, ext2, className, text) {
        var myText = myImage.nextElementSibling;
        myImage.src = myImage.src.replace('.'+ext1, '.'+ext2);
        myImage.setAttribute('data-animation', ext1);
        myImage.className= className + '_img';
        myText.className = className;
        myText.innerHTML = text;
    }
})();
//スクロール動作⬇️
$(window).on('load scroll', function(){

    //animatedのclassを持った要素をセレクタに指定
    var elem = $('.animated');
  
    elem.each(function () {
  
      //data属性からアニメーション名を取得
      var isAnimate = $(this).data('animate');
      //animated要素に位置を取得
      var elemOffset = $(this).offset().top;
      //現在のスクロールポジションを取得
      var scrollPos = $(window).scrollTop();
      //ウィンドウの高さを取得
      var wh = $(window).height();
  
      //animated要素がウィンドウ内の中央位置にきたら処理
      if(scrollPos > elemOffset - wh + (wh / 2)){
        $(this).addClass(isAnimate);
      }
    });
  
  });

  $('.info')
  .on('mouseover',function(){
    $(this).css('opacity','0.3');
  })
  .on('mouseout',function(){
      $(this).css('opacity','1');
  });
