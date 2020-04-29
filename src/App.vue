<template>
  <div>
<!--    <link type="text/css" rel="stylesheet" href="animate.css"/>-->

    <div class="row pl-4 align-items-center ramka" style="height: 100px; font-size: 27px">
      <div class="col-auto mr-auto ramka">
        Тут картинка
      </div>
      <div class="col-auto ramka ">
        Выбор участка
      </div>
      <div class="col-1 ramka">
        О Поселке
      </div>
      <div class="col-auto ramka">
        Инфраструктура
      </div>
      <div class="col-1 ramka">
        Как Купить
      </div>
      <div class="col-1 ramka" style="color: red">
        Акции
      </div>
      <div class="col-auto offset-1 ramka">
        89999999999
        <br>
        <span style="font-size: 20px"><i class="fas fa-circle"></i> 08:00 - 20:00</span>
      </div>

<!--      Кнопка меню-->

      <div class="col-1 offset-1 pr-5 ramka">
        <button type="button" class="btn btn-outline float-right" @click="open_menu">
          <i class="fas fa-list-ul" style="font-size: 35px"></i>
        </button>
      </div>
    </div>

    <div>
        <button style="margin-top: 40px; float: right; margin-right: 20px">
            Переключатель заднего фона
        </button>
    </div>



<!--    Выпадающий список справа-->

<!--      TODO: СДЕЛАТЬ ВЫПАДАЮЩИЙ СПИСОК ЧЕРЕЗ БУТСТРАП-->

    <div v-if="menu == true" class="menu bg-cover" style="color: white">
      <button type="button" @click="close_menu" class="btn btn-outline button ramka" style="font-size: 40px">
        <i class="fas fa-times"></i>
      </button>

        <div style="width: 300px; height: 50px;margin: 40px; display: inline-block" class="ramka">
          89999999999
          <br>
          <h5 class="ramka"><i class="fas fa-circle"></i> 08:00 - 20:00</h5>
        </div>

        <section class="ramka">
        <button class="btn-lg btn btn-outline" style="font-size: 40px"> Call us</button>
        </section>
    </div>

    <div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      menu: true,
    }
  },
  methods:{
    open_menu() {
        this.menu = true
    },

    close_menu(){
        this.menu = false
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
  .ramka{
    outline:2px solid red;
  }
  .menu{

    float: right;
    width: 50%;
    height: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 40px;
    background-image: url(//cs11.pikabu.ru/post_img/big/2019/08/11/9/1565537955180896977.jpg);
  }
  .button{
    float: right;
    margin: 40px;
  }
</style>
