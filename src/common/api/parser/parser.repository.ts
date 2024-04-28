import axios from "axios";
import { getApiConfig } from "../../configs/api.config";

export class ParserRepository {
  apiCOnfig = getApiConfig();
  async downloadDocument(path: string): Promise<string> {
    return axios({
      url: `${this.apiCOnfig.apiUrl}/parser/document/download`,
      method: "POST",
      responseType: "blob",
      data: { path }
    }).then((response) => {
      const url = URL.createObjectURL(response.data);
      
      return url;
    });
  }
}