import { GeneralResponse } from '../types'

export const ok = (_data: any): GeneralResponse => {
  return {
    ok: true,
    msg: 'Success',
    data: _data
  }
}

export const info = (_msg: string, _data: any = null): GeneralResponse => {
  return {
    ok: false,
    msg: _msg,
    data: (_data != null) ? _data : []
  }
}

export const error = (_msg: string): GeneralResponse => {
  return {
    ok: false,
    msg: _msg,
    data: []
  }
}
