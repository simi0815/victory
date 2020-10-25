<template>
    <div class="code-area">
        <div class="bar">
            <div class="state"><span></span><span></span><span></span></div>

            <div class="lan">javascript</div>
        </div>
        <div class="realcode">
             <pre style="width: 100%;overflow: scroll;font-size: 1em ;z-index: 20000">
    <code class="line-numbers" :class="'language-'+language">import random
    if __name__ =="__main__":    #四位数字字母验证码的生成
    checkcode="" #保存验证码的变量
    for i in range(4):
        index=random.randrange(0,4)  #生成一个0~3中的数
    if index!=i and index +1 !=i:
        checkcode +=chr(random.randint(97,122))  # 生成a~z中的一个小写字母
    elif index +1==i:
        checkcode +=chr(random.randint(65,90) ) # 生成A~Z中的一个大写字母
    else:
        checkcode +=str(random.randint(1,9))  # 数字1-9
    print(checkcode)
    </code>
            </pre>
        </div>
    </div>
</template>

<script>
     import Prism from 'prismjs'
    export default {
        name: "CodeArea",
        props:["language","code"]
    }
</script>

<style scoped>
.code-area,.realcode{
    width: 100%;
    position: relative;
}
    .bar {
        position: absolute;
        top: 0;
        z-index: 30000;
        height: 1.8em;
        width: 100%;
        /*background-color: pink;*/
    }

    .state{
        width: 6em;
        height: 1em;
        margin: 0.4em 0;

    }
    .state span{
        width: 1em;
        height: 1em;
        display:block;
        float: left;
        border-radius: 50%;
        margin-left: 0.7em;
    }
    .state span:first-child{
        background-color: red;
    }
    .state span:nth-child(2){
        background-color: gray;
    }
    .state span:last-child{
        background-color: green;
    }
    .lan{
        height: 1em;
        width: 12em;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -6em;
        font-size: 1.8em;
        text-align: center;
        color: white;
    }

pre{
    padding-top:1.8em ;
}
</style>