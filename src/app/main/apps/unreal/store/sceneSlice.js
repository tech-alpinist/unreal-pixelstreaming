import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import history from '@history';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getScene = createAsyncThunk(
  'unrealApp/scene/getScene',
  async (params, { dispatch }) => {
    try {
      const response = await axios.get('/api/unreal-app/scene', { params });
      const data = await response.data;
      return data;
    } catch (error) {
      dispatch(
        showMessage({
          message: error.response.data,
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
      );
      history.push({
        pathname: '/apps/unreal/scenes',
      });
      return null;
    }
  }
);

const scenesSlice = createSlice({
  name: 'unrealApp/scenes',
  initialState: null,
  reducers: {
    resetScene: (state, action) => null,
  },
  extraReducers: {
    [getScene.fulfilled]: (state, action) => action.payload,
  },
});

export const { resetScene } = scenesSlice.actions;

export default scenesSlice.reducer;
