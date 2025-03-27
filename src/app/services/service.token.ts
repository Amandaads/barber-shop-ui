import { InjectionToken } from "@angular/core";
import { ICLientService } from "./api-client/clients/iclients.service";
import { ISnackBarManagerService } from "./isnackbar-manager.service";

export const SERVICES_TOKEN = {
    HTTP:{
        CLIENT: new InjectionToken<ICLientService>('SERVICES_TOKEN.HTTP.CLIENT'),
       // SCHEDULE: new InjectionToken<IScheduleService>('SERVICES_TOKEN.HTTP.SCHEDULE')

    }, 
    SNACKBAR: new InjectionToken<ISnackBarManagerService>('SERVICES_TOKEN.SNACKBAR')
}