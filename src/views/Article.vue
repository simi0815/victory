<template>
    <div class="article">
        <!--上面的图片-->
        <div class="imgArea">
            <img :src="articleInfo.imgSrc" alt="" class="bg">
            <div class="title">{{articleInfo.title}}</div>
            <div class="info">
                <div class="avatar"><img :src="articleInfo.authorAvatar" alt=""></div>
                <div class="author">{{articleInfo.author}}</div>
                <div class="publish-date">{{articleInfo.publishTime}}</div>
                <div class="views">{{articleInfo.views}}次阅读</div>
            </div>

        </div>
        <div class="content select-free">
            <div v-for="(item,i) in articleInfo.content" :key="i">
                <p v-if="item.type == 1" v-html="item.data"></p>
                <CodeArea v-if="item.type == 2" :language="item.lan" :code="item.data"></CodeArea>
            </div>
        </div>
        <div class="comments">

        </div>

    </div>
</template>

<script>
    // import  'prismjs'
    import CodeArea from '../components/CodeArea'

    export default {
        name: "Article",
        data() {
            return {
                articleInfo: {
                    id: 1,
                    imgSrc: "https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg",
                    publishTime: "2019-12-13",
                    title: "python大神之路",
                    authorAvatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603743656018&di=34215fa351d2e430a3bdc85962084282&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F24%2F20200924201441_xdhsp.thumb.400_0.jpeg",
                    views: 9324,
                    comments: 43,
                    author: "simi",
                    //type为1时表示正常段落，为2时表示代码
                    content: [{
                        type: 1,
                        data: "<a>Django</a> 是一个由 <a>Python</a> 编写的一个开放源代码的 Web 应用框架。使用 <a>Django</a> ，只要很少的代码，<a>Python</a> 的程序开发人员就可以轻松地完成一个正式网站所需要的大部分内容，并进一步开发出全功能的 Web 服务 Django 本身基于 MVC 模型，即 <strong>Model（模型）+ View（视图）+ Controller（控制器)</strong> 设计模式，MVC 模式使后续对程序的修改和扩展简化，并且使程序某一部分的重复利用成为可能。",
                    }, {
                        type: 2,
                        lan: 'python',
                        data: "from django.http import HttpResponse\nfrom TestModel.models import Test\n# 数据库操作\ndef testdb(request):\n\ttest1 = Test(name='runoob')\n\ttest1.save()\n\treturn HttpResponse(123)",
                    }, {
                        type: 1,
                        data: "MVC 模式（Model–view–controller）是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）"
                    }
                    ]
                },
                propagationInfo: {
                    id: 2,
                    imgSrc: "https://pic.qqtn.com/up/2016-7/2016070518082798993.jpg",
                    publishTime: "2020-10-27",
                    title: "关于vue前端模板VICTORY",
                    authorAvatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603743656018&di=34215fa351d2e430a3bdc85962084282&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F24%2F20200924201441_xdhsp.thumb.400_0.jpeg",
                    views: 10000,
                    comments: 0,
                    author: "simi",
                    //type为1时表示正常段落，为2时表示代码
                    content: [{
                        type: 1,
                        data: "<h1>一.为什么要开发 <strong>VICTORY</strong> </h1>本人（simi）即将告别学生党，原本是一名苦逼 <strong>pythoner</strong> 。大概一年前接触前端，打算拓展专业知识，中间放弃了几次，虚度了很多光阴，还是坚持了下来。近日偶然逛进一个私人主页网站，逼格甚高，觉得学了那么长时间的开发自己竟没有一个网站，很是失败，当算也做一个自己的网站，把自己的博客和一些技术展示出来。通过打开 <strong>F12(你懂得)</strong> ，发现网站采用的是 <a href='https://wordpress.org/'>WordPress</a> 模板 ，名字叫 <a href='https://2heng.xin/theme-sakura/'>Sakura</a> ,  <strong>GitHub</strong> 上作者已将源码公开。<strong>Sakura</strong> 也是基于其他 <strong>WordPress</strong> 模板几次修改，这里不做赘述，有兴趣点击 <a href='https://github.com/mashirozx/Sakura'>链接</a> 查看。<strong>WordPress</strong> 是基于 <strong>php</strong> 开发的框架，本人对 <strong>php</strong> 八窍只通了七窍（一窍不通），又不想直接拿来用做自己的网站，觉得自己可以模仿这个主题开发一套全新的 <strong>vue</strong> 前端项目，起名 <strong>victory</strong> ,希望我和看到这的每一个人干什么事都 <strong>victory</strong> 。后端我会在 <strong>victory</strong> 开发成型的时候用 <strong>python</strong> 书写，其他感兴趣的小伙伴可以用任意语言书写。"
                        },
                        {
                          type:1,
                          data:"<h1>二.在此邀请合作者</h1>本人开发精力和水平有限，只能花5天时间先把 <strong>victory</strong> <strong>主页</strong>和<strong>文章</strong>功能简单实现下,后续功能将会邀请合作者合作完成.已将源代码上传到 <a href='https://github.com/simi0815/victory'>GitHub</a> 上，不管是大神还是菜鸟都可以对代码进行使用修改，如果您写了新的功能和组件或优化了任何一处地方都可以尽管<strong>pull request</strong> ，您也可以加入开发者，在 <strong>issues</strong> 留言您的 <strong>id</strong> 就可以加入了！"
                        },
                        {
                          type:1,
                          data:"<h1>三.已经完成的部分功能</h1><h3>1. <strong>mac</strong> 风格代码高亮</h3>已经将代码块封装到 <strong>CodeArea</strong> 组件，使用时只要传入props参数：<strong>language,code</strong> 即可，如下："
                        },
                        {
                            type: 2,
                            lan: 'python',
                            data: "from django.http import HttpResponse\nfrom TestModel.models import Test\n# 数据库操作\ndef testdb(request):\n\ttest1 = Test(name='runoob')\n\ttest1.save()\n\treturn HttpResponse(123)",
                        },
                        {
                            type: 1,
                            data:"<h3>2.LIVE-2D看板娘</h3>已将代码封装到 <strong>Live2D</strong> 组件，你可以修改对话，其他组件内想修改当前对话的话，只需要修改 <strong>vuex</strong> 中的 <strong>currentWord</strong> 就可以了 <img src='http://www.smilenow.top/static/ex.png' alt='' style='width: 200px;height: 400px;margin: 0 auto'>"
                        },
                        {
                            type:1,
                            data:"<h1>victory期待您的加入...</h1>"
                        }

                    ]
                },


            }
        },
        mounted() {
            this.$parent.isShow = true;
            console.log(this.$route);
            if(this.$route.params.id == 2){
                this.articleInfo = this.propagationInfo;
            }


        },
        methods: {},
        components: {
            CodeArea,
        }
    }
