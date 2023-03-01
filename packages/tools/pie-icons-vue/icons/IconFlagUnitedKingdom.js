import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagUnitedKingdom',
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
            class: 'c-pieIcon c-pieIcon--unitedKingdom'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15A7 7 0 108 1a7 7 0 000 14z',
                fill: '#EEE'
            }
        }), h('path', {
            attrs: {
                d: 'M2.45 3.737A6.973 6.973 0 001.24 6.173h3.642L2.45 3.74v-.003zm12.31 2.436a6.973 6.973 0 00-1.206-2.433L11.12 6.173h3.64zM1.24 9.827c.239.882.648 1.709 1.206 2.433L4.88 9.827H1.241zm11.02-7.38a6.972 6.972 0 00-2.434-1.204v3.64l2.434-2.434v-.003zM3.74 13.553a6.973 6.973 0 002.436 1.203v-3.64L3.74 13.553zM6.173 1.24A6.973 6.973 0 003.74 2.446l2.434 2.437V1.24zm3.653 13.518a6.971 6.971 0 002.434-1.206L9.826 11.12v3.64zm1.29-4.932l2.434 2.433a6.972 6.972 0 001.209-2.433h-3.643z',
                fill: '#0052B4'
            }
        }), h('path', {
            attrs: {
                d: 'M14.94 7.087H8.913V1.06a7.07 7.07 0 00-1.826 0v6.027H1.06a7.07 7.07 0 000 1.826h6.027v6.027c.606.079 1.22.079 1.826 0V8.913h6.027a7.061 7.061 0 000-1.826z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M9.827 9.827l3.122 3.122c.143-.143.28-.293.41-.448l-2.671-2.674h-.861zm-3.654 0l-3.122 3.122c.143.143.293.28.448.41l2.674-2.671v-.861zm0-3.654L3.051 3.051a7.02 7.02 0 00-.41.448l2.671 2.674h.861zm3.654 0l3.122-3.122a7.027 7.027 0 00-.448-.41L9.827 5.312v.861z',
                fill: '#D80027'
            }
        })]);
    }
};
