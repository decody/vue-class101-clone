<template>
	<div>
        <a href="/products" class="imgbox-wrap">
            <div class="imgbox">
                <img
                    :src="require(`@/assets/main/${imgUrl}`)"
                    :alt="imgTxt"
                />
            </div>
        </a>
        <div class="info-box">
            <div class="title">{{title}}</div>
            <div class="class-info">
                <div class="class-ing">
                    <strong>{{classIng}}% 수강완료</strong>
                </div>
                <div class="valid-date">{{validDate}}일 남음</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'ClassThumbBox',
    props: {
        slideData: Object,
    },
	components: {
		
	},
	data() {
		return {
            imgUrl: '',
			imgTxt: '',
            title: '',
            classIng: '',
            validDate: '',
		}
	},
    computed: {
    },
	created() {
        this.imgUrl = this.slideData.imgUrl;
        this.imgTxt = this.slideData.imgTxt;
        this.title = this.slideData.title;
        this.classIng = this.slideData.classIng;
        this.validDate = this.slideData.validDate;
	},
	mounted() {
	},
	methods: {
       
	},
}
</script>

<style lang="scss" scoped>
.imgbox-wrap {
    text-decoration: none;
}
.imgbox {
    position: relative;
    width: 100%;
    height: 211px;
    overflow: hidden;
    border-radius: 1px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;

        &:hover {
            transform: scale(1.1);
        }
    }
}
.info-box {
    padding: 10px 0;
}
.title {
    border-width: 0px;
    color: #101010;
    margin: 0;
    padding: 0;
    font-size: 0.925rem;
    font-weight: 700;
    line-height: 1.125rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.play-btn-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 30%;
        height: 30%;
        fill: #fff;
    }
}
.class-info {
    display: block;
}
.class-ing {
    border-width: 0px;
    margin: 20px 0 0 0;
    padding: 0;

    strong {
        color: rgb(255, 61, 0);
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1rem;
    }
}
.valid-date {
    border-width: 0;
    color: rgb(102, 102, 102);
    margin: 20px 0 0 0;
    padding: 0;
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 0.875rem;  
}
</style>