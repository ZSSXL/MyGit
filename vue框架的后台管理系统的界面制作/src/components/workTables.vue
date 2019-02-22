<template>
	<!-- <h2>表格制作</h2> -->
	<table cellpadding="5" cellspacing="1">
    <caption>
    	<h3>@@2018学生表@@@@@@</h3>
    </caption>
	    <tr>
	        <td>学号</td>
	        <td>姓名</td>
	        <td>专业</td>
	        <td>成绩</td>
	        <td>家庭住址</td>
	    </tr>
	    <tr>
	        <td>201807</td>
	        <td>柱子</td>
	        <td>美术</td>
	        <td>80</td>
	        <td>&nbsp;</td>
	    </tr>
	    <tr>
	        <td>201807</td>
	        <td>牙子</td>
	        <td>音乐</td>
	        <td>80</td>
	        <td>&nbsp;</td>
		</tr>
	    <tr>
	        <td>201807</td>
	        <td>二炮</td>
	        <td>英语</td>
	        <td>80</td>
	        <td>&nbsp;</td>
		</tr>
	    <tr>
	        <td>201807</td>
	        <td>奇犽</td>
	        <td>语文</td>
	        <td>80</td>
	        <td>&nbsp;</td>
	    <tr>
	        <td>201807</td>
	        <td>萨拉</td>
	        <td>数学</td>
	        <td>80</td>
	        <td>&nbsp;</td>
		</tr>
	    <tr>
	        <td>201807</td>
	        <td>烟牙</td>
	        <td>化学</td>
	        <td>80</td>
	        <td>&nbsp;</td>
	    <tr>
	        <td>201807</td>
	        <td>邓琳</td>
	        <td>物理</td>
	        <td>80</td>
	        <td>&nbsp;</td>
		</tr>
	    <tr>
	        <td>201807</td>
	        <td>豆子</td>
	        <td>体操</td>
	        <td>80</td>
	        <td>&nbsp;</td>
	    </tr>
	    <tr>
	        <td colspan ="100">总计：8人，平均分:80分</td>
	    </tr>
	</table>
</template>

<script>
	export default{
		name:'work-tables'
	};
</script>

<style scoped>
	table{
		position:absolute; 
		left: 20%;
		top: 15%;
		border: 3px;
		width: 500px;
		background: #ccc;
		align-content: center;
	}

	tr{
		text-align: center;
		background: aqua;
		height: 50;
	}

	tr :hover{
		background: yellow;
	}

</style>

