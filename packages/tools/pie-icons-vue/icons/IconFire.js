import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFire',
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
            class: 'c-pieIcon c-pieIcon--fire'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M8.24 2.56L5.082 5.72l-.002.002a4.477 4.477 0 00-.004 6.302 4.364 4.364 0 006.278.002 4.459 4.459 0 00-.003-6.304L8.24 2.56zm-2.518 8.833l-.11.107.109-.108.001.001zm.666-.194a2.864 2.864 0 003.669-.013 256.57 256.57 0 00-1.833-1.817L6.388 11.2zm4.366.24l.064.061-.063-.062v.001zm.197-1.481a256.172 256.172 0 00-2.208-2.18l-.53-.516-2.722 2.713a2.977 2.977 0 01.652-3.196L8.233 4.69l2.05 2.086.006.005a2.961 2.961 0 01.663 3.177z',
                fill: '#242E30'
            }
        })]);
    }
};
