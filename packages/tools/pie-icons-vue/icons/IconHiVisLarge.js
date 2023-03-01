import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHiVisLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--hiVisLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.774 13.375a.978.978 0 01-.98-.98V6.349c0-.954-.77-1.724-1.724-1.724h-2.774l-.883.884h-6.817l-.883-.884H8.93c-.954 0-1.724.77-1.724 1.724v6.046c0 .543-.437.98-.98.98-.883 0-1.601.717-1.601 1.601v9.669a2.734 2.734 0 002.73 2.73h6.781a2.72 2.72 0 001.855-.744 2.72 2.72 0 001.855.744h6.782a2.737 2.737 0 002.747-2.73v-9.669c0-.884-.718-1.601-1.601-1.601zm-4.752-7l2.022-.018v6.047a2.741 2.741 0 002.581 2.73v2.695h-8.75v-7.306l4.148-4.148zm-5.897 14.936h-8.75v-1.75h8.75v1.75zm1.75-1.75h8.75v1.75h-8.75v-1.75zm.788-12.302L16 8.912l-.875-.875-.779-.778h3.317zm-8.707 5.136v-6.02h2.03l4.139 4.139v7.306h-8.75v-2.695a2.741 2.741 0 002.581-2.73zm5.189 13.23h-6.79a.978.978 0 01-.98-.98V23.07h8.75v1.575c0 .543-.438.98-.98.98zm10.5 0h-6.781a.98.98 0 01-.989-.98V23.07h8.75v1.575c0 .543-.438.98-.98.98z',
                fill: '#242E30'
            }
        })]);
    }
};
