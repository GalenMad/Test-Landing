'use strict';
import {required, email} from 'vuelidate/lib/validators'
import okIcon from '../../assets/img/odnoklassniki-logo.svg';
import instagramIcon from '../../assets/img/instagram-logo.svg';
import facebookIcon from '../../assets/img/facebook-logo.svg';

export default {
    name: 'PageFooter',
    data() {
        return {
            userEmail: '',
            submitStatus: false,
            menuItems: [
                {
                    name: 'О компании',
                    link: '#'
                },
                {
                    name: 'Партнёрская программа',
                    link: '#'
                },
                {
                    name: 'Реклама',
                    link: '#'
                },
                {
                    name: 'Пресс-центр',
                    link: '#'
                },
                {
                    name: 'Вакансии',
                    link: '#'
                },
                {
                    name: 'Помощь',
                    link: '#'
                },
                {
                    name: 'Правила',
                    link: '#'
                }
            ],
            socials: [
                {
                    title: 'Facebook',
                    image: facebookIcon,
                    link: '#'
                },
                {
                    title: 'Одноклассники',
                    image: okIcon,
                    link: '#'
                },
                {
                    title: 'Instagram',
                    image: instagramIcon,
                    link: '#'
                },
            ]
        }
    },
    validations: {
        userEmail: {
            required,
            email
        }
    },
    methods: {
        submit() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR';
            } else {
                this.submitStatus = 'SENDING';
                setTimeout(() => {
                    this.submitStatus = 'SUCCESS'
                }, 2000)
            }
        }
    }
}