
import  {configureStore} from '@reduxjs/toolkit';
import createWeatherApi from "../api/weatherApi" ;
export const store=configureStore({
  reducer:{
    [createWeatherApi.reducerPath]:createWeatherApi.reducer,
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(createWeatherApi.middleware)
})

export default store;
