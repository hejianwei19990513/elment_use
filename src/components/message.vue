<template>
    <div>
        <a href="#/message" @click="handle">点我弹出成功消息</a>
        <a href="#/message" @click="handle1">点我弹出消息</a>
        <a href="#/message" @click="handle2">点我弹出失败消息</a>
        <a href="#/message" @click="handle3">点我弹出警告消息</a>
    </div>
</template>
<script>
export default {
    methods:{
        handle:function(){
            // message的对象形式写法
            this.$message({type:'success',message:'这是一条成功的消息',showClose:true})
        },
        handle1:function(){
            this.$message('这是一条消息')
        },
        handle2:function(){
            this.$message.error('这是一条失败的消息')
        },
        handle3:function(){
            this.$message.warning('这是一条警告的消息')
        }
    }
}
</script>
<style >
    a{
        margin-right: 20px;
    }
</style>