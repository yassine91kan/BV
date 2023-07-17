import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/app.js",
  output: [
    {
      format: "cjs",
      file: "src/bundle.js",
    },
  ],
  plugins: [resolve()],
};