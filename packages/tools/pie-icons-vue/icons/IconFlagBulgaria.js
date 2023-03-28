import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagBulgaria',
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
            class: 'c-pieIcon c-pieIcon--bulgaria',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#496E2D',
                d: 'M15.002 7.999a6.91 6.91 0 0 0-.437-2.434L8 5.259l-6.563.306a6.987 6.987 0 0 0 0 4.868L8 10.739l6.564-.306a6.91 6.91 0 0 0 .437-2.434Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M8.001 15a7 7 0 0 0 6.564-4.567H1.438A7 7 0 0 0 8 15Z',
            },
        }), h('path', {
            attrs: {
                fill: '#EEE',
                d: 'M1.438 5.565h13.127a7.002 7.002 0 0 0-13.127 0Z',
            },
        })]);
    },
};
