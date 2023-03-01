import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHeartLarge',
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
            class: 'c-pieIcon c-pieIcon--heartLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 27.751L5.176 16.63a7.315 7.315 0 010-9.984 6.676 6.676 0 019.573 0L16 7.88l1.277-1.225a6.668 6.668 0 019.573 0 7.315 7.315 0 010 9.984L16 27.75zM9.963 6.375a4.926 4.926 0 00-3.5 1.505 5.504 5.504 0 000 7.525L16 25.249l9.573-9.844a5.504 5.504 0 000-7.525 4.927 4.927 0 00-3.535-1.505 4.978 4.978 0 00-3.562 1.523l-1.601 1.54a1.321 1.321 0 01-1.838 0l-1.53-1.558a4.944 4.944 0 00-3.544-1.505z',
                fill: '#242E30'
            }
        })]);
    }
};
