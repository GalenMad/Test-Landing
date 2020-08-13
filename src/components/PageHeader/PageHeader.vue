<template>

    <header class="page-header"
            :class="{
                'page-header_burger-open': isBurgerOpen,
                'page-header_submenu-open': isSubmenuOpen
            }">

        <transition name="submenu-overlay" type="transition">
            <div class="page-header__submenu-overlay" v-if="isSubmenuOpen"></div>
        </transition>

        <transition name="burger-overlay" type="transition">
            <nav class="burger-menu" v-if="isBurgerOpen">
                <ul class="main-nav">
                    <li class="main-nav__item" v-for="item in menuItems">
                        <a v-bind:href="item.link" class="main-nav__link" ref="menuLink">{{ item.name }}</a>
                    </li>
                </ul>
                <ul class="user-nav">
                    <li class="user-nav__item">
                        <a href="#" class="user-nav__link">Регистрация</a>
                    </li>
                    <li class="user-nav__item">
                        <a href="#" class="user-nav__link">Вход</a>
                    </li>
                </ul>
                <ul class="service-nav">
                    <li class="service-nav__item">
                        <a href="#" class="service-nav__link">Режим работы</a>
                    </li>
                    <li class="service-nav__item">
                        <a href="#" class="service-nav__link">Правила посещения</a>
                    </li>
                </ul>
            </nav>
        </transition>

        <nav class="service-info">
            <ul class="service-nav">
                <li class="service-nav__item">
                    <a href="#" class="service-nav__link">Режим работы</a>
                </li>
                <li class="service-nav__item">
                    <a href="#" class="service-nav__link">Правила посещения</a>
                </li>
            </ul>
        </nav>
        <nav class="main-menu" ref="menu">
            <div class="main-menu__inner">
                <a class="main-menu__logo" href="#">
                    <img class="logo" src="../../assets/img/page-logo.svg" alt="Logotype">
                </a>
                <label class="main-menu__burger-control" for="burger-checkbox">
                    <input type="checkbox" id="burger-checkbox" v-model="isBurgerOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <ul class="main-nav">
                    <li class="main-nav__item" v-for="item in menuItems">
                        <a v-bind:href="item.link" class="main-nav__link" ref="menuLink">{{ item.name }}</a>
                        <transition name="submenu-fade">
                            <ul class="main-nav__submenu" v-if="item.submenuItems.length && isSubmenuOpen">
                                <li class="main-nav__submenu-item" v-for="subItem in item.submenuItems">
                                    <a class="main-nav__submenu-link" v-bind:href="subItem.link">{{ subItem.name }}</a>
                                </li>
                            </ul>
                        </transition>
                    </li>
                </ul>

                <transition name="burger-overlay">
                    <ul class="user-nav user-nav_burger" v-if="isBurgerOpen">
                        <li class="user-nav__item">
                            <a href="#" class="user-nav__link">Регистрация</a>
                        </li>
                        <li class="user-nav__item">
                            <a href="#" class="user-nav__link">Вход</a>
                        </li>
                    </ul>
                </transition>


                <ul class="user-nav">
                    <li class="user-nav__item">
                        <a href="#" class="user-nav__link">Регистрация</a>
                    </li>
                    <li class="user-nav__item">
                        <a href="#" class="user-nav__link">Вход</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>