import { CommissionType } from "../constants/commission-type";
import { GraphCommissionsResponse } from "../constants/graph-commissions-response";

export const getCommissionsForGraph = (data: GraphCommissionsResponse) => {
  let errorMessgae: string | null = null;

  if (data.length > 50) {
    errorMessgae = 'Максимальное количество услуг - 50. Обработано - 50';
    data = data.slice(0, 50);
  }

  console.log(data.length);
  

  const ids = data.map(item => item['ID услуги']);

  const upperCommissions = data.map(item => {
    const value = item[CommissionType.UpperCommission].replace('%', '');
    return +value;
  });
  const lowerCommissions = data.map(item => {
    const value = item[CommissionType.LowerCommission].replace('%', '');
    return +value;
  });
  const accountsPayableSpecialist = data.map(item => {
    const value = item[CommissionType.AccountsPayableSpecialist].replace('%', '');
    return +value;
  });

  return {
    ids,
    upperCommissions,
    lowerCommissions,
    accountsPayableSpecialist,
    errorMessgae,
  }
};