import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

/**
 * 默认配置、合并默认配置与环境配置
 */
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571104473102_9002'

  // 中间件，数组顺序即为中间件的加载顺序
  config.middleware = ['error', 'cors', 'nuxt']

  // csrf
  config.security = {
    csrf: {
      enable: false
    }
  }

  // logger
  config.logger = {
    outputJSON: true
  }

  // the return config will combines to EggAppConfig
  return {
    ...config
  }
}
