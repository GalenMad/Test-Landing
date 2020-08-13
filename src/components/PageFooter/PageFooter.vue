<template>
    <footer class="page-footer">

        <div class="container page-footer__inner">

            <div class="page-footer__props">
                <a class="page-footer__logo-container" href="#">
                    <img src="../../assets/img/page-logo.svg" alt="Logotype" class="logo">
                </a>
                <span class="page-footer__props-address">
                г.&nbsp;Москва, метро Бауманская, ул.&nbsp;Бауманская, дом&nbsp;44
            </span>
                <span class="page-footer__props-phone">
             +7 000 000 00 00
            </span>
            </div>

            <div class="page-footer__menu">

                <ul class="page-footer__nav">
                    <li class="page-footer__nav-item" v-for="item of menuItems">
                        <a :href="item.link" class="page-footer__nav-link">{{item.name}}</a>
                    </li>
                </ul>

                <div class="page-footer__social">
                    <h3 class="page-footer__social-heading">Мы в соц. сетях</h3>
                    <ul class="social-list">
                        <li class="social-list__item" v-for="social in socials">
                            <a :href="social.link" class="social-list__link">
                                {{social.title}}
                                <img class="social-list__icon" :src="social.image" :alt="social.title">
                            </a>
                        </li>
                    </ul>
                </div>

                <form class="page-footer__subscribe" @submit.prevent="submit" novalidate>
                    <h3 class="page-footer__social-heading">
                        <label for="footer-subscribe"
                               :class="{'invalid-label': submitStatus === 'ERROR' && $v.$error}">
                            <span v-if="submitStatus === 'ERROR' && $v.$error">Введите корректный email</span>
                            <span v-else-if="submitStatus === 'SENDING'">Отправляем…</span>
                            <span v-else-if="submitStatus === 'SUCCESS'">Поздравляем, вы подписаны!</span>
                            <span v-else>Подписка на новости</span>
                        </label>
                    </h3>
                    <input class="form-control__input page-footer__input"
                           :disabled="submitStatus === 'PENDING' || submitStatus === 'SUCCESS'"
                           :class="{'invalid-control': submitStatus === 'ERROR' && $v.$error,
                                    'disabled-control': submitStatus === 'SUCCESS'}"
                           id="footer-subscribe"
                           placeholder="example@mail.com"
                           type="email"
                           v-model="userEmail"
                    >
                    <button class="submit-button"
                            type="submit"
                            :disabled="submitStatus === 'PENDING' || submitStatus === 'SUCCESS'"
                            :class="{'submit-button_success': submitStatus === 'SUCCESS',
                                    'submit-button_sending': submitStatus === 'SENDING'}">
                        Ok
                    </button>
                </form>

            </div>

        </div>

        <div class="footer-bottom">
            <div class="footer-bottom__inner container">
                <span class="footer-bottom__copyright">© ООО «Глобус», 2016–2020</span>
                <span class="footer-bottom__link-container">
                <a class="footer-bottom__link link" href="#">Политика конфиденциальности</a>
                <a class="footer-bottom__link link" href="#">Cookies</a>
            </span>
            </div>
        </div>

    </footer>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>