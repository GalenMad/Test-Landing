<template>
    <section class="slider-section section-margin">

        <h2 class="hidden-element" hidden>Слайдер</h2>

        <carousel :autoplay="true" :autoplayTimeout="5000" :items="1" :loop="true">

            <a href="#slider" v-for="item in sliderItems">
                <article class="slider-item"
                         v-bind:style="{backgroundImage:
                         'linear-gradient(0deg, rgba(0, 0, 0, 0.46), ' +
                         'rgba(0, 0, 0, 0.46)), url(' + item.img + ')'}">
                    <div class="container">
                        <div class="slider-item__inner">
                            <div class="slider-item__tag-container">
                                <span class="slider-item__tag">{{item.tag}}</span>
                            </div>
                            <h3 class="slider-item__heading">{{item.heading}}y</h3>
                            <p class="slider-item__description">
                                {{item.description}}
                            </p>
                        </div>
                    </div>
                </article>
            </a>

        </carousel>

    </section>
</template>

<script src="./script.js">


</script>

<style lang="scss" src="./style.scss">
</style>