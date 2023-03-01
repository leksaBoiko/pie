import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFingerprintLarge',
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
            class: 'c-pieIcon c-pieIcon--fingerprintLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.1 5.343l-.586-1.646A13.842 13.842 0 0124.697 6.76L23.49 8.02A12.128 12.128 0 0011.1 5.343zm3.08 1.697a13.842 13.842 0 00-7.744 2.362l.98 1.453a12.092 12.092 0 0117.894 5.32l1.61-.683A13.807 13.807 0 0014.18 7.04zm-.613 3.964a11.611 11.611 0 00-7.673 2.879l1.155 1.312a9.86 9.86 0 016.518-2.441 9.695 9.695 0 019.774 9.625h1.75a11.445 11.445 0 00-11.524-11.375zm-.28 3.955a7.936 7.936 0 00-7 4.165l1.54.831a6.195 6.195 0 0111.673 2.94 16.87 16.87 0 01-.875 5.031l1.645.604c.62-1.815.95-3.717.98-5.635a7.944 7.944 0 00-7.963-7.936zm.71 3.92a4.76 4.76 0 00-5.452 3.902l1.75.35a3.01 3.01 0 013.386-2.537 2.625 2.625 0 011.75 1.268c.423.717.563 1.566.394 2.38a9.834 9.834 0 01-2.048 3.807l1.313 1.163a11.647 11.647 0 002.45-4.62 5.066 5.066 0 00-.613-3.63 4.376 4.376 0 00-2.93-2.083zm-1.75 4.235a8.112 8.112 0 01-1.34 2.695l1.234 1.242a9.994 9.994 0 001.75-3.421l-1.645-.516z',
                fill: '#242E30'
            }
        })]);
    }
};
