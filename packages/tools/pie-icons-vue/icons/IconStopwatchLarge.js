import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStopwatchLarge',
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
            class: 'c-pieIcon c-pieIcon--stopwatchLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M28.25 17.75a11.375 11.375 0 0 1-21.875 4.375h1.934a9.625 9.625 0 1 0 0-8.75H6.375a11.375 11.375 0 0 1 9.625-7v-1.75h-3.5l.604-1.75h7.542l.604 1.75h-3.5v1.794a11.375 11.375 0 0 1 10.5 11.331ZM16 11.625v6.624l4.804 2.879.875-1.506-3.929-2.37v-5.627H16Zm-6.125 7h-5.25l.787 1.75h4.463v-1.75Zm0-3.5H2l.788 1.75h7.087v-1.75Z',
            },
        })]);
    },
};
