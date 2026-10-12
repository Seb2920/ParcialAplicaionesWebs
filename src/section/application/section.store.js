import {defineStore} from "pinia";
import {PitSectionApiService} from "../../section/infrastructure/services/pit-section-api.service.js";
import {MachineryModelApiService} from "../../section/infrastructure/services/machinery-model-api.service.js";

const pitSectionApiService = new PitSectionApiService();
const machineryModelApiService = new MachineryModelApiService();

/**
 * @summary useSectionStore is a Pinia store that manages the state of pit sections and machinery models.
 * @author Andre Sebastian Quispe Almonacid
 */

export const useSectionStore = defineStore('section', {
    state: () => ({
        pitSections: [],
        machineryModels: [],
    }),
    actions: {
        async fetchPitSections() {
            try {
                const response = await pitSectionApiService.getAll();
                this.pitSections = response.data;
            } catch (error) {
                console.error('Error fetching pit sections:', error);
            }
        },
        async fetchMachineryModels() {
            try {
                const response = await machineryModelApiService.getAll();
                this.machineryModels = response.data;
            } catch (error) {
                console.error('Error fetching machinery models:', error);
            }
        },
    },
});