import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import history from '@history';
import SceneModel from '../model/SceneModel';

export const getScenes = createAsyncThunk('unrealApp/scenes/getScenes', async () => {
  const response = await axios.get('/api/unreal-app/scenes');
  const data = await response.data;

  return data;
});

export const newScene = createAsyncThunk(
  'unrealApp/scenes/newScene',
  async (scene, { dispatch }) => {
    const response = await axios.post('/api/unreal-app/scene/new', {
      scene: scene || SceneModel(),
    });
    const data = await response.data;

    history.push({
      pathname: `/apps/unreal/scene/${data.id}`,
    });

    return data;
  }
);

const scenesAdapter = createEntityAdapter({});

export const { selectAll: selectScenes, selectById: selectSceneById } = scenesAdapter.getSelectors(
  (state) => state.unrealApp.scenes
);

const scenesSlice = createSlice({
  name: 'unrealApp/scenes',
  initialState: scenesAdapter.getInitialState({}),
  reducers: {
    resetScenes: (state, action) => {},
  },
  extraReducers: {
    [getScenes.fulfilled]: scenesAdapter.setAll,
  },
});

export const { resetScenes } = scenesSlice.actions;

export default scenesSlice.reducer;
