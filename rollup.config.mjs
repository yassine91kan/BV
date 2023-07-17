import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "app.js",
  output: [
    {
      format: "cjs",
      file: "src/bundle.js",
    },
  ],
  plugins: [resolve()],
};