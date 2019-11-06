import { EggAppConfig, PowerPartial } from 'egg'

/**
 * 单元测试配置
 * 测试用例文件，需要以[.test.ts]结尾
 */
export default () => {
  const config: PowerPartial<EggAppConfig> = {}

  return {
    ...config
  }
}
