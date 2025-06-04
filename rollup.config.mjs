import path from "node:path";
import { globSync } from "glob";
import { babel } from "@rollup/plugin-babel";

const entryFiles = Object.fromEntries(
  globSync("src/*.ts").map((file) => [
    path.relative("src", file.replace(/\.ts$/, "")),
    file,
  ])
);

const external = [/@babel\/runtime/];
const extensions = [
  ".ts",
  ".tsx",
  ".mts",
  ".js",
  ".jsx",
  ".es6",
  ".es",
  ".mjs",
];

/**
 *
 * @param {{targets: string[], useESModules: boolean}} options
 * @returns {import('rollup').Plugin}
 */
function getBabelPlugin({ targets, useESModules }) {
  return babel({
    extensions,
    babelHelpers: "runtime",
    presets: [
      "@babel/preset-typescript",
      ["@babel/preset-env", { targets, loose: true, modules: false }],
    ],
    plugins: [["@babel/plugin-transform-runtime", { useESModules }]],
  });
}

/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
  {
    input: entryFiles,
    output: {
      dir: "lib/esm",
      format: "esm",
      entryFileNames: "[name].js",
      sourcemap: true,
    },
    plugins: [
      getBabelPlugin({
        targets: [
          "defaults",
          "fully supports es6-module",
          "maintained node versions",
        ],
        useESModules: true,
      }),
    ],
    external,
  },
  {
    input: entryFiles,
    output: {
      dir: "lib/commonjs",
      format: "cjs",
      entryFileNames: "[name].cjs",
      sourcemap: true,
    },
    plugins: [
      getBabelPlugin({
        targets: ["maintained node versions"],
        useESModules: false,
      }),
    ],
    external,
  },
];
