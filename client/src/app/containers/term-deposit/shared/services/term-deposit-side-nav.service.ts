import { Injectable } from '@angular/core';

interface NavConfigOptions {
  termDepositId?: number;
  editMode?: boolean;
  createMode?: boolean;
  status?: string;
}

@Injectable()
export class TermDepositSideNavService {

  getNavList(currentRoute, options?: NavConfigOptions) {
    const editUrlPart = (options && options.editMode) ? 'edit/' : '';
    const idUrlPart = (options && options.termDepositId) ? `${options.termDepositId}/` : '';

    const navs = [
      {
        name: 'INFORMATION',
        url: `/${currentRoute}/${
        ((idUrlPart && !options.createMode) ? idUrlPart : '')
        || (options.createMode ? 'create/' : '')}${editUrlPart}info`,
        iconName: 'info'
      }
    ];

    if (options && options['status'] === 'OPEN' || options['status'] === 'CLOSED') {
      navs.push(
        {
          name: 'ENTRIES',
          url: `/${currentRoute}/${idUrlPart}entries`,
          iconName: 'note'
        },
        {
          name: 'PRINT_OUT',
          url: `/${currentRoute}/${idUrlPart}print-out`,
          iconName: 'upload'
        },
        {
          name: 'OPERATIONS',
          url: `/${currentRoute}/${idUrlPart}operations`,
          iconName: 'rating'
        })
    }
    return navs;
  }
}
