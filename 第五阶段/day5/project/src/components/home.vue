<template>
    <div>
        <global-header v-if="isShow"></global-header>
        <div>
            <div @click="closeHeader" class="home-main" id="idHome">
                <p>关闭header{{ time11 | formatTime }}</p>
            </div>
            <br>
            <div class="home-main" ref="home">
                <p>{{ time11 | formatTime }}</p>
            </div>
            <br>
            <div class="home-main">
                <p>欢迎加入半圆 {{ time | globalFormatTime }}</p>
                <p>{{ time | formatTime }}----------{{ time | formatDddd }}</p>
                <button @click="clickFun">ref方式</button>
                <button @click="clickFunId">id方式</button>
            </div>

            <div>
                <img v-oss-src="'/home/pic_yingjian_support.png'" alt="">
                <img v-oss-src="'/training/pic_banner_zhiqian.png'" alt="">
            </div>
        </div>
        <input ref="input" type="text" value="我是input">
        <button @click="getInputValue">通过ref获取input的值</button>
        <Footer ref="footerRef"></Footer>
        <Footer id="footerId"></Footer>
    </div>
</template>

<script>
import Footer from "./footer"
import Moment from "moment"
Moment.locale('zh-cn'); 
// let tt = new Date().getTime();
export default {
    name: 'home',
    data () {
        let tt = new Date().getTime();
        return {
            time: new Date().getTime(),
            time11: tt,
            isShow: true,
            title: 'home页面的title'
        }
    },
    beforeCreate() {
        console.log("beforeCreate", this.title);
    },
    created() {
        console.log("created", this.title);
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        this.$nextTick(() => {
            console.log("mounted2", this.$refs.input.value);
        })
        console.log("mounted1", this.$refs.input.value);
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("beforeDestroy",  this.$refs.input.value);
        setTimeout(()=>{
            console.log('------', this.$refs.input.value)
        }, 3000)
    },
    destroyed() {
        console.log("destroyed",  this.$refs.input.value);
        setTimeout(()=>{
            console.log("========", this.$refs.input.value);
        }, 3000)
    },


    computed: {
        
    },
    components:{
        Footer
    },
    methods: {
        clickFun () {
            let divEle = this.$refs.footerRef;
            divEle.footerConsole()
            console.log('divEle-data', divEle.footerNmae)
            console.log('divEle', divEle)
        },
        clickFunId () {
            let divEle = document.getElementById("footerId")
            console.log('divEle-id', divEle)
        },
        getInputValue () {
            console.log(this.$refs.input.value)
        },
        closeHeader () {
            this.isShow = !this.isShow;
        }
    },
    filters: {
        formatTime (value) {
            let time = Moment(value).format('YYYY-MM-DD hh:mm:ss')
            return time
        },
        formatDddd (value) {
            let dddd = Moment(value).format('dddd')
            return dddd
        },

    }
}
</script>

<style>
.home-main{
    width: 100%;
    padding: 60px 0;
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home-main p{
    height: 45px;
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    line-height: 35px;
    margin-bottom: 40px;

}

.home-main button{
    width: 280px;
    height: 55px;
    background-color: #fff;
    border-radius: 28px;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    text-align: center;
    line-height: 55px;
    cursor: pointer;
    border: none;
    outline: none;
}
</style>