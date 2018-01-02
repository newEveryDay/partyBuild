//做一个公共弹层，
/*$(".sf-dilog").hide();
function selfAlert(element,close_bt){
	var html=""
		html='<div class="sf-dilog">'
		+'<div class="sf-dilog-container">'
			+'<div class="sf-dilog-moddle">'
				+'<div class="login-mian">'
					+'<div class="loign-mian">'
						+'<div class="closed">x</div>'
						+'<div class="lmr-inner">'
							+'<h3>用户登录</h3>'
							+'<input type="text" placeholder="请输入用户名">'
							+'<input type="password" placeholder="请输入">'
							+'<div class="password">'
								+'<div class="remind-pass">'
									+'<input type="checkbox"><lable>记住密码？</lable>'
								+'</div>'
								+'<span>忘记密码？</span>'
							+'</div>'
							+'<a href="">登录</a>'
						+'</div>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>'
	+'</div>'	
	$("."+element).click(function(){
			$("body").append(html);
	});
	$("."+close_bt).click(function(){
			$(".sf-dilog").remove()
	});
}
selfAlert("login","closed")*/

$(".sf-dilog").hide();

//完成版
/*function answer(){
			$(".hotdiscuss .content .answer").click(function(){
				//点击每一个回复按钮，其他的回复框隐藏，当前的回复框添加
				//如果是点击的是
			
				var html='<div class="answer-wapper clearfix">'
						 		+'<div class="photo">'
						 		+'	<img src="images/male_180.png" alt="">'
						 		+'</div>'
								+'<div class="editor">'
								+'	<textarea name="" id="" cols="30" rows="6"></textarea>'
								+'</div>'
								+'<div class="action">'
								+'	<a href="javascript:void(0)" class="login">登录</a>'
								+'	<a href="" class="publish">发布</a>'
								+'</div>'
					+'</div>'
				if($(this).parents(".item").children(".answer-wapper").length<1){
					$(".hotdiscuss .content .item .answer-wapper").remove();
					$(this).parent().parent().parent().parent().append(html)
				}else{
					$(".hotdiscuss .content .item .answer-wapper").remove();
				}

				selfAlert();
			
				
			})
		}
	 
	

answer()*/

$(function(){
	function selfAlert(){
	var html='<div class="sf-dilog">'
				   +'<div class="sf-dilog-moddle"></div>'
					+'<div class="login-mian">'
						+'<div class="loign-mian">'
						+'<div class="closed">x</div>'
							+'<div class="lmr-inner">'
								+'<h3>用户登录</h3>'
								+'<input type="text" placeholder="请输入用户名">'
								+'<input type="password" placeholder="请输入">'
								+'<a href="">登录</a>'
							+'</div>'
						+'</div>'
					+'</div>'
			+'/div>';

	$(".login").click(function(){
					$(document.body).append(html)
					
	})	
	$(".closed").click(function(){
		$(".sf-dilog").remove()
	})	
}
selfAlert()
})

