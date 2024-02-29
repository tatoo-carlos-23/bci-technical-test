export interface ICPagination<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    page: number;
}
