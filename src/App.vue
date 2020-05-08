<template>
    <div id="main">
        <!--      Блок первой кртинкии-->
        <div class="container-fluid" id="main1">

            <div class="row pl-4 align-items-center ramka" style="height: 100px">
                <div class="col-auto mr-auto ramka">
                    Тут картинка
                </div>
                <div class="col-auto ramka ">
                    Выбор участка
                </div>
                <div class="col-auto ramka">
                    О Поселке
                </div>
                <div class="col-auto ramka">
                    Инфраструктура
                </div>
                <div class="col-auto ramka">
                    Как Купить
                </div>
                <div class="col-auto ramka">
                    <a href="#stock" style="color: red"> Акции </a>
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

            <div>
                <button style="margin-top: 40px; float: right; margin-right: 20px" @click="bg">
                    Переключатель заднего фона
                </button>
            </div>


            <!--    Выпадающий список справа-->

            <div v-if="menu == true" class="menu bg-cover" style="color: white">
                <div class="row">
                    <div class="col-auto ml-5">
                        89999999999 <br>
                        <span style="font-size: 25px"> <i class="fas fa-circle"></i> 08:00 - 20:00</span>
                    </div>
                    <div class="col-auto align-self-center">
                        <button class="btn btn-outline-success" style="font-size: 40px"> Call us</button>
                    </div>
                    <div class="col-auto ml-auto mr-5 align-self-center">
                        <button type="button" @click="close_menu" class="btn btn-outline ramka" style="font-size: 40px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <!--        Список -->

                <div class="row" style="margin-top: 60px">
                    <div class="col-auto ml-2">
                        <ul style="list-style-type: none;">
                            <li>
                                Выбор участка
                            </li>
                            <li>
                                О Поселке
                            </li>
                            <li>
                                Инфраструктура
                            </li>
                            <li>
                                Участки
                            </li>
                            <li>
                                Как Купить
                            </li>
                            <li>
                                Типовые проекты
                            </li>
                            <li>
                                Новости и Акции
                            </li>
                            <li>
                                Контакты
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style="margin-top: 20em; margin-left: 7em">
                <h5 style="color: red">Коттеджный Поселок</h5>
                <span style=" font-size: 7em"> Аннинские просторы</span>
                <p style="margin-top: 3em; color: red"> Участки даром</p>

                <Pop_up/>
                <Pop_menu/>

            </div>


        </div>

        <Stock/>

        <Scroll/>

    </div>


</template>

<script>
    import Pop_up from "./components/Pop_up";
    import Stock from "./components/Stock";
    import Pop_menu from "./components/Pop_menu";
    import Scroll from "./components/Scroll";

    export default {
        name: 'App',
        components: {
            Scroll,
            Pop_up,
            Pop_menu,
            Stock
        },
        data() {
            return {
                menu: false,
            }
        },
        methods: {
            bg() {
                document.bgColor = 'red';
            }
        }
    }


</script>

<style>
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

    /*a:hover {*/
    /*    text-decoration: none;*/
    /*    color: red;*/
    /*}*/
    .a{
        text-decoration: none;
        color: red;

    }

</style>
