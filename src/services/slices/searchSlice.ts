import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {searchSliceThunk} from '../thunks/searchSliceThunk';


const initialState: any = {
    loading: false,
    userName:'',
    dateRepo:null
};

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        nameRepo(state,action) {
            state.dateRepo = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(searchSliceThunk.pending, state => {
            state.loading = true;
        });
        builder.addCase(
            searchSliceThunk.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.userName = action.payload
            },
        );
        builder.addCase(
            searchSliceThunk.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            },
        );
    },
});


export const searchUserRepo = (state: any) => {
    return state.searchUserRepo.userName;
};
export const dateRepoFunc = (state: any) => {
    return state.searchUserRepo.dateRepo;
};

export const {nameRepo} = searchSlice.actions;
