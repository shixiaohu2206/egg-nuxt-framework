import { EggAppConfig, PowerPartial } from 'egg'

/**
 * 本地开发配置
 */
export default () => {
  const config: PowerPartial<EggAppConfig> = {}

  // 本地调试Nuxt
  config.debugNuxt = true

  // logger
  config.logger = {
    consoleLevel: 'DEBUG'
  }

  return {
    ...config
  }
}
