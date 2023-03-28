import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialFacebookCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--facebookCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 3.671a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 10.5-10.5A10.5 10.5 0 0 1 16 26.43v-.009Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M14.434 12.185v1.986H12.15v2.625h2.284v6.283a8.75 8.75 0 0 0 2.817 0V16.77h2.091l.403-2.625h-2.494V12.5a1.295 1.295 0 0 1 1.461-1.409h1.138V8.86a13.938 13.938 0 0 0-2.013-.175 3.176 3.176 0 0 0-3.403 3.5Z',
            },
        })]);
    },
};
