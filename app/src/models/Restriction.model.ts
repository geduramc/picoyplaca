import CityModel from "./City.model";
import TypeModel from "./Type.model";

export default interface RestrictionModel {
  Id: number
  RestrictionName: string
  RestrictionValues: string
  StartDate: string
  EndDate: string
  StartTime: string
  EndTime: string
  DayApply: number
  Holidays: boolean
  Status: boolean
  TypeId: number
  CityId: number
  City?: CityModel
  Type?: TypeModel
  TimeLabel?: any
}
