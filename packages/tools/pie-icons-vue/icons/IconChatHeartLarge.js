import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatHeartLarge',
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
            class: 'c-pieIcon c-pieIcon--chatHeartLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.933 9.227a3.63 3.63 0 00-5.25 0l-.683.71-.709-.71a3.621 3.621 0 00-5.206 0 3.973 3.973 0 000 5.434l5.924 6.125 5.932-6.125a3.981 3.981 0 00-.008-5.434zm-1.252 4.21L16 18.248l-4.681-4.813a2.214 2.214 0 010-2.983 1.881 1.881 0 012.712 0l1.015 1.023a1.322 1.322 0 001.838 0l1.067-1.024a1.918 1.918 0 011.383-.577 1.873 1.873 0 011.347.56 2.213 2.213 0 010 3.001z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25.625 4.625H6.375A2.625 2.625 0 003.75 7.25v21.875h2.266l4.988-4.996a.92.92 0 01.621-.254h14a2.625 2.625 0 002.625-2.625v-14a2.625 2.625 0 00-2.625-2.625zM26.5 21.25a.875.875 0 01-.875.875h-14c-.696 0-1.363.278-1.855.77l-4.27 4.27V7.25a.875.875 0 01.875-.875h19.25a.875.875 0 01.875.875v14z',
                fill: '#242E30'
            }
        })]);
    }
};
