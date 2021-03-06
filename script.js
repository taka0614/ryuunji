$.scrollify({
    section : ".box",//1ページスクロールさせたいエリアクラス名
    scrollbars:"false",//スクロールバー表示・非表示設定
    interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
      scrollSpeed: 300, // スクロール時の速度
    
    //以下、ページネーション設定
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";
  
        $("#box1").append(pagination);//はじめのエリアにページネーションを表示
        $(".pagination a").on("click",$.scrollify.move);
      }
  
    });


const targetElements = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", () => {
    for(let i = 0; i < targetElements.length; i++) {
        const getTargetDistance = targetElements[i].getBoundingClientRect().top
        if(window.innerHeight > getTargetDistance) {
          setTimeout(function(){
            targetElements[i].classList.add("move");
          }, 2000);
        }
    }
});

const targetText = document.querySelectorAll(".animation_text");
window.addEventListener("scroll", () => {
    for(let i = 0; i < targetText.length; i++) {
        const getTargetTextDistance = targetText[i].getBoundingClientRect().top
        if(window.innerHeight > getTargetTextDistance) {
          setTimeout(function(){
            targetText[i].classList.add("fadein");
          }, 2000);
        }
    }
});

const showElements = document.querySelectorAll(".animation-screen");
window.addEventListener("scroll", () => {
    for(let i = 0; i < showElements.length; i++) {
        const getElementDistance = showElements[i].getBoundingClientRect().top + showElements[i].clientHeight * .5;
        if(window.innerHeight > getElementDistance)  {
          setTimeout(function(){
            showElements[i].classList.add("show");
          }, 800);
        }
    }
});
    