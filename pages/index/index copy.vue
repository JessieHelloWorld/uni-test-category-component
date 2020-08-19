<template>
	<view class="container">
		<!-- <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
		<view :style="styleObj"></view>
		<category-list :height="400" :defaultActive="defaultActive" :offsetTop="offsetTop" :categoryList="categoryList" @categoryMainClick="categoryMainClick"
		 @categorySubClick="categorySubClick"></category-list>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.renderCategory()
		},
		data() {
			return {
				defaultActive: 2,
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				categoryList: [],
				styleObj: {
					height: '200px',
					background: '#E0E0E0'
				},
				offsetTop: 200
			}

		},

		methods: {
			categoryMainClick() {},
			categorySubClick() {},
			renderCategory() {
				for (var i = 0; i < 20; i++) {
					var subList = [];
					for (var j = 0; j < 30; j++) {
						subList.push({
							"name": "分类" + i + ":商品" + j,
							"logo": "http://www.nmgzjj.cn/uploads/allimg/100613/co100613132H1-4.gif"
						})
					}
					this.categoryList.push({
						"name": "分类" + i,
						"subCategoryList": subList
					})
				}
			}
		}
	}
</script>

<style>
	.container {
		/* padding: 20px; */
		font-size: 14px;
		line-height: 24px;
	}
</style>
