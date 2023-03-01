import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserPartnershipLarge',
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
            class: 'c-pieIcon c-pieIcon--userPartnershipLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.125 14.25a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zm0-7a2.625 2.625 0 110 5.25 2.625 2.625 0 010-5.25zm15.75 7a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zm0-7a2.625 2.625 0 110 5.25 2.625 2.625 0 010-5.25zm5.25 13.633v7.367h-1.75v-7.367a4.058 4.058 0 00-4.113-4.008 4.174 4.174 0 00-3.5 1.951L16 24.62l-3.719-5.775a4.182 4.182 0 00-3.543-1.969 4.06 4.06 0 00-4.113 4.008v7.367h-1.75v-7.367a5.819 5.819 0 015.863-5.758 5.897 5.897 0 015.022 2.791l2.24 3.5 2.249-3.5a5.898 5.898 0 015.014-2.791 5.818 5.818 0 015.862 5.758zm-17.754 1.496l3.5 3.5-1.242 1.242-2.004-2.012v3.141h-1.75V23a.875.875 0 01.543-.805.875.875 0 01.953.184zM22.125 23v5.25h-1.75v-3.141l-2.004 2.012-1.242-1.242 3.5-3.5a.875.875 0 01.953-.184.874.874 0 01.543.805z',
                fill: '#242E30'
            }
        })]);
    }
};
