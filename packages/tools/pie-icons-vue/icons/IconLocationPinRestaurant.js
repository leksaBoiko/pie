import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationPinRestaurant',
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
            class: 'c-pieIcon c-pieIcon--locationPinRestaurant'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_3_53)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8 12.436l3.29-3.325a4.734 4.734 0 000-6.624 4.602 4.602 0 00-6.58 0 4.734 4.734 0 000 6.624L8 12.436zm-2.354-9.03a3.299 3.299 0 014.708 0 3.404 3.404 0 010 4.778L8 10.564l-2.354-2.38a3.404 3.404 0 010-4.778zM4.5 13.47h7v1.312h-7V13.47z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_3_53'
            }
        }, [h('rect', {
            attrs: {
                width: '16',
                height: '16',
                fill: '#fff'
            }
        })])])]);
    }
};
