import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBike',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--bike',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.139 7.405 11 4.159a.218.218 0 0 1 0-.158.246.246 0 0 1 .158-.122l1.216-.447v-1.4l-1.627.613a1.514 1.514 0 0 0-.998 1.934l.359 1.015H9.75a2.433 2.433 0 0 0-1.925.962l-1.207 1.61-1.06-2.135h.692V4.72h-3.5V6.03h1.339l.726 1.461a2.87 2.87 0 0 0-.735-.105 2.826 2.826 0 1 0 2.826 2.818v-.201l1.969-2.66a1.111 1.111 0 0 1 .875-.438h.831l.254.718a2.844 2.844 0 1 0 1.313-.219h-.01ZM4.08 11.719a1.514 1.514 0 1 1 1.514-1.514 1.505 1.505 0 0 1-1.514 1.514Zm7.875 0a1.514 1.514 0 1 1 1.4-.933 1.505 1.505 0 0 1-1.4.933Z',
            },
        })]);
    },
};
