package cn.geoway.goods.user.domain;
/**
 * 
 * @author dpz
 *
 */
/*
 * 属性哪里来
 * 1.T_USER表因为我们需要把数据库中的t_user表查询出的数据封装到对象中
 * 2.该模块所有表单:需要把表单中的数据需要对应所有的表单
 */
public class User {
    private String uid;//主键
    private String loginname;//登录名
	private String loginpass;//登录密码
	private String email;//邮箱
	private int status ;//状态，true表示已经激活，或者未激活
	private String activationCode;//激活码，唯一值
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getLoginname() {
		return loginname;
	}
	public void setLoginname(String loginname) {
		this.loginname = loginname;
	}
	public String getLoginpass() {
		return loginpass;
	}
	public void setLoginpass(String loginpass) {
		this.loginpass = loginpass;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getActivationCode() {
		return activationCode;
	}
	public void setActivationCode(String activationCode) {
		this.activationCode = activationCode;
	}
	
}