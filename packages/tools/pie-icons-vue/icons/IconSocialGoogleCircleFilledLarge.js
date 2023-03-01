import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialGoogleCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--googleCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M16 28.25a12.25 12.25 0 110-24.5 12.25 12.25 0 010 24.5zM8.729 16.254c.026.028.046.06.06.096.016.115.03.232.045.35.033.275.067.553.122.823.116.573.307 1.13.569 1.653a6.815 6.815 0 001.557 2.135 7.253 7.253 0 005.574 1.995A7.228 7.228 0 0019.99 22.3c.342-.209.665-.449.962-.718a6.764 6.764 0 001.846-2.957c.315-1.07.416-2.19.298-3.299a3.113 3.113 0 00-.047-.33c-.024-.14-.05-.28-.05-.422h-6.868v2.87h4.016v.175a3.404 3.404 0 01-1.4 2.091 4.13 4.13 0 01-1.794.691 4.505 4.505 0 01-1.872-.07 4.445 4.445 0 01-2.424-1.627 4.668 4.668 0 01-.665-1.234 3.972 3.972 0 01-.271-1.75 4.548 4.548 0 011.811-3.413 4.2 4.2 0 012.354-.875 4.07 4.07 0 013.071 1.068l2.083-2.021-.438-.359a6.887 6.887 0 00-3.5-1.47 7.367 7.367 0 00-7.971 4.883 6.624 6.624 0 00-.35 1.522l-.052.473v.726z',
                fill: '#242E30'
            }
        })]);
    }
};
