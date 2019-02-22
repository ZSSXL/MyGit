<template>
	<div class="asideBar">
		<ul>
			<li>
				<router-link to="/" exact>
					表格示例
				</router-link>
			</li>
			<li>
				<router-link to="/charts" exact>
					图表示例
				</router-link>
			</li>
			<li>
				<router-link to="/forms" exact>
					表单示例
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'work-asides'
	};
</script>

<style scoped>
	.asideBar{
		position: absolute;
		left: 5px;
		top: 75px;
		bottom: 10px;
		width: 100px;
		background: #ccc;
		border-radius: 8px;
	}
	ul{
		padding-left: 0;
	}

	ul li{
		list-style-type: none;
		width: 100%;
		font-size: 18px;
		padding:10px 0 10px 0;
		text-align: center;
		color: white;
	}

	ul li:hover{
		background: lightgreen;
		border-radius: 5px;
		color: red;
	}

	a{
		color:#fff;
		text-decoration: none;
		border-radius: 5px;
		text-align: center;
	}
	
</style>

