import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlusCircle',
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
            class: 'c-pieIcon c-pieIcon--plusCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.795 3.205a6.781 6.781 0 100 9.625 6.79 6.79 0 000-9.625zm-.927 8.662a5.469 5.469 0 11-7.734-7.735 5.469 5.469 0 017.734 7.736z',
                fill: '#242E30'
            }
        })]);
    }
};
