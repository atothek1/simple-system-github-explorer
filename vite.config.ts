import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig(() => {
  
    return {
        server: {
            port: 3000
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes("react")) {
                            return "vendor.react";
                        }
                        else if (id.includes("node_modules")) {
                            return "vendors";
                        }
                    }
                }

            }
        },
        plugins: [react()],
    }
});
