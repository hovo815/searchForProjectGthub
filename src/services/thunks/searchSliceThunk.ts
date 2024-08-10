import {createAsyncThunk} from '@reduxjs/toolkit';
import {instance} from '../instance';


export const searchSliceThunk = createAsyncThunk(
    'searchSliceThunk',
    async (value: any, {rejectWithValue}:any) => {
        try {
            const response = await instance.get(`${value}/repos`, );
            return response.data;
        } catch (error: any) {
            console.log(error,'errorerrorerror')
            return rejectWithValue(error.response.data);
        }
    },
);
