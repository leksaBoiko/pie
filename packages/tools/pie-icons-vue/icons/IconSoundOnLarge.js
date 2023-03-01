import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSoundOnLarge',
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
            class: 'c-pieIcon c-pieIcon--soundOnLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.625 3.995a48.276 48.276 0 01-4.008 3.439A49.96 49.96 0 019.63 10.75H6.375a2.625 2.625 0 00-2.625 2.625v5.25a2.625 2.625 0 002.625 2.625H9.63a48.311 48.311 0 018.995 6.755l.254.245h2.371V3.75h-2.398l-.227.245zM5.5 18.625v-5.25a.875.875 0 01.875-.875H9v7H6.375a.875.875 0 01-.875-.875zm14 7.823a48.503 48.503 0 00-3.841-3.264 48.638 48.638 0 00-4.909-3.308v-7.752c1.703-1 3.343-2.105 4.909-3.308A48.502 48.502 0 0019.5 5.552v20.896zM27.375 16A6.125 6.125 0 0123 21.871v-1.863a4.375 4.375 0 000-8.015v-1.864A6.125 6.125 0 0127.375 16z',
                fill: '#242E30'
            }
        })]);
    }
};
