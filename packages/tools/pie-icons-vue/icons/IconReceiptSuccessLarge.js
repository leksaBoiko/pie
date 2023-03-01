import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconReceiptSuccessLarge',
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
            class: 'c-pieIcon c-pieIcon--receiptSuccessLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.5 11.625h-7v1.75h7v-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M15.65 15.125h-4.9v1.75h3.447a8.444 8.444 0 011.453-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.5 25.494l-2.572-1.479a1.75 1.75 0 00-1.69 0l-.988.499V7.486l.989.525a1.75 1.75 0 001.688 0L12.5 6.506l2.625 1.488a1.75 1.75 0 001.75 0L19.5 6.506l2.625 1.479a1.75 1.75 0 001.689 0l.936-.499v6.239a8.361 8.361 0 011.75 1.085V4.573L22.939 6.47 19.5 4.494 16 6.463l-3.5-1.97-3.439 1.978L5.5 4.573v22.854l3.561-1.898 3.439 1.977 2.161-1.216a8.642 8.642 0 01-.875-1.496l-1.286.7z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M27.226 18.896a6.677 6.677 0 00-1.802-2.511 6.501 6.501 0 00-8.549 0 6.44 6.44 0 00-1.855 2.625 6.447 6.447 0 00-.394 1.75v.551a6.563 6.563 0 1012.644-2.45l-.044.035zm-6.081 7.263a4.813 4.813 0 01-4.813-4.813v-.551a4.78 4.78 0 01.56-1.75c.18-.318.397-.611.648-.875a4.786 4.786 0 017.149 0c.251.264.469.557.647.875a4.78 4.78 0 01.56 1.75v.551a4.822 4.822 0 01-4.751 4.813z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M24.418 20.34l-1.243-1.234-2.879 2.879-1.19-1.19-1.242 1.234 2.432 2.432 4.122-4.121z',
                fill: '#242E30'
            }
        })]);
    }
};
