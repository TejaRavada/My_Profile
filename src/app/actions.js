// actions.js
import { saveAs } from 'file-saver';

// Action Type
export const DOWNLOAD_WORD_FILE = 'DOWNLOAD_WORD_FILE';
export const SET_SCROLL_PROGRESS = 'SET_SCROLL_PROGRESS';
export const SET_TEXT = 'SET_TEXT';
export const SET_LINE_HEIGHT = 'SET_LINE_HEIGHT';
export const SET_STOP_HEIGHT = 'SET_STOP_HEIGHT';
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const SET_TARGET_SECTION = 'SET_TARGET_SECTION';
export const FETCH_PROJECT_DATA_REQUEST = 'FETCH_PROJECT_DATA_REQUEST';
export const FETCH_PROJECT_DATA_SUCCESS = 'FETCH_PROJECT_DATA_SUCCESS';
export const FETCH_PROJECT_DATA_FAILURE = 'FETCH_PROJECT_DATA_FAILURE';
export const FETCH_EDUCATION_DATA_REQUEST = 'FETCH_EDUCATION_DATA_REQUEST';
export const FETCH_EDUCATION_DATA_SUCCESS = 'FETCH_EDUCATION_DATA_SUCCESS';
export const FETCH_EDUCATION_DATA_FAILURE = 'FETCH_EDUCATION_DATA_FAILURE';
export const FETCH_EXPERIENCE_DATA_REQUEST = 'FETCH_EXPERIENCE_DATA_REQUEST';
export const FETCH_EXPERIENCE_DATA_SUCCESS = 'FETCH_EXPERIENCE_DATA_SUCCESS';
export const FETCH_EXPERIENCE_DATA_FAILURE = 'FETCH_EXPERIENCE_DATA_FAILURE';
export const SCROLL_TO_TOP = 'SCROLL_TO_TOP';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = () => ({
    type: OPEN_MODAL
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const setScrollProgress = (progress) => ({
    type: SET_SCROLL_PROGRESS,
    payload: progress,
});

export const setText = (text) => ({
    type: SET_TEXT,
    payload: text,
});

export const setLineHeight = (height) => ({
    type: SET_LINE_HEIGHT,
    payload: height,
});

export const setStopHeight = (height) => ({
    type: SET_STOP_HEIGHT,
    payload: height,
});

export const setActiveTab = (tab) => ({
    type: SET_ACTIVE_TAB,
    payload: tab,
});

export const setTargetSection = (sectionId) => ({
    type: SET_TARGET_SECTION,
    payload: sectionId,
});

export const scrollToTop = () => ({
    type: SCROLL_TO_TOP,
});

const fetchData = (requestAction, successAction, failureAction, url) => {
    return async (dispatch) => {
        dispatch({ type: requestAction });
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: successAction, payload: data });
        } catch (error) {
            dispatch({ type: failureAction, payload: error.message });
        }
    };
};

export const fetchProjectData = () => fetchData(
    FETCH_PROJECT_DATA_REQUEST,
    FETCH_PROJECT_DATA_SUCCESS,
    FETCH_PROJECT_DATA_FAILURE,
    'https://myprofiledata.onrender.com/ProjectData'
);

export const fetchEducationData = () => fetchData(
    FETCH_EDUCATION_DATA_REQUEST,
    FETCH_EDUCATION_DATA_SUCCESS,
    FETCH_EDUCATION_DATA_FAILURE,
    'https://myprofiledata.onrender.com/education_Data'
);

export const fetchExperienceData = () => fetchData(
    FETCH_EXPERIENCE_DATA_REQUEST,
    FETCH_EXPERIENCE_DATA_SUCCESS,
    FETCH_EXPERIENCE_DATA_FAILURE,
    'https://myprofiledata.onrender.com/experince_Data'
);

// Action Creator
export const downloadWordFile = () => {
    return async (dispatch) => {
        const response = await fetch('/TejaResume.docx');
        const blob = await response.blob();
        saveAs(blob, 'TejaResume.docx');

        dispatch({
            type: DOWNLOAD_WORD_FILE,
        });
    };
};