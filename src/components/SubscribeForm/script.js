'use strict';
import {email, alpha, required} from 'vuelidate/lib/validators';

export default {
    name: 'SubscribeForm',
    data() {
        return {
            userEmail: '',
            userName: '',
            userComment: '',
            submitStatus: ''
        }
    },
    validations: {
        userEmail: {
            required,
            email
        },
        userName: {
            required,
            alpha
        },
        userComment: {
            required
        }
    },
    methods: {
        setEmail(value) {
            this.userEmail = value
            this.$v.userEmail.$touch()
        },
        setName(value) {
            this.userName = value
            this.$v.userName.$touch()
        },
        setComment(value) {
            this.userComment = value
            this.$v.userComment.$touch()
        },
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