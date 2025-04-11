import { createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../utils/request';

export const getUsers = createAsyncThunk('getUsers', async (object, { rejectWithValue }) => {
  const response = await request('/user-list', {
    method: 'GET'
  });
  if (response.success) {
    return response.data;
  }
  const error = response.error && response.error.message ? response.error.message : response.error;
  throw rejectWithValue(error || 'Something went wrong');
});

