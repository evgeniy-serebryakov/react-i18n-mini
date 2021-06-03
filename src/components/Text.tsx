import React, { memo } from 'react';
import { useI18n } from '../context';
import type { I18nMessage, I18nValues } from '../types';

export interface TextProps extends I18nMessage, I18nValues {}

export const Text = memo<TextProps>(
  function Text({ id, message, ...props }) {
    const { t } = useI18n();
    return <>{t({ id, message }, props)}</>;
  },
);
