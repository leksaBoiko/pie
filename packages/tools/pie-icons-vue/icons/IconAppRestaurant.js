import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAppRestaurant',
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
            class: 'c-pieIcon c-pieIcon--appRestaurant'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.906 4.395a2.519 2.519 0 00-.796-1.829l-1.015-.971a1.374 1.374 0 00-.945-.376H4.867c-.346 0-.679.135-.927.376l-1.032.963a2.537 2.537 0 00-.814 1.846 2.529 2.529 0 00.875 1.89v6.519a1.969 1.969 0 001.969 1.968h6.125a1.969 1.969 0 001.968-1.969V6.295a2.545 2.545 0 00.875-1.899zM3.8 3.52l1.067-.989h6.318l1.024.963a1.244 1.244 0 01.385.875 1.19 1.19 0 01-.945 1.155 1.295 1.295 0 01-1.409-.578H9.102a1.295 1.295 0 01-2.205 0H5.76a1.295 1.295 0 01-1.409.578 1.19 1.19 0 01-.945-1.12A1.199 1.199 0 013.8 3.52zm7.263 9.949H4.936a.665.665 0 01-.656-.656v-5.95A2.625 2.625 0 006.33 6.31a2.625 2.625 0 003.342 0 2.625 2.625 0 002.048.551v5.95a.665.665 0 01-.656.657zM8.874 11.5a.875.875 0 11-1.75 0 .875.875 0 011.75 0z',
                fill: '#242E30'
            }
        })]);
    }
};
