import { GeneralResponse } from '../types'

const ok = (_data: any): GeneralResponse => {
  return {
    ok: true,
    msg: 'success',
    data: _data
  }
}

const info = (_msg: string, _data: any = null): GeneralResponse => {
  return {
    ok: false,
    msg: _msg,
    data: (_data != null) ? _data : []
  }
}

const error = (_msg: string): GeneralResponse => {
  return {
    ok: false,
    msg: _msg,
    data: []
  }
}

export const generalResponse = { ok, info, error }