</script>

<style scoped>
    .article {
        width: 100%;
    }

    .imgArea .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .info .avatar, .info .avatar img {
        width: 35px;
        height: 35px;
        float: left;

    }

    .avatar img {
        border-radius: 50%;
        margin: 11px 0;
    }

    .avatar {
        vertical-align: center;
    }

    .author, .publish-date, .views {
        color: white;
        font-size: 14px;
        font-weight: 500;
        padding-left: 10px;
        float: left;
    }

    @media screen and (min-width: 769px) {


        .imgArea {
            width: 60%;
            min-width: 768px;
            height: 400px;
            margin: 75px auto 0 auto;
            position: relative;
        }


        .title {
            color: white;
            font-size: 32px;
            font-weight: 500;
            position: absolute;
            top: 250px;
            left: 20px;
        }

        .info {
            position: absolute;
            width: 90%;
            left: 20px;
            top: 320px;
            height: 57px;
            line-height: 57px;
            letter-spacing: 1px;
        }

        .content {
            width: 60%;
            min-width: 768px;
            height: 1440px;
            margin: 0 auto;
            padding: 40px 10px;
            color: #797979;
            font-weight: 500;
        }

        .content p {

            line-height: 40px;
        }

    }

    @media screen and (max-width: 768px) {
        .imgArea {
            position: relative;
            width: 100%;
            height: 280px;
        }

        .title {
            color: white;
            font-size: 32px;
            font-weight: 500;
            position: absolute;
            top: 155px;
            left: 20px;
        }

        .info {
            position: absolute;
            width: 90%;
            left: 20px;
            top: 220px;
            height: 57px;
            line-height: 57px;
            letter-spacing: 1.5px;
        }

        .content {
            height: 1440px;
            padding: 40px 10px;
            color: #797979;
            font-weight: 500;
        }

        .content p {
            line-height: 30px;
        }

    }

</style>