// Change theme plugin
// eslint-disable-next-line eslint-comments/abdeils - enable - pair;
/* eslint-disable import/no-extraneous-dependencies */
// import ThemeColorReplacer from 'webpack-theme-color-replacer';

import AntdColorReplacer, { AntdColorReplacerOptions } from 'antd-color-replacer';
// import generate from '@ant-design/colors/lib/generate';
import path from 'path';
import defaultSettings from './defaultSettings';

function getModulePackageName(module: { context: string }) {
  if (!module.context) return null;

  const nodeModulesPath = path.join(__dirname, '../node_modules/');
  if (module.context.substring(0, nodeModulesPath.length) !== nodeModulesPath) {
    return null;
  }

  const moduleRelativePath = module.context.substring(nodeModulesPath.length);
  const [moduleDirName] = moduleRelativePath.split(path.sep);
  let packageName: string | null = moduleDirName;
  // handle tree shaking
  if (packageName && packageName.match('^_')) {
    // eslint-disable-next-line prefer-destructuring
    packageName = packageName.match(/^_(@?[^@]+)/)![1];
  }
  return packageName;
}

export default (config: any) => {
  config.plugin('antd-color-replacer').use(AntdColorReplacer, [
    {
      primaryColor: defaultSettings.primaryColor,
    } as AntdColorReplacerOptions,
  ]);

  // optimize chunks
  config.optimization
    // share the same chunks across different modules
    .runtimeChunk(false)
    .splitChunks({
      chunks: 'async',
      name: 'vendors',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: (module: { context: string }) => {
            const packageName = getModulePackageName(module);
            if (packageName) {
              return ['bizcharts', '@antv_data-set'].indexOf(packageName) >= 0;
            }
            return false;
          },
          name(module: { context: string }) {
            const packageName = getModulePackageName(module);
            if (packageName) {
              if (['bizcharts', '@antv_data-set'].indexOf(packageName) >= 0) {
                return 'viz'; // visualization package
              }
            }
            return 'misc';
          },
        },
      },
    });
};

// const getAntdSerials = (color: string) => {
//   const lightNum = 9;
//   const devide10 = 10;
//   // 淡化（即less的tint）
//   const lightens = new Array(lightNum).fill(undefined).map((_, i: number) => {
//     return ThemeColorReplacer.varyColor.lighten(color, i / devide10);
//   });
//   const colorPalettes = generate(color);
//   return lightens.concat(colorPalettes);
// };
