import { EggAppConfig, PowerPartial } from 'egg'

/**
 * 生成环境配置
 */
export default () => {
  const config: PowerPartial<EggAppConfig> = {}

  return {
    ...config
  }
}
