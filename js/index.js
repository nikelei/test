$(function () {
	$("#search_button").button({
		// disabled : true,
		icons : {
			primary : "	ui-icon-search",

		},
		// text:false,
	});

	$("#reg").dialog({
			title : "会员注册",
			buttons : {
				"提交":function () {
					alert("正在ajax提交中...");
				},
				"取消":function () {
					$(this).dialog('close');
				}
			},
			// position:
			width : 300,
			height : 350,
			minWidth : 200,
			minHeight : 200,
			maxWidth : 550,
			maxHeight : 550,

			show : "slide",
			hide : "slide",
			autoOpen : true,
			draggable : true,
			resizeable : true,
			modal : true,

			// focus : function (e,ui) {
			// 	alert("sdf");
			// }
	});
	$("#reg input[type=radio]").button();
	// $("#reg").buttonset();
	$("#date").datepicker();


	


	// $("#reg input[title]").hover(function () {
		$("#reg input[title]").tooltip({
			// disabled : true,
			// content : "改变title",
			// items : 'input',   //过滤
			// tooltipClass : 'a',
			show : false,
			hide : false,
			// track : true,//跟随
			position : {
				my : 'left top',
				at : 'raght center'
			},
			// open : 
		});

		var host = ['aa','zoulei','bbb','aaa','admin','www','www.zoulei.space'];
		$("#user").autocomplete({
			source : host,
			// disabled : true,//禁用
			delay : 0,
			autoFocus : true,
			// position : {
			// 	my : ''
			// 	at : ''
			// 	　　　　　
			// }
		})
	// });
		$("#email").autocomplete({
			delay : 0,
			autoFocus : true,
			source : function (request,response) {
				//获取用户输入的内容
				// alert(request.term);
				// 绑定数据源
				// response(host);

				var hosts = ['qq.com','126.com','163.com','gmail.com','sina.com.cn'],
					term = request.term,
					name = term,
					host = '',//邮箱的域名
					ix = term.indexOf("@"),//@的位置
					result = [];//最终呈现的邮箱列表
					// alert(name);


				result.push(term);
					//当有@的时候，重新分配用户名和域名
				if (ix > -1) {
					name = term.slice(0,ix);
					host = term.slice(ix+1);
				}

				if (name) {
						/*
						如果用户已经输入后面的域名
						那么就找到相关的域名提示，
						比如zoulei@1，就提示zoulei@163.com和zoulei@126.com
						如果用户还没有输入@后面的域名，就提示所有域名
						*/
					var findedHosts =(host ? 
									findedHosts = $.grep(hosts,function (value,index) {
									return value.indexOf(host) > -1;}) : 
									findedHosts = hosts),

						findedResult = $.map(findedHosts,function (value,index) {
								return name + '@' + value;
						});

						result = result.concat(findedResult);
				} 

				response(findedResult);
			},
		})

	$("#reg_a").click(function () {
		$("#reg").dialog('open');
	})
})