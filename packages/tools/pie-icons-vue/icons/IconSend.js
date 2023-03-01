import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSend',
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
            class: 'c-pieIcon c-pieIcon--send'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.457 1.525a.937.937 0 00-.665-.271.665.665 0 00-.297.052L1.814 5.13a.936.936 0 000 1.75l2.047.875v4.454h4.305L9.13 14.3a.936.936 0 00.83.516h.045a.945.945 0 00.83-.621L14.65 2.558a.936.936 0 00.061-.342.918.918 0 00-.254-.691zM3.257 6.04l8.322-2.73-4.585 4.27-3.737-1.54zm1.9 4.804V8.219l.778.324.726.332.263.578.638 1.4-2.406-.01zm4.75 1.96L7.94 8.499l4.873-4.541-2.905 8.846z',
                fill: '#242E30'
            }
        })]);
    }
};
