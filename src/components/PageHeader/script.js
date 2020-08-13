'use strict';
export default {
    name: 'PageHeader',
    data() {
        return {
            isBurgerOpen: false,
            isSubmenuOpen: false,
            isFullScreen: undefined,
            menuItems: [
                {
                    name: 'Меню',
                    link: '#',
                    submenuItems: [
                        {
                            name: 'Меню',
                            link: '#'
                        },
                        {
                            name: 'Меню',
                            link: '#'
                        }]
                },
                {
                    name: 'Меню',
                    link: '#',
                    submenuItems: [
                        {
                            name: 'Меню',
                            link: '#'
                        },
                        {
                            name: 'Меню',
                            link: '#'
                        }]
                },
                {
                    name: 'Меню',
                    link: '#',
                    submenuItems: [
                        {
                            name: 'Меню',
                            link: '#'
                        }]
                },
                {
                    name: 'Меню',
                    link: '#',
                    submenuItems: [
                        {
                            name: 'Меню',
                            link: '#'
                        }]
                },
                {
                    name: 'Меню',
                    link: '#',
                    submenuItems: []
                },
                {
                    name: 'Меню',
                    link: '#',
                    submenuItems: [
                        {
                            name: 'Меню',
                            link: '#'
                        },
                        {
                            name: 'Меню',
                            link: '#'
                        }]
                },
            ]
        }
    },
    methods: {
        onResize() {
            if (document.documentElement.clientWidth > 959) {
                this.isBurgerOpen = false
                this.addOpenSubmenuHandler();
            } else {
                this.closeSubmenu();
                this.removeOpenSubmenuHandler();
            }
        },
        openSubmenu() {
            this.isSubmenuOpen = true;
        },
        closeSubmenu() {
            this.isSubmenuOpen = false;
        },
        removeOpenSubmenuHandler() {
            this.$refs.menuLink.forEach(item => item.onmouseenter = undefined)
        },
        addOpenSubmenuHandler() {
            const here = this;
            this.$refs.menuLink.forEach(item => {
                item.onmouseenter = () => {
                    if (!this.isSubmenuOpen) {
                        this.openSubmenu();
                        this.$refs.menu.onmouseleave = function () {
                            here.closeSubmenu();
                            this.onmouseleave = undefined;
                        };
                    }
                }
            })
        }
    },
    created() {
        window.addEventListener('resize', this.onResize)
    },
    mounted() {
        if (document.documentElement.clientWidth > 959) {
            this.addOpenSubmenuHandler();
        }
    }
}