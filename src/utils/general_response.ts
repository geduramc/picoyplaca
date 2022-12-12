import { GeneralResponse } from '../types'

export default (_ok: boolean, _msg: string, _data: any): GeneralResponse => {
  return {
    ok: _ok,
    msg: _msg,
    data: _data
  }
}
