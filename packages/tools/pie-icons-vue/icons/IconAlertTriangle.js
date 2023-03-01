import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertTriangle',
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
            class: 'c-pieIcon c-pieIcon--alertTriangle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.656 5.375H7.344V8h1.312V5.375z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8 10.625a.875.875 0 100-1.75.875.875 0 000 1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.408 13.031H2.591a1.496 1.496 0 01-1.33-.796 1.593 1.593 0 01.044-1.61l5.408-8.662A1.505 1.505 0 018 1.219a1.505 1.505 0 011.286.726l5.408 8.68a1.593 1.593 0 010 1.627 1.496 1.496 0 01-1.287.78zM8 2.531a.192.192 0 00-.175.105l-5.408 8.671a.297.297 0 000 .298.2.2 0 00.184.114h10.806a.2.2 0 00.184-.114.297.297 0 000-.298l-5.416-8.67A.192.192 0 008 2.53z',
                fill: '#242E30'
            }
        })]);
    }
};
