// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/baseController';
import ExportMemberController from '../../../app/controller/memberController';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    memberController: ExportMemberController;
  }
}
