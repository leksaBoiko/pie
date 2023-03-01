import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinusCircle',
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
            class: 'c-pieIcon c-pieIcon--minusCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.596 7.344v1.312h6.808V7.344H4.596z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.795 3.205a6.781 6.781 0 100 9.625 6.792 6.792 0 000-9.625zm-.927 8.662a5.469 5.469 0 11-7.734-7.735 5.469 5.469 0 017.734 7.736z',
                fill: '#242E30'
            }
        })]);
    }
};
