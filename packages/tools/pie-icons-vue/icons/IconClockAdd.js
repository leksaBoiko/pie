import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockAdd',
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
            class: 'c-pieIcon c-pieIcon--clockAdd'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.012 10.905L7.064 9.137V5.095h1.312v3.299l2.31 1.391-.674 1.12z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8 1.219A6.79 6.79 0 001.219 8c.002.497.057.993.166 1.479H2.75A5.469 5.469 0 118 13.469a6.607 6.607 0 01-.726-.053h-.28v1.287c.333.048.67.074 1.006.078A6.781 6.781 0 108 1.22z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.65 10.791l-1.969.018V8.823H4.37v1.968H2.4v1.313l1.969-.018v1.986H5.68v-1.968H7.65V10.79z',
                fill: '#242E30'
            }
        })]);
    }
};
