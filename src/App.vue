<template>
    <div id="main">
        <!--      Блок первой кртинкии-->
        <div class="container-fluid" :class="{img1: img1, img2: img2}">

            <div class="row pl-4 align-items-center ramka" style="height: 100px">
                <div class="col-auto mr-auto ramka">
                    <a href="#">Тут картинка</a>
                </div>
                <div class="col-auto ramka ">
                    <a href="#">Выбор участка</a>
                </div>
                <div class="col-auto ramka">
                    <a href="#">О Поселке</a>
                </div>
                <div class="col-auto ramka">
                    <a href="#">Инфраструктура</a>
                </div>
                <div class="col-auto ramka">
                    <router-link to="/buy"> Как Купить</router-link>
                </div>
                <div class="col-auto ramka">
                    <a href="#stock"> Акции </a>
                </div>
                <div class="col-auto offset-1 ramka">
                    89999999999
                    <br>
                    <span style="font-size: 20px"><i class="fas fa-circle"></i> 08:00 - 20:00</span>
                </div>

                <!--      Кнопка меню-->

                <div class="col-1 offset-1 pr-5 ramka">
                    <button type="button" class="btn btn-outline float-right" data-target="#menu" data-toggle="modal">
                        <i class="fas fa-list-ul" style="font-size: 35px"></i>
                    </button>
                </div>
            </div>
            <!--                 кнопка переключения заднего фона-->
            <div>
                <button style="margin-top: 40px; float: right; margin-right: 20px" @click="change">
                    Переключатель заднего фона
                </button>
            </div>


            <div style="margin-top: 20em; margin-left: 7em">
                <h5 style="color: red">Коттеджный Поселок</h5>
                <span style=" font-size: 7em"> Аннинские просторы</span>
                <p style="margin-top: 3em; color: red"> Участки даром</p>

                <Pop_up/>
                <Pop_menu/>

            </div>


        </div>

        <a href="#" title="Вернуться к началу страницы" class="topNubex">Вверх</a>

        <Stock/>

        <!--        <Scroll/>-->

        <router-view></router-view>

    </div>


</template>

<script>
    import Pop_up from "./components/Pop_up";
    import Stock from "./components/Stock";
    import Pop_menu from "./components/Pop_menu";
    // import Scroll from "./components/Scroll";

    export default {
        name: 'App',
        components: {
            // Scroll,
            Pop_up,
            Pop_menu,
            Stock
        },
        data() {
            return {
                img1: true,
                img2: false,
            }
        },
        methods: {
            change() {
                if (this.img1) {
                    this.img1 = false;
                    this.img2 = true;
                } else {
                    this.img1 = true;
                    this.img2 = false;
                }
            }
        }
    }


</script>

<style lang="scss">
    /*TODO сделать навигацию по сайту и кнопку смена фона*/
    .col-auto a {
        color: black;

        &:hover {
            text-decoration: none;
            color: black;
        }
    }

    /*Растяжка картинки*/
    .bg-cover {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center 35%;
        background-color: #ecf1f5;
        position: relative;
    }

    .ramka {
        outline: 2px solid yellow;
    }

    #main1 {
        background-color: pink;
        height: 1200px;
    }

    .topNubex {
        position: fixed;
        left: 45px;
        top: 150px;
        z-index: 100;
        height: 100%;

    }

    .img1 {
        background-color: yellowgreen;
        height: 1200px;
    }

    .img2 {
        background-color: pink;
        height: 1200px;
    }

</style>
