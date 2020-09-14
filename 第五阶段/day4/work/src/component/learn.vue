<template>
    <div>
        <Header></Header>
        <div>
            <div class="card-box">
                <div v-for="(item, index) in list" :key="'l'+index" class="item-card">
                    <Card :item="item"></Card>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./header"
import Footer from "./footer"
import Card from "./card"
    export default {
        name: 'learn',
        data () {
            return {
                list: [
                    { cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_MACBOOK.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
                    { cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_markdown.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
                    { cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_terminal.jpg', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
                    { cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/online/frontcover/PRE_code.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
                ]
            }
        },
        components: {
            Header, Footer, Card
        }
    }
</script>

<style>
.card-box{
    width: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
    padding: 100px 0;
}
.item-card {
    width: 450px;
}
</style>