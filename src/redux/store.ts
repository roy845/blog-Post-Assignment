import { Reducer, UnknownAction, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/postSlice";
import eventReducer from "../features/event/eventSlice";
import {
  persistStore,
  persistReducer,
  WebStorage,
  Persistor,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UserState } from "@/types/userTypes";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { PostsState } from "@/types/postTypes";
import { EventState } from "@/types/eventTypes";

type PersistConfig = {
  key: string;
  storage: WebStorage;
  whitelist: string[];
};

const userPersistConfig: PersistConfig = {
  key: "user",
  storage,
  whitelist: ["selected"],
};

const postPersistConfig: PersistConfig = {
  key: "post",
  storage,
  whitelist: ["posts"],
};

const eventPersistConfig: PersistConfig = {
  key: "event",
  storage,
  whitelist: ["events"],
};

const persistedUserReducer: Reducer<UserState & PersistPartial, UnknownAction> =
  persistReducer(userPersistConfig, userReducer);
const persistedPostsReducer: Reducer<
  PostsState & PersistPartial,
  UnknownAction
> = persistReducer(postPersistConfig, postReducer);
const persistedEventsReducer: Reducer<
  EventState & PersistPartial,
  UnknownAction
> = persistReducer(eventPersistConfig, eventReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    post: persistedPostsReducer,
    event: persistedEventsReducer,
  },
});

export const persistor: Persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
