import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClock',
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
            class: 'c-pieIcon c-pieIcon--clock',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 14.781A6.782 6.782 0 1 1 14.781 8 6.79 6.79 0 0 1 8 14.781Zm0-12.25A5.469 5.469 0 1 0 8 13.47 5.469 5.469 0 0 0 8 2.53Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm10.284 10.31-2.94-1.759V4.5h1.312v3.308l2.31 1.382-.682 1.12Z',
            },
        })]);
    },
};
