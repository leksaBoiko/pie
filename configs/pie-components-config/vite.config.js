import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { deepmerge } from 'deepmerge-ts';

const nonComponentJetDeps = [
    '@justeattakeaway/pie-components-config',
    '@justeattakeaway/pie-css',
    '@justeattakeaway/pie-webc-core',
    '@justeattakeaway/pie-webc-testing',
];

// https://vitejs.dev/config/
const sharedConfig = ({ build = {}, plugins = [], ...rest }) => defineConfig({
    build: deepmerge({
        lib: {
            entry: {
                index: 'src/index.ts',
                react: 'src/react.ts',
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: (id) => {
                if (id === 'react' || /^lit/.test(id)) {
                    return true;
                }

                if (id.startsWith('@justeattakeaway/pie-') && !nonComponentJetDeps.includes(id)) {
                    console.info(`Excluding ${id} from the bundle`);
                    return true;
                }

                return false;
            },
        },
    }, build),

    plugins: deepmerge([dts({
        insertTypesEntry: true,
        outputDir: 'dist',
        rollupTypes: true,
    })], plugins),

    ...rest,
});

export default sharedConfig;
