'use strict';
import carousel from 'vue-owl-carousel';
import slide1 from '../../assets/img/slide_1.jpg';
import slide2 from '../../assets/img/slide_2.jpg';
import slide3 from '../../assets/img/slide_3.jpg';

export default {
    name: 'SliderSection',
    components: {carousel},
    data() {
        return {
            sliderItems: [
                {
                    tag: 'Анимация',
                    heading: 'Подготовка спрайтов для анимации в Unity',
                    description: 'Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.',
                    img: slide1
                },
                {
                    tag: 'Анимация',
                    heading: 'Подготовка спрайтов для анимации в Unity',
                    description: 'Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.',
                    img: slide2
                },
                {
                    tag: 'Анимация',
                    heading: 'Подготовка спрайтов для анимации в Unity',
                    description: 'Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.',
                    img: slide3
                },
            ]
        }
    }
}