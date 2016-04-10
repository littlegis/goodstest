$(function() {
	$(".errorClass").each(function() {

		showError($(this));
	});
	$("#submitBtn").hover(function() {
		$("#submitBtn").attr("src", "/goodstest/images/regist2.jpg");
	}, function() {
		$("#submitBtn").attr("src", "/goodstest/images/regist1.jpg");
	});
	$(".inputClass").focus(function() {
		var textID = $(this).attr("id") + "Error";
		$("#" + textID).text("");
		showError($("#" + textID));
	});
	$(".inputClass").blur(
			function() {
				debugger;
				var inputID = $(this).attr("id");

				var funcName = "Validate"
						+ inputID.substring(0, 1).toUpperCase()
						+ inputID.substring(1) + "()";

				eval(funcName);
			});
	$("#registform").submit(function() {
		var bool = true;
	 
		if (!ValidateLoginname()) {
			bool = false;
		}
		if (!ValidateLoginpassword()) {
			bool = false;
		}
		if (!ValidateReloginpass()) {
			bool = false;
		}
		if (ValidateEmail())
			bool = false;
		if (ValidateVerifyCode())
			bool = false;
		return bool;
	});
});

/**
 * 登录名校验方法
 */
function ValidateLoginname() {
	/**
	 * 非空校验
	 */
	debugger;
	var id = "loginname";
	var value = $("#" + id).val();

	if (!value) {
		/**
		 * 获取对应的label显示对应的Label
		 */
		$("#" + id + "Error").text("用户名不能为空");
		showError($("#" + id + "Error"));
	} else if (value.length < 3 || value.length > 8) {
		$("#" + id + "Error").text("用户名长度必须大于3位小于8位!");
		showError($("#" + id + "Error"));
	}
}
/**
 * 登录密码验证方法
 */
function ValidateLoginpassword() {
	var id = "loginpassword";
	var value = $("#" + id).val();

	if (!value) {
		/**
		 * 获取对应的label显示对应的Label
		 */
		$("#" + id + "Error").text("密码不能为空");
		showError($("#" + id + "Error"));
	} else if (value.length < 3 || value.length > 8) {
		$("#" + id + "Error").text("密码长度必须大于3位小于8位!");
		showError($("#" + id + "Error"));
	}
}
/**
 * 重复密码验证方法
 */
function ValidateReloginpass() {
	var id = "reloginpass";
	var value = $("#" + id).val();

	if (!value) {
		/**
		 * 获取对应的label显示对应的Label
		 */
		$("#" + id + "Error").text("密码不能为空");
		showError($("#" + id + "Error"));
	} else if (value != $("#loginpassword").val()) {
		$("#" + id + "Error").text("密码不一致！");
		showError($("#" + id + "Error"));
	}
}
/**
 * 邮箱验证
 */
function ValidateEmail() {
	var id = "email";
	var value = $("#" + id).val();

	if (!value) {
		/**
		 * 获取对应的label显示对应的Label
		 */
		$("#" + id + "Error").text("邮箱不能为空");
		showError($("#" + id + "Error"));
	} else if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
			.test(value)) {
		$("#" + id + "Error").text("邮箱格式不对!");
		showError($("#" + id + "Error"));
	}
}
/**
 * 验证码校验
 */
function ValidateVerifyCode() {
	var id = "verifyCode";
	var value = $("#" + id).val();

	if (!value) {
		/**
		 * 获取对应的label显示对应的Label
		 */
		$("#" + id + "Error").text("验证码不能为空！");
		showError($("#" + id + "Error"));
	} else if (value.length != 4) {
		$("#" + id + "Error").text("验证码必须为四位!");
		showError($("#" + id + "Error"));
	}
}
/**
 * 是否显示有文本的控件
 */

function showError(ele) {
	var text = ele.text();
	if (!text) {
		ele.css("display", "none");

	} else {
		ele.css("display", "");
	}
}

/**
 * 换一张图片
 */
function _hyz() {
	$("#imgVerifyCode").attr("src",
			"/goodstest/VerifyCodeServlet?a=" + new Date().getTime());
}