export enum StatusType {
  OK,
  ERROR,
  BODY_ERROR,
}

export interface IMeta {
  count: number
  pageSize: number
  page: number
}

interface IBodyError {
  Field: string
  Message: string
}

export interface IInvalidBody {
  message: string
  data: [IBodyError]
  status: StatusType.BODY_ERROR
}

export interface IErrorResp {
  message: string
  data: any
  status: StatusType.ERROR
}

export interface okResponse {
  message: string
  status: StatusType.OK
}
