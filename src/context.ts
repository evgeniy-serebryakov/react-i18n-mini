import { createContext, useContext } from 'react';
import type { I18n } from './types';

export const I18nContext = createContext<{ i18n: I18n } | null>(null);

export function useI18n(): Readonly<{ i18n: I18n }> {
  const context = useContext(I18nContext);
  if (context === null) throw new ReferenceError('I18nContext');

  return context;
}
