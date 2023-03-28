import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNumberSymbolLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--numberSymbolLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm23 13.375.245-1.75H20.62l.63-4.375H19.5l-.639 4.375h-4.375l.639-4.375h-1.75l-.639 4.375H9.997l-.245 1.75h2.687l-.77 5.25h-2.67l-.244 1.75h2.625l-.63 4.375h1.75l.639-4.375h4.375l-.64 4.375h1.75l.64-4.375h2.695l.245-1.75H19.56l.814-5.25H23Zm-5.189 5.25h-4.375l.814-5.25h4.375l-.814 5.25Z',
            },
        })]);
    },
};
