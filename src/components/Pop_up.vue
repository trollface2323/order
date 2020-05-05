<template>
    <!--    <div class="pop_up">-->
    <!--        <div class="pop_up_header">-->
    <!--            <span class="close" @click="close_popup"><i class="fas fa-times"></i></span><br>-->
    <!--            <span> Заказать обратный звонок</span>-->
    <!--        </div>-->
    <!--        <div class="pop_up_form">-->
    <!--            <input type="text" placeholder="Телефон">-->
    <!--            <input type="text" placeholder="Дата">-->
    <!--        </div>-->
    <!--        <div class="pop_up_footer">-->
    <!--            <button>Заказать</button>-->
    <!--        </div>-->
    <!--    </div>-->
    <div>
<!--        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Popup">Open modal</button>-->

        <div class="modal fade" id="Popup" tabindex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="close">
                            <span aria-hidden="true" style="padding: 5px">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p style="text-align: center"> Заказать обратный звонок</p>
                        <input type="text" placeholder="телефон"/>
                        <input type="text" placeholder="дата"/>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pop_up",
        methods: {
            close_popup() {
                this.$emit('close_popup')
            }
        }
    }
</script>

<style scoped lang="scss">

    .pop_up {
        padding: 20px;
        position: absolute;
        left: 0;
        right: 0;
        top: calc(50% - 200px);
        margin: 0 auto;
        width: 50%;
        height: 400px;
        border-radius: 20px;
        background-color: white;
        z-index: 100;

        #main {
            background-color: rgba(0, 0, 0, 0.5);
        }

        &_header {
            text-align: center;
            font-size: 30px;
        }

        &_footer {
            margin-left: 5%;
            margin-top: 20px;
        }

        .pop_up_form input {
            margin-top: 50px;
            height: 70px;
            border-radius: 10px;
            margin-left: 5%;
            width: 40%;
        }
    }

    span:last-child {
        font-size: 60px;

    }

    .pop_up_footer button {
        border-radius: 30px;
        background-color: green;
        width: 220px;
        height: 70px;
        color: white;
        font-size: 30px;
    }

    .close {
        float: right;
        cursor: pointer;
    }


</style>

<style>
    .button {
        border-radius: 30px;
        background-color: green;
        width: 220px;
        height: 70px;
        color: white;
        font-size: 30px;
    }
</style>