import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(() => {

    return {
        server: {
            port: 3000
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.match(/node_modules\/react(.*)/i) || id.match(/node_modules\/scheduler(.*)/i) ) {
                            return "vendor.react";
                        }
                        else if (id.match(/node_modules(.*)/i)) {
                            return "vendors";
                        }
                    }
                }

            }
        },
        plugins: [react({
            babel:{
                "plugins": [["module:@preact/signals-react-transform"]]
            }
        })],
        test: {
            globals: true,
            environment: "jsdom",
            setupFiles: "./tests/setup.js",
        },
    };
});
