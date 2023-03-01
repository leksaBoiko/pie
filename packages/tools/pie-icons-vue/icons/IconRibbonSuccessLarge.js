import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRibbonSuccessLarge',
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
            class: 'c-pieIcon c-pieIcon--ribbonSuccessLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.095 24.4a14.873 14.873 0 01-3.22-4.296c.227-.63.33-1.3.306-1.969a4.02 4.02 0 01.157-1.26c.21-.361.472-.69.78-.971a3.702 3.702 0 001.382-2.529 3.7 3.7 0 00-1.383-2.485 4.096 4.096 0 01-.779-.971 4.018 4.018 0 01-.148-1.304 3.727 3.727 0 00-.762-2.625 3.727 3.727 0 00-2.625-.761 4.016 4.016 0 01-1.303-.193 4.095 4.095 0 01-.971-.778 3.7 3.7 0 00-2.53-1.383 3.702 3.702 0 00-2.484 1.383c-.282.307-.61.57-.972.778-.423.121-.863.171-1.303.149a3.693 3.693 0 00-2.625.761 3.692 3.692 0 00-.77 2.669c.022.44-.028.88-.149 1.304a4.095 4.095 0 01-.779.971A3.701 3.701 0 005.5 13.375a3.701 3.701 0 001.382 2.485c.311.295.574.638.779 1.015.12.424.171.864.149 1.304a5.25 5.25 0 00.315 1.925 14.875 14.875 0 01-3.22 4.296l-1.313 1.225 4.918.814 2.389 3.159.726-.735a22.354 22.354 0 003.552-5.154 2.16 2.16 0 001.663 0 22.355 22.355 0 003.535 5.154l.717.726 2.389-3.159 4.926-.805-1.312-1.225zm-16.056 2.468l-1.55-2.048-2.195-.367a16.12 16.12 0 002.16-3.116 6.17 6.17 0 001.75.228c.44-.022.881.028 1.304.149.362.208.69.47.972.779l.201.192a21.232 21.232 0 01-2.642 4.183zm3.692-5.618a5.057 5.057 0 00-1.514-1.146 5.25 5.25 0 00-1.942-.28c-.578 0-1.243 0-1.461-.254-.22-.254-.237-.875-.254-1.461a5.25 5.25 0 00-.28-1.943 5.058 5.058 0 00-1.155-1.522c-.403-.394-.875-.919-.875-1.269 0-.35.472-.875.875-1.269.477-.427.87-.94 1.155-1.514a5.25 5.25 0 00.28-1.942c0-.578 0-1.234.254-1.461.253-.228.874-.237 1.46-.254a5.25 5.25 0 001.943-.28A5.058 5.058 0 0014.731 5.5c.429-.411.875-.875 1.269-.875.393 0 .875.473 1.268.875.428.474.942.863 1.514 1.146a5.25 5.25 0 001.943.28c.577 0 1.242 0 1.461.254.219.254.236.875.254 1.461a5.25 5.25 0 00.28 1.943 5.055 5.055 0 001.155 1.522c.411.429.875.875.875 1.269 0 .394-.473.875-.875 1.269a5.059 5.059 0 00-1.146 1.513 5.25 5.25 0 00-.28 1.943c0 .577 0 1.234-.254 1.461-.254.228-.875.236-1.462.254a5.25 5.25 0 00-1.942.28 5.056 5.056 0 00-1.523 1.155c-.428.411-.918.875-1.268.875s-.875-.473-1.269-.875zm7.779 3.579l-1.549 2.047a21.236 21.236 0 01-2.677-4.182l.2-.193c.296-.314.638-.58 1.016-.787.423-.121.864-.171 1.303-.149a5.922 5.922 0 001.75-.228 16.119 16.119 0 002.197 3.116l-2.24.376zM20.06 11.38l-5.714 5.714-2.835-2.844 1.234-1.242 1.601 1.6 4.48-4.488 1.234 1.26z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M27.095 24.4a14.873 14.873 0 01-3.22-4.296c.227-.63.33-1.3.306-1.969a4.02 4.02 0 01.157-1.26c.21-.361.472-.69.78-.971a3.702 3.702 0 001.382-2.529 3.7 3.7 0 00-1.383-2.485 4.096 4.096 0 01-.779-.971 4.018 4.018 0 01-.148-1.304 3.727 3.727 0 00-.762-2.625 3.727 3.727 0 00-2.625-.761 4.016 4.016 0 01-1.303-.193 4.095 4.095 0 01-.971-.778 3.7 3.7 0 00-2.53-1.383 3.702 3.702 0 00-2.484 1.383c-.282.307-.61.57-.972.778-.423.121-.863.171-1.303.149a3.693 3.693 0 00-2.625.761 3.692 3.692 0 00-.77 2.669c.022.44-.028.88-.149 1.304a4.095 4.095 0 01-.779.971A3.701 3.701 0 005.5 13.375a3.701 3.701 0 001.382 2.485c.311.295.574.638.779 1.015.12.424.171.864.149 1.304a5.25 5.25 0 00.315 1.925 14.875 14.875 0 01-3.22 4.296l-1.313 1.225 4.918.814 2.389 3.159.726-.735a22.354 22.354 0 003.552-5.154 2.16 2.16 0 001.663 0 22.355 22.355 0 003.535 5.154l.717.726 2.389-3.159 4.926-.805-1.312-1.225zm-16.056 2.468l-1.55-2.048-2.195-.367a16.12 16.12 0 002.16-3.116 6.17 6.17 0 001.75.228c.44-.022.881.028 1.304.149.362.208.69.47.972.779l.201.192a21.232 21.232 0 01-2.642 4.183zm3.692-5.618a5.057 5.057 0 00-1.514-1.146 5.25 5.25 0 00-1.942-.28c-.578 0-1.243 0-1.461-.254-.22-.254-.237-.875-.254-1.461a5.25 5.25 0 00-.28-1.943 5.058 5.058 0 00-1.155-1.522c-.403-.394-.875-.919-.875-1.269 0-.35.472-.875.875-1.269.477-.427.87-.94 1.155-1.514a5.25 5.25 0 00.28-1.942c0-.578 0-1.234.254-1.461.253-.228.874-.237 1.46-.254a5.25 5.25 0 001.943-.28A5.058 5.058 0 0014.731 5.5c.429-.411.875-.875 1.269-.875.393 0 .875.473 1.268.875.428.474.942.863 1.514 1.146a5.25 5.25 0 001.943.28c.577 0 1.242 0 1.461.254.219.254.236.875.254 1.461a5.25 5.25 0 00.28 1.943 5.055 5.055 0 001.155 1.522c.411.429.875.875.875 1.269 0 .394-.473.875-.875 1.269a5.059 5.059 0 00-1.146 1.513 5.25 5.25 0 00-.28 1.943c0 .577 0 1.234-.254 1.461-.254.228-.875.236-1.462.254a5.25 5.25 0 00-1.942.28 5.056 5.056 0 00-1.523 1.155c-.428.411-.918.875-1.268.875s-.875-.473-1.269-.875zm7.779 3.579l-1.549 2.047a21.236 21.236 0 01-2.677-4.182l.2-.193c.296-.314.638-.58 1.016-.787.423-.121.864-.171 1.303-.149a5.922 5.922 0 001.75-.228 16.119 16.119 0 002.197 3.116l-2.24.376zM20.06 11.38l-5.714 5.714-2.835-2.844 1.234-1.242 1.601 1.6 4.48-4.488 1.234 1.26z',
                fill: '#242E30'
            }
        })]);
    }
};
