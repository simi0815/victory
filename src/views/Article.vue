<template>
    <div class="article">
        <!--上面的图片-->
        <div class="imgArea">
            <img src="https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg" alt="" class="bg">
            <div class="title">python大牛之路</div>
            <div class="info">
                <div class="avatar"><img src="../assets/images/avatar.jpeg" alt=""></div>
                <div class="author">屁屁虾</div>
                <div class="publish-date">2019-12-30</div>
                <div class="views">9262次阅读</div>
            </div>

        </div>
        <div class="content">
            <CodeArea language="python" :code="code">
            </CodeArea>
            <p> 自从20世纪90年代初Python语言诞生至今，它已被逐渐广泛应用于系统管理任务的处理和Web编程。</p>




            <p>Python的创始人为荷兰人吉多·范罗苏姆 [4] （Guido van Rossum）。1989年圣诞节期间，在阿姆斯特丹，Guido为了打发圣诞节的无趣，决心开发一个新的脚本解释程序，作为ABC
                语言的一种继承。之所以选中Python（大蟒蛇的意思）作为该编程语言的名字，是取自英国20世纪70年代首播的电视喜剧《蒙提.派森的飞行马戏团》（Monty Python's Flying Circus）。
                ABC是由Guido参加设计的一种教学语言。就Guido本人看来，ABC 这种语言非常优美和强大，是专门为非专业程序员设计的。但是ABC语言并没有成功，究其原因，Guido 认为是其非开放造成的。Guido
                决心在Python 中避免这一错误。同时，他还想实现在ABC 中闪现过但未曾实现的东西。
                就这样，Python在Guido手中诞生了。</p>
            <p>
                可以说，Python是从ABC发展起来，主要受到了Modula-3（另一种相当优美且强大的语言，为小型团体所设计的）的影响。并且结合了Unix shell和C的习惯。
                Python [5] 已经成为最受欢迎的程序设计语言之一。自从2004年以后，python的使用率呈线性增长。Python 2于2000年10月16日发布，稳定版本是Python 2.7。Python
                3于2008年12月3日发布，不完全兼容Python 2。 [4] 2011年1月，它被TIOBE编程语言排行榜评为2010年度语言。 [6]
                标识
                标识
            </p>
            <p>
                由于Python语言的简洁性、易读性以及可扩展性，在国外用Python做科学计算的研究机构日益增多，一些知名大学已经采用Python来教授程序设计课程。例如卡耐基梅隆大学的编程基础、麻省理工学院的计算机科学及编程导论就使用Python语言讲授。众多开源的科学计算软件包都提供了Python的调用接口，例如著名的计算机视觉库OpenCV、三维可视化库VTK、医学图像处理库ITK。而Python专用的科学计算扩展库就更多了，例如如下3个十分经典的科学计算扩展库：NumPy、SciPy和matplotlib，它们分别为Python提供了快速数组处理、数值运算以及绘图功能。因此Python语言及其众多的扩展库所构成的开发环境十分适合工程技术、科研人员处理实验数据、制作图表，甚至开发科学计算应用程序。2018年3月，该语言作者在邮件列表上宣布Python
                2.7将于2020年1月1日终止支持。用户如果想要在这个日期之后继续得到与Python 2.7有关的支持，则需要付费给商业供应商。</p>

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
                code:"if __name__ ==\"__main__\":    #四位数字字母验证码的生成\n" +
                    "    checkcode=\"\" #保存验证码的变量\n" +
                    "    for i in range(4):\n" +
                    "        index=random.randrange(0,4)  #生成一个0~3中的数\n" +
                    "    if index!=i and index +1 !=i:\n" +
                    "        checkcode +=chr(random.randint(97,122))  # 生成a~z中的一个小写字母\n" +
                    "    elif index +1==i:\n" +
                    "        checkcode +=chr(random.randint(65,90) ) # 生成A~Z中的一个大写字母\n" +
                    "    else:\n" +
                    "        checkcode +=str(random.randint(1,9))  # 数字1-9\n" +
                    "    print(checkcode)"
            }
        },
        mounted() {
            this.$parent.isShow = true;

        },
        methods: {},
        components:{
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
        font-weight: 400;
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
            top: 280px;
            left: 20px;
        }

        .info {
            position: absolute;
            width: 90%;
            left: 20px;
            top: 320px;
            height: 57px;
            line-height: 57px;
        }

        .content {
            width: 60%;
            min-width: 768px;
            height: 1440px;
            margin: 0 auto;
            padding: 40px 10px;
            color: #797979;
            font-weight: 400;
        }

        .content p {
            line-height: 30px;
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


    }

</style>