'use strict';
export default {
    name: 'NewsSection',
    data() {
        return {
            newsCount: 0
        }
    },
    methods: {
        updateNewsCount() {
            document.documentElement.clientWidth > 768 ? this.newsCount += 3 : this.newsCount += 1;
        }
    }
}