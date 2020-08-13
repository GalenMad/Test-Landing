<template>
    <section class="subscribe-section">

        <div class="subscribe-section__inner">

            <transition name="success">
                <div class="success-message" v-if="submitStatus === 'SUCCESS'">
                    <div class="success-message__icon"></div>
                    Уважаемый {{userName}}, спасибо за подписку!
                </div>
            </transition>

            <h2 class="subscribe-section__heading">
                Подпишитесь на рассылку
            </h2>

            <form class="subscribe-form" @submit.prevent="submit" novalidate>

                <label class="form-control" for="main-subscribe-name">
                    <span class="form-control__label"
                          :class="{'invalid-label': $v.userName.$error}">
                        <span v-if="!$v.userName.alpha">Цифры в имени не допустимы</span>
                        <span v-else-if="!$v.userName.required && $v.userName.$error">Заполните поле</span>
                        <span v-else>Имя</span>
                    </span>
                    <input class="form-control__input" id="main-subscribe-name"
                           :class="{'invalid-control': $v.userName.$error}"
                           type="text"
                           :value="userName"
                           @change="setName($event.target.value)">
                </label>

                <label class="form-control" for="main-subscribe-email">
                    <span class="form-control__label"
                          :class="{'invalid-label': $v.userEmail.$error}">
                        <span v-if="!$v.userEmail.email">Введите корректный email</span>
                        <span v-if="!$v.userEmail.required && $v.userEmail.$error">Заполните поле</span>
                    </span>
                    <input class="form-control__input"
                           :class="{'invalid-control': $v.userEmail.$error}"
                           id="main-subscribe-email"
                           type="email"
                           placeholder="example@mail.com"
                           :value="userEmail"
                           @change="setEmail($event.target.value)">
                </label>

                <label class="form-control form-control_wide" for="main-subscribe-comment">
                    <span class="form-control__label"
                          :class="{'invalid-label': $v.userComment.$error}">
                        <span v-if="!$v.userComment.required && $v.userComment.$error">Заполните поле</span>
                    </span>
                    <textarea class="form-control__input form-control__input_textarea"
                          :class="{'invalid-control': $v.userComment.$error}"
                          id="main-subscribe-comment"
                          placeholder="Комментарий"
                          :value="userComment"
                          @change="setComment($event.target.value)">
                </textarea>
                </label>

                <button class="submit-button"
                        type="submit"
                        :disabled="submitStatus === 'PENDING' || submitStatus === 'SUCCESS'"
                        :class="{
                                'submit-button_success': submitStatus === 'SUCCESS',
                                'submit-button_sending': submitStatus === 'SENDING',
                            }"
                >
                    Подписаться
                </button>

            </form>

        </div>

    </section>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>