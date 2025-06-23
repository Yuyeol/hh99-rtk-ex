import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../modules/counter";

// 각 모듈 리듀서를 합치는 루트 리듀서
const rootReducer = combineReducers({
  counter: counterReducer,
});

// configureStore로 스토어 생성
const store = configureStore({
  reducer: rootReducer,
});

// RootState와 AppDispatch 타입 내보내기
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
