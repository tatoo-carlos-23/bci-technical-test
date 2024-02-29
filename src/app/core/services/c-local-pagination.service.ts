import { Injectable } from '@angular/core';
import { ICPagination } from '../interfaces/local-pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class CLocalPaginationService {

  constructor() { }

  private getData<T>(dataBody: T[], page = 1, size = 10): T[] {

    const newDatabody: T[] = []

    const start = ((page * size) - size) + 1
    const end = page * size

    for (let index = start; index <= end; index++) {
      const ind = index - 1
      if (dataBody[ind]) newDatabody.push(dataBody[ind])
    }

    return newDatabody
  }

  public pagination<T>(content: T[], page = 1, size = 10): ICPagination<T> {
    const valuesPag: ICPagination<T> = {} as ICPagination<T>;

    valuesPag.page = page;
    valuesPag.size = size;
    valuesPag.totalElements = content.length;

    const _totalPages = Math.floor((content.length - 1) / size) + 1;
    valuesPag.totalPages = content.length === 0 ? 0 : _totalPages;

    valuesPag.content = this.getData(content, page, size)

    return valuesPag
  }
}
