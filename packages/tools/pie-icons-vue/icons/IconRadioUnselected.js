import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRadioUnselected',
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
            class: 'c-pieIcon c-pieIcon--radioUnselected',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781Zm0 12.25A5.47 5.47 0 0 1 2.531 8 5.47 5.47 0 0 1 8 2.531 5.47 5.47 0 0 1 13.469 8 5.47 5.47 0 0 1 8 13.469Z',
            },
        })]);
    },
};
