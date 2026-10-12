import {localHttp} from "../../../shared/infrastructure/services/http-common.js";
/**
 * @summary TelemetryReadingsApiService is responsible for making API calls related to telemetry readings.
 * @author Andre Sebastian Quispe Almonacid
 */

export class telemetryReadingsApiService {
    getAll() {
        return localHttp.get('/telemetry-readings');

    }
}