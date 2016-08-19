 
 // 医院动态切换

 $(function(){
    $("#right-1 .rtitle").find("span").each(function(index) {
      $(this).mouseover(function() {
         $(this).addClass('on').siblings().removeClass('on');
         $(".ChangText .doChange").hide().eq(index).show();
      });
    });
  }); 

 // 戴礼  做切换 罗兰珍

 $(function(){
    $("#dl").find("span").each(function(index) {
      $(this).mouseover(function() {
         $(this).addClass('on').siblings().removeClass('on');
         $(".dlDoChange").hide().eq(index).show();
      });
    });
  }); 


// 规范化技术
$(function(){
  $(".gfhjs_list").find("li").each(function(index){
    $(this).mouseover(function(){
      $(this).addClass('gfhjs_checked').siblings().removeClass('gfhjs_checked');
      $(".fifth").hide().eq(index).show();
    });
  });
});


// 查看更多案例
$(function(){
  $(".kfal").find(".add_al").each(function(index){
    $(this).click(function(){
      $(".al").show();
      $(".kfal").css("height","1052px");
    });
  });
});