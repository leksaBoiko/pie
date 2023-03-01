import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserHighlight',
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
            class: 'c-pieIcon c-pieIcon--userHighlight'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.656 1.875H7.344V4.5h1.312V1.875z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.04 3.085l-1.003 2.003 1.174.587 1.003-2.002-1.174-.588z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M4.961 3.082l-1.174.587L4.79 5.673l1.173-.588-1.002-2.003z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.261 12.76a3.29 3.29 0 00-2.441-2.047l.087-.07a2.695 2.695 0 000-3.824 2.774 2.774 0 00-3.815 0 2.695 2.695 0 000 3.824l.088.07a3.29 3.29 0 00-2.441 2.047l-.499 1.365h1.4l.332-.875a2.022 2.022 0 011.943-1.26h2.17a2.02 2.02 0 011.942 1.26l.333.875h1.4l-.499-1.365zm-5.25-5.014a1.435 1.435 0 011.96 0 1.391 1.391 0 11-1.96 0z',
                fill: '#242E30'
            }
        })]);
    }
};
