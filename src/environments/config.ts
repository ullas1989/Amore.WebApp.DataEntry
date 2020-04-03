import { environment } from './environment';

export const URL = {
  API_BASE_URL: `${environment.baseUrl}`,
};
export const CONFIG = {
  APP_NAME: 'Amore Data Entry',
  API_URLS: {
    GET_PACKS: `${URL.API_BASE_URL}/lookup/packs/active`,
    SAVE_PACK: `${URL.API_BASE_URL}/dataentry/pack/save`,
    DELETE_PACK: `${URL.API_BASE_URL}/dataentry/pack/delete`,
    SAVE_QUESTION: `${URL.API_BASE_URL}/dataentry/question/save`
  }
};

