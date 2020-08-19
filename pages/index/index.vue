<template>
	<view class="container">
		<!-- 例子：带banner的时候的设置 -->
		<view :style="[styleObj]"></view>
		<category-list :height="500" :offsetTop="offsetTop" :defaultActive="defaultActive"  :categoryList="categoryList" @categoryMainClick="categoryMainClick"
		 @categorySubClick="categorySubClick"></category-list>
		 
		 <!-- 例子：组件占领整个页面的设置 -->
		 <!-- <category-list :defaultActive="defaultActive" :categoryList="categoryList" @categoryMainClick="categoryMainClick"
		  @categorySubClick="categorySubClick"></category-list> -->
		 
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

<style lang="scss">
	.container {
		/* padding: 20px; */
		font-size: 14px;
		line-height: 24px;
	}
</style>
