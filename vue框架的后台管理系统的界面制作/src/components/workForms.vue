<template>
	<div class="loading">
	   <form action="#" method="get" autocomplete="off">
		   <h2>work-forms</h2>
			<p>
				<span>用户名登记：</span>
				<input type="text" name="username" value="myemail@163.com" disable readonly />	(不能修改，只能查看)
			</p>
		  	<p>
		  		<span>真实姓名：</span>
		  		<input type="text" name="real_name" patern="[\u4e00-\u9fa5]{0,}$" placeholder="例如：王明" required autofocus/>  (必须填写，只能输入汉字)
		  	</p>
		  	<p>
		  		<span>真实年龄：</span>
		  		<input type="number" name="real_age" value="24" min="15" max="120" required/>	(必须填写)
		  	</p>
		  	<p>
		  		<span>出生日期：</span>
		  		<input type="date" name="birthday" value="190-10-1" required/>	(必须填写)
		  	</p>
		  	<p>
		  		<span>电子邮箱：</span>
		  		<input type="email" name="myemail" value="123456@163.com" required multiple/>	(必须填写)
		  	</p>
		  	<p>
		  		<span>身份证号：</span>
		  		<input type="text" name="card" required partern="^\d{8,18}|[0-9x]{8,18}|[0-9x]{8,18}?$"/>		(必须填写)
		  	</p>
		  	<p>
		  		<span>手机号码：</span>
		  		<input type="tel" name="telphone" partern="^\d{11}$" required/>	(必须填写)
		  	</p>
		  	<p>
		  		<span>个人主页：</span>
		  		<input type="url" name="myurl" list="urllist" placeholder="http://www.itcast.cn" partern="^http://([\w-]+\.)+(/[w-./?%&=]*)?$"/>		(请选择网址)
			  	<datalist id="urllist">
			  		<option>http://www.itcase.cn</option>
			  		<option>http://www.boxuegu.com</option>
			  		<option>http://www.w3school.com.cn</option>
			  	</datalist>	
		  	</p>
		  	<p class="lucky">
		  		<span>幸运颜色：</span>
		  		<input type="color" name="lovecolor" value="#fed000"/>(请选择你喜欢的颜色)
		  	</p>
		  	<div class="btn">
		  		<input type="submit" value="提交"  onclick="fun()"/>
		  		<input type="reset" value="重置"/>	
		  	</div>
	   </form> 	
	</div>
</template>

<script>
	export default{
		name:'work-forms'
	};
</script>

<style scoped>
	.loading{
		position: absolute;
		left:25%;
		top:10%;
	}
	form{
		margin:50px auto;
		position:fixed;
		left:20%;
	}
	h2{
		padding-left:165px;
		margin:16px 0;
		text-shadow:8px 8px 9px #3d3b3b; 
		
	}
	p{
		margin-top:20px;
		text-shadow:8px 8px 9px #3d3b3b; 
	}
	p span{
		width:150px;
		display:inline-block;
		text-align:right;
		padding-right:1px;
	}
	p input{
		width:200px;
		height:18px;
		border:1px solid #38a1bf;
		padding:2px;
		box-shadow: 8px 11px 9px #3d3b3b;
	}
	.lucky input{
		width:100px;
		heigth:30;
	}
	.btn input{
		width:100px;
		heigth:50px;
		background:#93b518;
		margin-top:20px;
		margin-left:75px;
		border-radius:3px;
		font-size:18px;
		font-family:"微软雅黑";
		color:#fff;
		box-shadow: 8px 11px 9px #3d3b3b;
	}
	.btn input:hover{
			top:-5px;
			box-shadow:0 0 15px #AAA;
	}
</style>

