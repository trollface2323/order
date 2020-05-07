<template>
    <div style="background-color: red; height: 1000px">
        <div style="width: 90%; margin: auto">
            <h1 style="margin-left: 20px">
                Акции и Предложения
            </h1>
            <div class="d-flex ramka" style="height: 300px">
                <div id="carouselExampleIndicators" class="carousel slide bg-cover" data-ride="carousel"
                     style="margin: auto">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 "
                                 src="//news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325"
                                 alt="Первый слайд"
                                 style="height: 300px">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 bg-cover" style=""
                                 src="//bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg"
                                 alt="Второй слайд">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Stock"
    }
</script>

<style scoped lang="scss">
    .bg-cover {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center 35%;
        background-color: #ecf1f5;
        position: relative;
    }

</style>