import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconThumbsDownLarge',
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
            class: 'c-pieIcon c-pieIcon--thumbsDownLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.53 13.944L26.5 7.39a4.375 4.375 0 00-4.086-2.765H3.75v1.75h6.825a9.976 9.976 0 00-.7 3.938c-.01 1.634.247 3.26.761 4.812H3.75v1.75h9.293a.876.876 0 01.743.429l5.18 10.071h.534a3.411 3.411 0 003.343-4.078l-.98-4.89 4.76-1.12a2.625 2.625 0 001.907-3.343zm-1.75 1.216a.875.875 0 01-.56.42l-6.405 1.514 1.313 6.545a1.68 1.68 0 01-.342 1.382c-.203.251-.478.434-.787.525l-4.681-9.1a2.625 2.625 0 00-2.275-1.321H12.5a12.416 12.416 0 01-.875-4.813 8.207 8.207 0 01.875-3.937h9.914a2.625 2.625 0 012.423 1.619l2.022 6.475c.06.22.032.456-.079.656v.035z',
                fill: '#242E30'
            }
        })]);
    }
};
