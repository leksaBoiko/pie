import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCashLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--cashLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M29.125 8.125H6.375v3.5h-3.5v12.25h22.75v-3.5h3.5V8.125Zm-5.25 14H4.625v-8.75h1.75v7h17.5v1.75Zm3.5-3.5H8.125v-8.75h19.25v8.75Zm-9.625-1.356a3.019 3.019 0 1 0-3.019-3.019 3.028 3.028 0 0 0 3.019 3.019Zm0-4.288a1.27 1.27 0 1 1 0 2.539 1.27 1.27 0 0 1 0-2.539Zm-4.375 2.144h-3.5v-1.75h3.5v1.75Zm12.25 0h-3.5v-1.75h3.5v1.75Z',
            },
        })]);
    },
};
