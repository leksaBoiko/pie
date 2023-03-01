import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationPin',
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
            class: 'c-pieIcon c-pieIcon--locationPin'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.938 3.135a5.574 5.574 0 00-7.875 7.875L8 15l3.938-3.938a5.575 5.575 0 000-7.927zm-.928 7L8 13.101l-3.01-3.01a4.27 4.27 0 010-6.029 4.27 4.27 0 016.02 0 4.27 4.27 0 010 6.03v.043zM8 4.719A2.406 2.406 0 108 9.53 2.406 2.406 0 008 4.72zm0 3.5A1.094 1.094 0 118 6.03 1.094 1.094 0 018 8.22z',
                fill: '#242E30'
            }
        })]);
    }
};
