import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AppConfiguration} from "../models/app-configuration";


@Injectable(
  {
    providedIn:'root'
  }
)
export class ConfigurationService{
  private appConfig: AppConfiguration | undefined;
  constructor(private http: HttpClient) {
  }

  get config(): AppConfiguration | undefined {
    return this.appConfig;
  }

  loadConfiguration(): Promise<void>{
    let fileConfigurationUrl = '../assets/config.dev.json';
    return this.http.get<AppConfiguration>(fileConfigurationUrl)
      .toPromise()
      .then(data => {
        this.appConfig = data
      });

  }

}
