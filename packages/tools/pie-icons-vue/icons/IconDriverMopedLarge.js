import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDriverMopedLarge',
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
            class: 'c-pieIcon c-pieIcon--driverMopedLarge'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_4_864)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8.771 19.625H6.925l.464-1.374a6.886 6.886 0 016.545-4.751h4.882a6.886 6.886 0 016.545 4.751l.464 1.374h-1.846l-.271-.823a5.153 5.153 0 00-4.892-3.552h-4.882a5.154 5.154 0 00-4.891 3.552l-.272.823zm4.2-8.409a4.813 4.813 0 116.805-6.807 4.813 4.813 0 01-6.805 6.807zM14.205 10a3.062 3.062 0 100-4.375 3.08 3.08 0 000 4.375zm13.606 11.839v1.75h-5.766a.726.726 0 00-.534.227l-2.257 2.249c.119.32.18.657.183.997a3.064 3.064 0 01-5.729 1.53 3.062 3.062 0 01-.194-2.597l-2.179-2.179a.725.725 0 00-.534-.227H5v-1.75h5.801a2.563 2.563 0 011.75.735l2.013 2.012a3.045 3.045 0 013.649.044l2.056-2.056a2.528 2.528 0 011.75-.735h5.792zm-10.123 5.25a1.312 1.312 0 10-.385.902c.246-.247.384-.58.384-.928v.026z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_4_864'
            }
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)'
            }
        })])])]);
    }
};
