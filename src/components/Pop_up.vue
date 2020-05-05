<template>
    <div>
        <button type="button" class="button" data-toggle="modal" data-target="#Popup">Open modal</button>

        <div class="modal fade" id="Popup" tabindex="-1" role="dialog" aria-labelledby="title" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document" >
                <div class="modal-content">
                    <div>

                        <button type="button" class="close" data-dismiss="modal" aria-label="close">
                            <span aria-hidden="true" style="padding: 5px">&times;</span>
                        </button>

                    </div>
                    <div class="modal-body">

                        <p style="text-align: center; font-size: 30px"> Заказать обратный звонок</p>
                        <form style="text-align: center">
                            <input type="text" placeholder="телефон"/>
                            <input type="text" placeholder="дата"/>
                        </form>
                        <button class="button" style="margin: 10px 35px">Записаться</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pop_up",
        methods: {}
    }
</script>

<style scoped lang="scss">
    .button {
        border-radius: 30px;
        background-color: green;
        width: 220px;
        color: white;
        font-size: 30px;
    }

    form input {
        margin-left: 5px;
        text-align: center;
        width: 45%;
        height: 50px;
    }

    .pop {
        width: 33%;
        height: 33%;
    }


</style>
