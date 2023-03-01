import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSync',
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
            class: 'c-pieIcon c-pieIcon--sync'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.875 2.164A5.906 5.906 0 0113.906 8a5.845 5.845 0 01-1.75 4.174l-.927-.928a4.587 4.587 0 000-6.492 4.507 4.507 0 00-2.354-1.251V4.78L6.25 2.75 8.875 1v1.164zM3.406 8a4.568 4.568 0 001.348 3.246 4.506 4.506 0 002.371 1.252V11.22l2.625 2.03L7.125 15v-1.164A5.906 5.906 0 012.094 8a5.845 5.845 0 011.75-4.174l.91.928A4.567 4.567 0 003.406 8z',
                fill: '#242E30'
            }
        })]);
    }
};
