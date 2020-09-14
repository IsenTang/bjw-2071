
<template>
    <div class="container">
        <div class="warpper">
            <div class="top-input">
                <div class="input-model">
                    <input type="text" v-model="name" class="input1" placeholder="姓名">
                    <input type="text" v-model="phone" class="input2" placeholder="手机号">
                    <span class="sex-box">
                        <span @click="changeSex('男')" class="span1" :style="{border: sex=='男'? 'solid 2px #fff':'none'}"></span>
                        <span @click="changeSex('女')" class="span2" :style="{border: sex=='女'? 'solid 2px #fff':'none'}"></span>
                    </span>
                </div>
                <button @click="add">添加</button>
            </div>
            <div>
                <div class="all-count">45 位练习人</div>
            </div>
            <div>
                <div v-for="(item, index) in list" :key="'pro'+index">
                    <item-pro :item="item" :index="index" @remove="fatherRemove"></item-pro>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import itemPro from "./itemPer"
export default {
    name: 'work',
    data () {
        return {
            list: [],
            name: '',
            phone: '',
            sex: '男'
        }
    },
    components: { itemPro },
    methods: {
        /** 添加联系人 */
        add () {
            if(!(/^1[3456789]\d{9}$/.test(this.phone))){ 
                alert("手机号码有误，请重填");
            } else if (!this.name){
                alert("姓名不能为空");
            } else {
                this.list.push({
                    perName: this.name,
                    perPhone: this.phone,
                    perSex: this.sex,
                    createTime: new Date().getTime()
                })
            }
            console.log('list', this.list);
        },
        /** 切换性别 */
        changeSex(sex) {
            this.sex = sex;
        },
        /** 删除联系人 */
        fatherRemove (data) {
            console.log('data', data)
            this.list.splice(data.index, 1);
        }

    },
}
</script>

<style>
    * {
        box-sizing: border-box;
    }
    .container{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0
    }
    .warpper{
        min-width: 320px;
        max-width: 500px;
        margin: 0 auto;
        height: 100%;
        background-color: #fff;
    }
    .top-input{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f97197;
        padding: 0 10px;
    }
    .input-model{
        font-size: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .top-input .input1{
        width: 64px;
        height: 30px;
        padding: 0 4px;
        border: none;
        outline: none;
        border-radius: 2px;
        font-size: 14px;
    }
    .top-input .input2{
        width: 120px;
        height: 30px;
        border: none;
        outline: none;
        padding: 0 3px;
        border-radius: 2px;
        margin-left: 6px;
        font-size: 14px;
    }
    .top-input button{
        width: 60px;
        height: 30px;
        line-height: 14px;
        font-size: 14px;
        border: none;
        background: #fff;
        color: #ee7096;
        font-weight: 400;
        border-radius: 4px;
    }
    .all-count{
        width: 100%;
        height: 30px;
        background-color: #f3f3f3;
        line-height: 30px;
        font-size: 14px;
        color: #666;
        padding: 0 10px;
    }
    
   
    
    .sex-box{
        display: inline-block;
        height: 30px;
        width: 30px;
        background: #fff;
        margin-left: 6px;
        border-radius: 2px;
        font-size: 0;
    }
    .span1{
        display: block;
        width: 100%;
        height: 50%;
        font-size: 12px;
        background-color: blue;
        text-align: center;
        line-height: 15px;
    }
    .span2{
        display: block;
        width: 100%;
        height: 50%;
        font-size: 12px;
        background-color:#f8b8cd;
        text-align: center;
        line-height: 15px;
    }

</style>