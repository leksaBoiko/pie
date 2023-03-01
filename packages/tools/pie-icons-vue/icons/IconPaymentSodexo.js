import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPaymentSodexo',
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
            class: 'c-pieIcon c-pieIcon--sodexo'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.5 4h-13v8h13V4z',
                fill: '#fff'
            }
        }), h('path', {
            attrs: {
                d: 'M7.724 7.336l-.127.603c-.05.248-.201.405-.504.405-.352 0-.445-.214-.36-.512.11-.43.463-.562.99-.496zm.554-.869l-.379.034-.117.587c-.143-.008-.185-.008-.352-.008-.52 0-.983.214-1.1.72-.11.454.15.811.73.811.59 0 .85-.305.942-.728l.276-1.416zm-4.032.893c-.546-.05-1.015 0-1.025.174-.008.274.899.042.882.538-.026.744-1.293.571-1.604.48l.059-.224c.538.083 1.108.091 1.126-.198.016-.314-.899-.034-.882-.538.016-.373.588-.58 1.52-.446l-.076.214zm1.471.506a.634.634 0 01-.62.504c-.311 0-.446-.175-.37-.504a.644.644 0 01.63-.512c.284-.01.436.196.36.512zm-.319-.77c-.546 0-.975.306-1.083.77-.11.464.185.77.723.77s.975-.314 1.084-.77c.108-.456-.187-.77-.724-.77zm6.257 1.53h-.47A8.604 8.604 0 019.95 7.112h.345c.386.514 1.36 1.514 1.36 1.514zm.495-3.01l.218-.446.059.454.445-.157-.309.389.336.256-.453.042-.016.462-.254-.347-.36.331.134-.462-.428-.058.41-.232-.167-.405.385.173zm.917 2.25a.644.644 0 01-.63.512c-.311 0-.454-.183-.37-.512a.664.664 0 01.64-.522c.292 0 .443.206.36.522zm-.32-.778c-.554 0-.992.314-1.1.778-.11.462.185.785.739.785s.991-.313 1.1-.785c.109-.472-.185-.778-.74-.778z',
                fill: '#2F3B96'
            }
        }), h('path', {
            attrs: {
                d: 'M9.597 8.493c.891-.488 1.663-1.232 2.209-1.877-.395 1.208-1.344 1.869-2.209 1.877z',
                fill: '#EC2024'
            }
        }), h('path', {
            attrs: {
                d: 'M9.245 7.32c.167 0 .26.058.26.174 0 .306-.613.29-.883.232.101-.25.345-.416.623-.406zm.63.157c0-.224-.185-.389-.588-.389-.663 0-1.1.422-1.1.95 0 .34.286.621.814.621.21 0 .42-.057.605-.174-.462.05-1.026 0-1.026-.48v-.058c.623.133 1.295-.024 1.295-.47z',
                fill: '#2F3B96'
            }
        }), h('path', {
            attrs: {
                d: 'M4.34 9.34v.718c0 .046.01.078.028.096.018.017.049.027.091.027h.265v.185h-.36c-.089 0-.155-.024-.2-.073a.287.287 0 01-.069-.205v-.747h.245z',
                fill: '#E9444E'
            }
        }), h('path', {
            attrs: {
                d: 'M4.84 9.618h.238v.467c0 .041.008.07.026.085a.092.092 0 00.059.022c.029 0 .055-.01.078-.029.023-.019.044-.038.063-.057l.034-.034v-.458h.24v.75h-.24v-.132l-.04.043a.445.445 0 01-.095.072.269.269 0 01-.133.029.25.25 0 01-.166-.056c-.043-.037-.065-.102-.065-.198v-.504z',
                fill: '#E9444E'
            }
        }), h('path', {
            attrs: {
                d: 'M5.767 9.618h.24v.134l.041-.043a.399.399 0 01.093-.072.276.276 0 01.135-.029c.066 0 .122.018.166.054.043.037.065.101.065.192v.514h-.24v-.467c0-.042-.007-.07-.025-.085a.092.092 0 00-.059-.022c-.029 0-.055.01-.078.028a.448.448 0 00-.063.06l-.034.032v.457h-.24v-.753z',
                fill: '#E9444E'
            }
        }), h('path', {
            attrs: {
                d: 'M6.656 9.936c0-.112.04-.194.116-.248a.45.45 0 01.27-.08c.048 0 .098.005.15.014a.48.48 0 01.134.044v.23h-.192v-.09a.236.236 0 00-.046-.01c-.016-.002-.03-.004-.045-.004a.151.151 0 00-.104.035c-.028.024-.042.061-.042.109v.1c0 .055.014.095.042.12.028.026.068.04.122.04a.669.669 0 00.123-.012c.043-.008.08-.016.116-.026h.011v.173a.963.963 0 01-.271.048.48.48 0 01-.273-.072c-.072-.048-.108-.13-.108-.243v-.128h-.003z',
                fill: '#E9444E'
            }
        }), h('path', {
            attrs: {
                d: 'M7.472 9.34h.239v.412l.042-.043a.399.399 0 01.093-.072.276.276 0 01.134-.029.25.25 0 01.166.056c.044.037.065.102.065.198v.506h-.239v-.467c0-.042-.008-.07-.026-.085a.092.092 0 00-.058-.022c-.03 0-.055.01-.078.028a.448.448 0 00-.064.06l-.034.032v.457h-.24v-1.03z',
                fill: '#E9444E'
            }
        }), h('path', {
            attrs: {
                d: 'M8.769 9.34h.414c.122 0 .215.03.275.089.06.057.09.147.09.269 0 .12-.034.214-.1.281-.067.067-.163.101-.286.101h-.15v.288H8.77V9.341zm.242.554h.114c.071 0 .118-.017.143-.05a.25.25 0 00.035-.148c0-.062-.013-.107-.039-.133-.026-.025-.071-.038-.135-.038h-.118v.37z',
                fill: '#E9444E'
            }
        }), h('path', {
            attrs: {
                d: 'M9.64 10.003a.34.34 0 01.131-.28.457.457 0 01.296-.104h.33v.749h-.239v-.118l-.058.044a.494.494 0 01-.101.061.319.319 0 01-.13.024.235.235 0 01-.163-.06c-.044-.04-.066-.106-.066-.197v-.119zm.516.079v-.288h-.066a.212.212 0 00-.151.056.19.19 0 00-.06.147v.088c0 .043.008.072.025.086a.094.094 0 00.062.023c.03 0 .057-.01.086-.03l.07-.054.034-.028z',
                fill: '#E9444E'
            }
        }), h('path', {
            attrs: {
                d: 'M10.555 10.173h.01c.038.008.082.014.13.019.046.005.087.008.121.008.03 0 .062-.003.098-.011.035-.008.052-.024.052-.05 0-.017-.012-.032-.033-.041a.326.326 0 00-.063-.021l-.117-.026a.31.31 0 01-.146-.07c-.036-.034-.054-.08-.054-.143a.18.18 0 01.117-.179.645.645 0 01.257-.051 1.144 1.144 0 01.243.027v.173h-.011c-.034-.005-.07-.011-.109-.014a.957.957 0 00-.12-.007.31.31 0 00-.086.011c-.028.008-.042.024-.042.048 0 .018.01.03.029.039.02.006.039.013.058.017l.101.024c.059.012.11.034.156.066.045.032.068.083.068.154 0 .096-.042.16-.127.19a.755.755 0 01-.27.046 1.048 1.048 0 01-.262-.022v-.187z',
                fill: '#E9444E'
            }
        }), h('path', {
            attrs: {
                d: 'M11.32 10.173h.011c.038.008.082.014.129.019.047.005.087.008.121.008.03 0 .062-.003.098-.011.036-.008.052-.024.052-.05 0-.017-.011-.032-.033-.041a.324.324 0 00-.063-.021l-.117-.026a.31.31 0 01-.146-.07c-.036-.034-.054-.08-.054-.143a.18.18 0 01.117-.179.644.644 0 01.257-.051 1.143 1.143 0 01.244.027v.173h-.012c-.034-.005-.07-.011-.108-.014a.957.957 0 00-.12-.007.311.311 0 00-.087.011c-.027.008-.042.024-.042.048 0 .018.01.03.03.039.019.006.038.013.058.017l.1.024c.059.012.11.034.156.066s.069.083.069.154c0 .096-.043.16-.127.19a.755.755 0 01-.271.046 1.05 1.05 0 01-.262-.022v-.187z',
                fill: '#E9444E'
            }
        })]);
    }
};
