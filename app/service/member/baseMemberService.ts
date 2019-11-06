import BaseService from '../baseService'

export default class BaseMemberService extends BaseService {
  public async fetchCusNo(queryData: string | string[]) {
    return { data: { items: [true] } }
  }
}
