<template>
	<div>
        <a href="/products" class="imgbox-wrap">
            <div class="imgbox">
                <img
                    :src="require(`@/assets/main/${imgUrl}`)"
                    :alt="imgTxt"
                    :style="imgHeight"
                />
            </div>
            <div class="infobox">
                <p class="tags">{{tags}}</p>
                <div class="title">{{title}}</div>
                <span class="additional">
                    <span class="favors">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            fill="none" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                fill-rule="evenodd" 
                                d="M1.5 8.824C1.5 5.607 3.962 3 7 3c2.5 0 4 1.5 5 3 1-1.5 2.5-3 5-3 3.038 0 5.5 2.607 5.5 5.824C22.5 14.827 16.684 18.52 12 21 7.316 18.52 1.5 14.827 1.5 8.824z" 
                                fill="#d7d7d7"
                            ></path>
                        </svg>
                        {{favors}}
                    </span>
                    <span class="likes">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            fill="none" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                fill-rule="evenodd" 
                                d="M2 10.68c0-.691.503-1.251 1.135-1.251h2.273V22H3.135C2.508 22 2 21.427 2 20.749V10.68zm11.361-2.508h6.366c1.255 0 2.272 1.126 2.272 2.514 0 .151-.012.301-.037.45l-1.616 9.832C20.25 21.566 19.779 22 19.23 22H7.681V9.429L11.089 0c1.704 0 2.84 1.257 2.84 3.143 0 1.257-.189 2.933-.568 5.029z" 
                                fill="#d7d7d7"
                            ></path>
                        </svg>
                        {{likes}}
                    </span>
                </span>
                <div v-if="isShowPrice" class="price-info">
                    <span class="discount">{{discount}}%</span>
                    <strong class="month-price">월 {{monthPrice}} 원</strong>
                    <em class="month-unit">({{payUnit}}개월)</em>
                </div>
                <div v-else class="updated-info">
                    미션 답변 작성
                    <em>{{updatedTime}}</em>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
	name: 'ThumbBox',
    props: {
        thumbData: Object,
        isShowPrice: Boolean,
        imgType: String
    },
	components: {
		
	},
	data() {
		return {
            imgUrl: '',
			imgTxt: '',
            tags: '',
            title: '',
            favors: '',
            likes: '',
            discount: '',
            monthPrice: '',
            payUnit: '',
            updatedTime: '',
		}
	},
    computed: {
        imgHeight() {
            return {height: this.imgType === 'long' ? '368px' : '211px'};
        },
    },
	created() {
        this.imgUrl = this.thumbData.imgUrl;
        this.imgTxt = this.thumbData.imgTxt;
        this.title = this.thumbData.title;
        this.favors = this.thumbData.favors;
        this.likes = this.thumbData.likes;
        this.discount = this.thumbData.discount;
        this.monthPrice = this.thumbData.monthPrice;
        this.payUnit = this.thumbData.payUnit;
        this.updatedTime = this.thumbData.updatedTime;
	},
	mounted() {
        this.getTags();
	},
	methods: {
        getTags() {
            this.tags = this.thumbData.tags.join(", ");
        },
	},
}
</script>

<style lang="scss" scoped>
.imgbox-wrap {
    text-decoration: none;
}
.imgbox {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 4px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        opacity: 1;
        transform: scale(1);
        transition: transform 0.3s ease 0s, opacity 0.1s linear 0s !important;

        &:hover {
            transform: scale(1.1);
        }
    }
}
.infobox {
    padding: 10px 0;
}
.tags {
    display: flex;
    width: 100%;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex-direction: row;
    color: #000;
    margin: 0;
    padding: 0;
    font-size: 0.675em;
    font-weight: 700;
    line-height: 0.875rem;
}
.title {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    color: rgb(26, 26, 26);
    height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 4px 0px 8px;
}
.additional {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.favors {
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
    margin: 0px 8px 0px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(162, 162, 162);
}
.likes {
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
    margin: 0px 8px 0px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(162, 162, 162);
}
.updated-info {
    padding: 14px 0 0;
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
    margin: 0px;
    color: rgb(26, 26, 26);
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    em {
        padding-left: 4px;
        color: rgb(243, 33, 59);
        font-style: normal;
    }
}
.price-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
}
.discount {
    border-width: 0;
    color: #FD3049;
    margin: 0;
    padding: 0;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.125rem;
}
.month-price {
    border-width: 0;
    color: #1A1A1A;
    margin: 0;
    padding: 0 8px 0 4px;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.125rem;
}
.month-unit {
    border-width: 0;
    color: #A2A2A2;
    margin: 0;
    padding: 0;
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 0.875rem;
}
</style>