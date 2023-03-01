import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChartIncrease',
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
            class: 'c-pieIcon c-pieIcon--chartIncrease'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.969 11.5H4.28v2.625H2.97V11.5zm4.375 2.625h1.312V9.75H7.344v4.375zm4.375 0h1.312V8H11.72v6.125zm.656-12.031h-3.5v1.312h2.047C8.455 6.25 6.092 7.344 2.75 7.344v1.312c3.631 0 6.309-1.225 8.969-4.156v1.75h1.312v-3.5a.665.665 0 00-.656-.656z',
                fill: '#242E30'
            }
        })]);
    }
};
