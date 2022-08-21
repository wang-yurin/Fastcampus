import rollupCommonConfig from "./rollup.common.config";
import { terser } from "./rollup.common.config";
const config = { ...rollupCommonConfig };

config.plugins = [...config.plugins, terser()];

export default config;
