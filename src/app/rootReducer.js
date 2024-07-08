// rootReducer.js
import {
    SET_ACTIVE_TAB, SET_LINE_HEIGHT, SET_SCROLL_PROGRESS,
    SET_STOP_HEIGHT, SET_TARGET_SECTION, SET_TEXT,
    FETCH_PROJECT_DATA_REQUEST, FETCH_PROJECT_DATA_SUCCESS, FETCH_PROJECT_DATA_FAILURE,
    FETCH_EDUCATION_DATA_REQUEST, FETCH_EDUCATION_DATA_SUCCESS, FETCH_EDUCATION_DATA_FAILURE,
    FETCH_EXPERIENCE_DATA_REQUEST, FETCH_EXPERIENCE_DATA_SUCCESS, FETCH_EXPERIENCE_DATA_FAILURE,
    SCROLL_TO_TOP, OPEN_MODAL, CLOSE_MODAL, DOWNLOAD_WORD_FILE
} from "./actions";

const initialState = {
    scrollProgress: 0,
    text: 'Welcome to my profile',
    lineHeight: 0,
    stopHeight: 0,
    activeTab: 'education',
    targetSection: '',
    projectData: [],
    educationData: [],
    experienceData: [],
    loading: false,
    error: null,
    scrollTop: false,
    progress: {
        bootstrap: 90,
        tailwind: 60,
        materialUI: 50,
    },
    modalIsOpen: false,
    downloadStatus: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL_PROGRESS:
            return {
                ...state,
                scrollProgress: action.payload,
            };
        case SET_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        case SET_LINE_HEIGHT:
            return {
                ...state,
                lineHeight: action.payload,
            };
        case SET_STOP_HEIGHT:
            return {
                ...state,
                stopHeight: action.payload,
            };
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload,
            };
        case SET_TARGET_SECTION:
            return {
                ...state,
                targetSection: action.payload,
            };
        case FETCH_PROJECT_DATA_REQUEST:
        case FETCH_EDUCATION_DATA_REQUEST:
        case FETCH_EXPERIENCE_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PROJECT_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                projectData: action.payload,
            };
        case FETCH_EDUCATION_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                educationData: action.payload,
            };
        case FETCH_EXPERIENCE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                experienceData: action.payload,
            };
        case FETCH_PROJECT_DATA_FAILURE:
        case FETCH_EDUCATION_DATA_FAILURE:
        case FETCH_EXPERIENCE_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SCROLL_TO_TOP:
            return {
                ...state,
                scrollTop: true, // This can trigger a side effect in your middleware or component
            };
        case 'RESET_SCROLL_TOP':
            return {
                ...state,
                scrollTop: false,
            };
        case OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalIsOpen: false,
            };
        case DOWNLOAD_WORD_FILE:
            return {
                ...state,
                downloadStatus: 'completed',
            };
        default:
            return state;
    }
};


export default rootReducer;
