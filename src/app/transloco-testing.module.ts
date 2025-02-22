import { TranslocoConfig, TranslocoTestingModule } from '@ngneat/transloco';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';
import admin from '../assets/i18n/admin-page/en.json';
import adminSpanish from '../assets/i18n/admin-page/es.json';

export function getTranslocoModule(config: Partial<TranslocoConfig> = {}) {
  return TranslocoTestingModule.withLangs(
    {
      en,
      es,
      'admin-page/en': admin,
      'admin-page/es': adminSpanish
    },
    {
      availableLangs: ['es', 'en'],
      defaultLang: 'es',
      ...config
    }
  );
}
