import { combineReducers } from '@reduxjs/toolkit';
import scenes from './scenesSlice';
import scene from './sceneSlice';

const unrealAppReducers = combineReducers({
  scenes,
  scene,
});

export default unrealAppReducers;
