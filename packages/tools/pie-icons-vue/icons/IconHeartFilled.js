import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHeartFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--heartFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 14.195 2.234 8.263a3.745 3.745 0 0 1 0-5.128 3.413 3.413 0 0 1 4.9 0l.875.875.875-.875a3.421 3.421 0 0 1 4.908 0 3.754 3.754 0 0 1 0 5.128L8 14.195Z',
            },
        })]);
    },
};
