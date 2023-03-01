import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialPinterestCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--pinterestCircleFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1611_690)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175zm3.211 8.671a2.975 2.975 0 01-2.144 1.426 1.88 1.88 0 01-1.522-.385.583.583 0 01-.131-.122 1.417 1.417 0 01-.123-.14l-.044.131c-.105.42-.21.831-.332 1.251a5.04 5.04 0 01-.998 1.812l-.105.14v-.053a6.125 6.125 0 010-2.117c.22-.98.455-1.96.683-2.932a.464.464 0 000-.245 2.223 2.223 0 010-1.487 1.164 1.164 0 01.63-.762.761.761 0 011.076.665c.01.297-.031.593-.122.875-.114.412-.245.823-.36 1.234a.875.875 0 00.893 1.173 1.637 1.637 0 001.348-.814c.33-.525.512-1.13.525-1.75a2.722 2.722 0 00-.245-1.391A2.25 2.25 0 008.726 5.12a2.835 2.835 0 00-2.572.49 2.573 2.573 0 00-.552 3.447.324.324 0 01.053.22c-.044.218-.105.428-.158.647-.052.218-.087.157-.218.096a1.978 1.978 0 01-.875-.875 3.5 3.5 0 01.48-3.859 3.806 3.806 0 012.53-1.304 4.533 4.533 0 012.108.202 3.5 3.5 0 012.345 3.5 4.288 4.288 0 01-.656 2.161z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1611_690'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
