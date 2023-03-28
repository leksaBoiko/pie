import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTrash',
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
            class: 'c-pieIcon c-pieIcon--trash',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M9.864 1.219H6.136L5.49 2.53h5.022L9.864 1.22Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M1.875 3.844v1.312h.962l.788 8.243a1.531 1.531 0 0 0 1.522 1.382h5.723a1.53 1.53 0 0 0 1.505-1.382l.779-8.243h.971V3.844H1.875Zm9.205 9.406a.228.228 0 0 1-.219.201H5.14a.228.228 0 0 1-.219-.201l-.77-8.094h7.7l-.77 8.094Z',
            },
        })]);
    },
};
