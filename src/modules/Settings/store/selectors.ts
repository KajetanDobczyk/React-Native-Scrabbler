import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectSettingsState = (state: RootState) => state.settings;

export const selectIsTilesAmountDisplayed = createSelector(
  selectSettingsState,
  (settingsState) => settingsState.isTilesAmountDisplayed,
);