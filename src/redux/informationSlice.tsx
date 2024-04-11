import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InformationState {
    detailTour: any,
    detailCulinary: any,
    detailSpice: any,
    detailIsland: any,
    detailArticle: any,
    detailContact: any,
    detailUser: any,
    user: any
}

const initialState: InformationState = {
    detailTour: null,
    detailCulinary: null,
    detailSpice: null,
    detailIsland: null,
    detailArticle: null,
    detailContact: null,
    detailUser: null,
    user: []
}

const informatSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
        getTour: (state, action: PayloadAction<any>) => {
            state.detailTour = action.payload
        },
        clearTour: (state) => {
            state.detailTour = null
        },
        getSpice: (state, action: PayloadAction<any>) => {
            state.detailSpice = action.payload
        },
        clearSpice: (state) => {
            state.detailSpice = null
        },
        getContact: (state, action: PayloadAction<any>) => {
            state.detailContact = action.payload
        },
        clearContact: (state) => {
            state.detailContact = null
        },
        getCulinary: (state, action: PayloadAction<any>) => {
            state.detailCulinary = action.payload
        },
        clearCulinary: (state) => {
            state.detailCulinary = null
        },
        getIsland: (state, action: PayloadAction<any>) => {
            state.detailIsland = action.payload
        },
        clearIsland: (state) => {
            state.detailIsland = null
        },
        getArticle: (state, action: PayloadAction<any>) => {
            state.detailArticle = action.payload
        },
        clearArticle: (state) => {
            state.detailArticle = null
        },
        getUser: (state, action: PayloadAction<any>) => {
            state.user = {
                ...state.user,
                ...action.payload
            }   
        },
        getDetailUser: (state, action: PayloadAction<any>) => {
            state.detailUser = {
                ...state.detailUser,
                ...action.payload
            }   
        },
        clearUser: (state) => {
            state.user = null,
            state.detailUser = null
        }
    }
})

export const { getTour, clearTour, getSpice, clearSpice, getContact, clearContact, getCulinary, clearCulinary, getIsland, clearIsland, getArticle, clearArticle, getUser, getDetailUser, clearUser } = informatSlice.actions;
export default informatSlice.reducer;

