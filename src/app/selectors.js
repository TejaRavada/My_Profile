// selectors.js
import { createSelector } from 'reselect';

const selectScrollState = (state) => state.scroll;

export const selectLineHeight = createSelector(
  [selectScrollState],
  (scroll) => scroll.lineHeight
);

export const selectStopHeight = createSelector(
  [selectScrollState],
  (scroll) => scroll.stopHeight
);

export const selectEducationData = createSelector(
  [selectScrollState],
  (scroll) => scroll.educationData
);

export const selectExperienceData = createSelector(
    [selectScrollState],
    (scroll) => scroll.experienceData
  );
