import { IConfig, IPlugin } from 'umi-types';
import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import webpackPlugin from './plugin.config';
const { pwa, primaryColor } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins: IPlugin[] = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
]; // 针对 preview.pro.ant.design 的 GA 统计代码

if (isAntDesignProPreview) {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push([
    'umi-plugin-pro',
    {
      serverUrl: 'https://ant-design-pro.netlify.com',
    },
  ]);
}

export default {
  plugins,
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      authority: ['admin', 'user'],
      routes: [
        {
          name: 'accountcenter',
          path: '/accountcenter',
          component: './AccountCenter',
        },
        {
          name: 'accountsettings',
          path: '/accountsettings',
          component: './AccountSettings',
        },
        {
          name: 'dashboardanalysis',
          path: '/dashboardanalysis',
          component: './DashboardAnalysis',
        },
        {
          name: 'dashboardmonitor',
          path: '/dashboardmonitor',
          component: './DashboardMonitor',
        },
        {
          name: 'dashboardworkplace',
          path: '/dashboardworkplace',
          component: './DashboardWorkplace',
        },
        {
          name: 'editorflow',
          path: '/editorflow',
          component: './EditorFlow',
        },
        {
          name: 'editorkoni',
          path: '/editorkoni',
          component: './EditorKoni',
        },
        {
          name: 'editormind',
          path: '/editormind',
          component: './EditorMind',
        },
        {
          name: 'formadvancedform',
          path: '/formadvancedform',
          component: './FormAdvancedForm',
        },
        {
          name: 'formbasicform',
          path: '/formbasicform',
          component: './FormBasicForm',
        },
        {
          name: 'formstepform',
          path: '/formstepform',
          component: './FormStepForm',
        },
        {
          name: 'listbasiclist',
          path: '/listbasiclist',
          component: './ListBasicList',
        },
        {
          name: 'listcardlist',
          path: '/listcardlist',
          component: './ListCardList',
        },
        {
          name: 'listsearchapplications',
          path: '/listsearchapplications',
          component: './ListSearchApplications',
        },
        {
          name: 'listsearcharticles',
          path: '/listsearcharticles',
          component: './ListSearchArticles',
        },
        {
          name: 'listsearchprojects',
          path: '/listsearchprojects',
          component: './ListSearchProjects',
        },
        {
          name: 'listsearch',
          path: '/listsearch',
          component: './ListSearch',
        },
        {
          name: 'listtablelist',
          path: '/listtablelist',
          component: './ListTableList',
        },
        {
          name: 'profileadvanced',
          path: '/profileadvanced',
          component: './ProfileAdvanced',
        },
        {
          name: 'profilebasic',
          path: '/profilebasic',
          component: './ProfileBasic',
        },
        {
          name: 'resultfail',
          path: '/resultfail',
          component: './ResultFail',
        },
        {
          name: 'resultsuccess',
          path: '/resultsuccess',
          component: './ResultSuccess',
        },
        {
          name: 'userlogin',
          path: '/userlogin',
          component: './UserLogin',
        },
        {
          name: 'userregisterresult',
          path: '/userregisterresult',
          component: './UserRegisterResult',
        },
        {
          name: 'userregister',
          path: '/userregister',
          component: './UserRegister',
        },
        {
          path: '/',
          name: 'welcome',
          icon: 'smile',
          component: './Welcome',
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string,
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },

  manifest: {
    basePath: '/',
  },
  history: 'hash',
  chainWebpack: webpackPlugin,
  runtimePublicPath: true,
  publicPath: './',
  /*
  proxy: {
    '/server/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },
  */
} as IConfig;
