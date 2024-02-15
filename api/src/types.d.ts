import { Express } from 'express'
import { Model, Sequelize } from 'sequelize'

export type Test = 'one' | 'two' | 'three'
export type ExpressType = Express

export interface Temp {
  id: Test
}

export interface dbConfigTypes {
  Sequelize: Sequelize
  sequelize: Sequelize
  CitiesModel: ModelCtor<Model>
  TypesModel: ModelCtor<Model>
  RestrictionsModel: ModelCtor<Model>
  ParametersModel: ModelCtor<Model>
}

export interface GeneralResponse {
  ok: boolean
  msg: string
  data: any
}

export interface TelegramRequests {
  sender: string
  date: string
  message: string
}
