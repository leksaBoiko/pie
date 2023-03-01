import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPetSupplies',
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
            class: 'c-pieIcon c-pieIcon--petSupplies'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.637 8.787c0 .307-.2.552-.446.552-.245 0-.446-.245-.446-.552 0-.306.201-.55.446-.55s.446.244.446.55z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.055 10.432v.018h-.018a.124.124 0 01.018.053.758.758 0 01.052.28.881.881 0 01-1.373.735.881.881 0 01-1.374-.735c0-.097.026-.193.052-.28l.027-.053v-.018c.157-.42.673-.735 1.303-.735.63 0 1.155.316 1.313.736z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M4.176 10.144c.247 0 .446-.247.446-.552 0-.304-.2-.55-.446-.55s-.446.246-.446.55c0 .305.2.552.446.552z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.784 8.787c0 .307-.202.552-.447.552s-.446-.245-.446-.552c0-.306.201-.55.446-.55s.447.244.447.55z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.352 9.041c-.245 0-.446.245-.446.551 0 .307.201.552.446.552s.447-.245.447-.552c0-.306-.202-.55-.447-.55z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M14.221 8.219a1.665 1.665 0 01-1.277.481v.009a2.791 2.791 0 011.837 2.616c0 1.54-1.251 2.8-2.8 2.8a2.79 2.79 0 01-1.872-.726v.726h-8.69V4.692c0-1.146.937-2.082 2.083-2.082h4.524a2.08 2.08 0 012.083 2.074 1.8 1.8 0 01.253-.324c.64-.639 1.76-.639 2.398 0 .271.271.429.612.472.989.36.043.71.192.99.472a1.706 1.706 0 010 2.398zm-3.036-2.59c.131.656-.035 1.268-.455 1.688l-.009-.008-.612.542v1.225l1.137-1.216c.429-.429 1.041-.604 1.698-.473a.38.38 0 00.34-.105.383.383 0 000-.533.392.392 0 00-.533 0 .66.66 0 01-.927 0 .66.66 0 010-.928.375.375 0 000-.534.392.392 0 00-.534 0 .38.38 0 00-.105.342zM8.026 3.922H3.502c-.428 0-.77.35-.77.77v.657h6.064v-.657c0-.428-.35-.77-.77-.77zm-5.294 2.74v6.15h6.064v-6.15H2.732zm7.753 4.663a1.486 1.486 0 102.975 0c0-.823-.665-1.488-1.488-1.488-.822 0-1.487.665-1.487 1.488z',
                fill: '#242E30'
            }
        })]);
    }
};
