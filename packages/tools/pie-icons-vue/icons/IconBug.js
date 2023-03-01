import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBug',
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
            class: 'c-pieIcon c-pieIcon--bug'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.156 5.83l1.969-1.243V3.03L11.5 4.719h-.245a3.273 3.273 0 00-6.423 0h-.288L1.875 3.03v1.557L3.844 5.83v1.514H1v1.312h2.844v1.514l-1.969 1.242v1.558l2.109-1.339a4.139 4.139 0 008.032 0l2.109 1.339v-1.558l-1.969-1.242V8.656H15V7.344h-2.844V5.83zM8 3.406A1.96 1.96 0 019.846 4.72H6.154A1.96 1.96 0 018 3.406zm2.844 7.219a2.844 2.844 0 01-5.688 0V6.031h5.688v4.594z',
                fill: '#242E30'
            }
        })]);
    }
};
