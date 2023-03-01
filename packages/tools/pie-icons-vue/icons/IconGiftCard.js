import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGiftCard',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--giftCard'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.646 2.969H3.354L1.219 5.104v5.792l2.135 2.135h9.292l2.135-2.135V5.104l-2.135-2.135zm.823 7.385l-1.365 1.365H3.896l-1.365-1.365V5.646l1.365-1.365h8.208l1.365 1.365v4.708zm-2.844-3.798L9.242 6.25l-.665-1.225a.691.691 0 00-1.154 0L6.758 6.25l-1.383.306a.648.648 0 00-.499.455.656.656 0 00.167.657l.953.97-.201 1.427a.665.665 0 00.954.674L8 10.1l1.251.639a.63.63 0 00.306.07.604.604 0 00.377-.123.639.639 0 00.271-.621l-.201-1.426.971-.971a.657.657 0 00-.35-1.112zm-1.75 1.391a.639.639 0 00-.184.552l.07.498-.437-.218a.665.665 0 00-.595 0l-.438.219.07-.5a.639.639 0 00-.236-.55l-.332-.342.498-.096a.639.639 0 00.446-.332L8 6.748l.236.43a.639.639 0 00.446.332l.5.096-.307.341z',
                fill: '#242E30'
            }
        })]);
    }
};
