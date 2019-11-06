// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseService from '../../../app/service/baseService';
import ExportMemberBaseMemberService from '../../../app/service/member/baseMemberService';
import ExportMemberHadLogin from '../../../app/service/member/hadLogin';

declare module 'egg' {
  interface IService {
    baseService: ExportBaseService;
    member: {
      baseMemberService: ExportMemberBaseMemberService;
      hadLogin: ExportMemberHadLogin;
    }
  }
}
