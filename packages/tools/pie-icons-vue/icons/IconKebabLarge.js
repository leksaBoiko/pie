import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKebabLarge',
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
            class: 'c-pieIcon c-pieIcon--kebabLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.5 4.625v-1.75h-21v1.75h9.625V7.25H11.52a3.789 3.789 0 00-2.809 1.251 3.841 3.841 0 00-.945 2.958L9.053 23.13a3.78 3.78 0 003.744 3.369h2.328v2.625h1.75V26.5h2.328a3.788 3.788 0 003.745-3.378l1.286-11.663a3.841 3.841 0 00-.945-2.958A3.788 3.788 0 0020.48 7.25h-3.605V4.625H26.5zM20.48 9a1.986 1.986 0 011.505.674 2.065 2.065 0 01.508 1.592l-.22 1.978-4.523-.744v1.75l4.331.726-.56 5.084-3.771-.674v1.75l3.579.648-.079 1.146a2.03 2.03 0 01-2.047 1.82h-6.405a2.021 2.021 0 01-2.004-1.811l-.482-4.314 3.938-.875v-1.846l-4.13.971-.612-5.574a2.065 2.065 0 01.507-1.592A1.986 1.986 0 0111.52 9h8.96z',
                fill: '#242E30'
            }
        })]);
    }
};
