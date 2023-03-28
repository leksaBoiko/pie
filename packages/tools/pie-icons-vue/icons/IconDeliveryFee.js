import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDeliveryFee',
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
            class: 'c-pieIcon c-pieIcon--deliveryFee',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__a)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M13.127 1.735 7.8 3.686 4.64 10.502l7.28 3.37 3.159-6.808-1.952-5.329Zm-2.065 9.818L6.96 9.645l2.117-4.568 3.01-1.102 1.103 3.01-2.127 4.567ZM1.876 6.25H4.5V8H1.875V6.25ZM6.031 4.5H1V2.75h5.031V4.5Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__a',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
