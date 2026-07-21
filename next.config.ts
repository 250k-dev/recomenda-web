import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent directory makes Next infer the wrong workspace
  // root. Pin it to this project so output file tracing stays correct.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;
