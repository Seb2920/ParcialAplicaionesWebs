import { defineStore } from 'pinia';
import {telemetryReadingsApiService} from "../infrastructure/services/teleetry-readings-api.service.js";
import {
    InspectionsRecordsApiService,
    inspectionsRecordsApiService
} from "../infrastructure/services/inspections-records-api.service.js";

const telemetryReadingsService = new telemetryReadingsApiService();
const inspectionsRecordsService = new InspectionsRecordsApiService();

/**
 * @summary useInspectionsStore is a Pinia store that manages the state of telemetry readings and inspections records.
 * @author Andre Sebastian Quispe Almonacid
 */
export const useInspectionsStore = defineStore('inspections', {
    state: () => ({
        telemetryReadings: [],
        inspectionsRecords: [],
    }),
    actions: {
        async fetchTelemetryReadings() {
            try {
                const response = await telemetryReadingsService.getAll();
                this.telemetryReadings = response.data;
            } catch (error) {
                console.error('Error fetching telemetry readings:', error);
            }
        },
        async fetchInspectionsRecords() {
            try {
                const response = await inspectionsRecordsService.getAll();
                this.inspectionsRecords = response.data;
            } catch (error) {
                console.error('Error fetching inspections records:', error);
            }
        },
    },
});