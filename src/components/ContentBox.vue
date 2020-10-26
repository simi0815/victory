<template>
    <div class="content-box" @click="$router.push({name:'Article',param:{id:articleInfo.id}})">
        <!--图片区域-->
        <div class="image">
            <img :src="articleInfo.imgSrc" alt="">
        </div>
        <!--内容区域-->
        <div class="content">
            <div class="wrapper">
                <!--发布时间-->
                <div class="publishTime">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-clock"></use>
                    </svg>
                    发布于{{articleInfo.publishTime}}
                </div>
                <!--标题-->
                <div class="title"><h3>{{articleInfo.title}}</h3>
                </div>
                <!--文章信息栏-->
                <div class="info clearfix">
                    <div class="views">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-view"></use>
                        </svg>
                        {{articleInfo.views}}热度
                    </div>
                    <div class="comments">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-aui-icon-comment"></use>
                        </svg>
                        {{articleInfo.comments}}条评论
                    </div>
                    <div class="author">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-writerin-l"></use>
                        </svg>
                        {{articleInfo.author}}
                    </div>
                </div>
                <!--文章简略-->
                <div class="simple-content" v-text="articleInfo.content">

                </div>
                <!--省略号-->
                <div class="omit">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-financial_omit"></use>
                    </svg>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "ContentBox",
        data(){
            return{
                articleInfo:{}
            }
        },
        props:["id"],
        created() {
            //模拟从后端拿到数据
            let res = {
                id:1,
                imgSrc:"https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg",
                publishTime:"2019-12-13",
                title:"python大神之路",
                views:9324,
                comments:43,
                author:"simi",
                content:"Python是一种跨平台的计算机程序设计语言。是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越多被用于独立的、大型项目的开发。"
            }
            this.articleInfo = res

        }

    }
</script>

<style scoped>
     .wrapper {
            width: 86%;
            height: 86%;
            margin: 7% 7%;
        }
      .publishTime, .info {
            color: #888;
            font-size: 12px;
            font-weight: 500;
        }

        .title {
            color: #504e4e;
        }

        .views, .comments, .author {
            float: left;
            padding-right: 7px;
        }

        .simple-content {
            height: 67.5px;
            margin: 15px 0 22px 0;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }

        .omit {
            font-size: 30px;
        }

    @media screen and (min-width: 769px) {
        .content-box {
            width: 56%;
            min-width: 768px;
            height: 300px;
            margin: 30px auto;
            box-shadow: 0 1px 20px -6px rgba(0, 0, 0, .5);
            border-radius: 20px;
            overflow: hidden;
        }

        .content-box:hover {
            box-shadow: 10px 10px 20px -6px rgba(0, 0, 0, .5);
        }

        .image {
            width: 60%;
            height: 100%;
            float: left;
            overflow: hidden;
        }

        .image img {
            width: 100%;
            height: 100%;
            transition: all .5s;
        }

        .image img:hover {
            width: 105%;
            height: 105%;
        }


        .content {
            width: 40%;
            height: 100%;
            float: right;
        }
        .title {
            margin: 18px 0;
        }


    }

    @media screen and (max-width: 768px) {
        .content-box{
            width: 90%;
            height: 480px;
            margin: 30px auto;
        }
        .image,.image img{
            width: 100%;
            height: 240px;
        }
        .content{
            width: 100%;
            height: 240px;
        }
        .title {
            margin: 10px 0;
        }
    }



</style>