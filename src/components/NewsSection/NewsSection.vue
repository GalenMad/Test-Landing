<template>
    <section class="news-section">

        <div class="news-section__heading-container">
            <h2 class="section-heading">
                <a href="#" class="section-heading__link">
                    Новости
                </a>
            </h2>
            <a href="#" class="news-section__heading-link">Все новости</a>
        </div>

        <div class="news-container">
            <div class="news-container__item-wrapper">
                <a class="news-container__item" href="#">
                    <h3 class="news-container__num">1</h3>
                </a>
            </div>

            <div class="news-container__item-wrapper">
                <a class="news-container__item" href="#">
                    <h3 class="news-container__num">2</h3>
                </a>
            </div>

            <div class="news-container__item-wrapper">
                <a class="news-container__item" href="#">
                    <h3 class="news-container__num">3</h3>
                </a>
            </div>

            <div class="news-container__item-wrapper" v-for="index in newsCount">
                <transition name="more" appear>
                    <a class="news-container__item" href="#">
                        <h3 class="news-container__num">{{index + 3}}</h3>
                    </a>
                </transition>
            </div>

            <div class="news-container__button-container">
                <button class="news-container__more-button" @click="updateNewsCount">Показать ещё</button>
            </div>
        </div>

    </section>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>