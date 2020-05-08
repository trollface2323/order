<template>
    <div class="main-advantages" id="advantages" style="height: 6385px;">
        <img class="main-advantages__img lazy loaded" src="assets/templates/annino/images/advantages-img.png"
             data-src="assets/templates/annino/images/advantages-img.png" alt=""
             style="position: absolute; top: 0px; bottom: 0px;" data-was-processed="true">
        <div class="main-advantages-wrap"
             style="position: static; top: 0px; left: 0px; transform: translateX(-218px); bottom: 0px;">
            <div class="main-advantages-wrap-content">
                <div class="mycontainer">
                    <div class="main-advantages-item">
                        <div class="main-advantages-item__img">
                            <img class="lazy loaded" src="assets/templates/annino/images/advantages-item1.jpg"
                                 data-src="assets/templates/annino/images/advantages-item1.jpg" alt=""
                                 data-was-processed="true">
                        </div>
                        <div class="main-advantages-item-info">
                            <div class="main-advantages-item-info__title">Всё для детей</div>
                            <div class="main-advantages-item-info__subtitle">Два детских сада</div>
                            <div class="main-advantages-item-info__item">Детский сад No26 (п. Аннино, ул. Весенняя)
                            </div>
                            <div class="main-advantages-item-info__item">Детский сад No15 (д. Разбегаево, 51А)</div>
                            <div class="main-advantages-item-info__subtitle">МОУ Аннинская средняя школа</div>
                            <div class="main-advantages-item-info__item">Расположена в посёлке Аннино (ул. Садовая, 2)
                            </div>
                            <div class="main-advantages-item-info__subtitle">Молодежный культурно-досуговый комплекс
                            </div>
                            <div class="main-advantages-item-info__item">Посёлок Аннино, улица Садовая, 16</div>
                            <div class="main-advantages-item-info__subtitle">ДК «Разбегаево»</div>
                            <div class="main-advantages-item-info__item">Деревня Разбегаево, 51а, во дворах</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Scroll"
    }
</script>

<style scoped lang="scss">
    main-advantages-wrap {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 100vh;
        height: -webkit-calc(var(--vh, 1vh) * 100);
        height: calc(var(--vh, 1vh) * 100)
    }

</style>