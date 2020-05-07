<template>
    <div class="modal fade" id="menu" tabindex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg menu align-items-start" role="document">
            <div class="modal-content bg-cover" style="padding-left: 40px; background-image: url(//news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325)">
                <div class="modal-header">
                    <div class="d-flex">
                        89999999999<br>
                        hjkl
                    </div>
                    <div class="align-self-center">
                        <button class="btn btn-success button" data-toggle="modal" data-target="#Popup">
                            Call US
                        </button>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="close">
                        <span aria-hidden="true" style="padding: 5px">&times;</span>
                    </button>
                </div>

                <div class="modal-body" style="font-size: 27px">
                    <div class="d-flex flex-column">
                        <span>Выбор участка</span>
                        <span>О поселке</span>
                        <span>Инфраструктура</span>
                        <span>Участки</span>
                        <span>Как купить</span>
                        <span>Типовые проекты</span>
                        <span>Новости и акции</span>
                        <span>Контакты</span>
                    </div>
                </div>
                <div class="modal-footer justify-content-start">
                    <div class="d-flex justify-content-start" style="!important;">
                        Here is some info
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "Pop_menu"
    }
</script>

<style scoped lang="scss">

    .menu {
        margin-left: auto;
        margin-right: 0;
    }

    .button {
        border-radius: 20px;
        background: white;
        color: black;
        margin-left: 20px;
        width: 150px;
    }

    .modal-body span{
        margin-top: 15px;
    }

</style>