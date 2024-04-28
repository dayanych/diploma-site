import { CommissionType } from "./commission-type";

export type GraphCommissionsResponse = {
  'ID услуги': string,
  [CommissionType.UpperCommission]: string,
  [CommissionType.LowerCommission]: string,
  [CommissionType.AccountsPayableSpecialist]: string,
}[]