import { createSlice } from "@reduxjs/toolkit";
const propertyInitState = {
  properties: [],
  selectedProperty: {},
};

const propertySlice = createSlice({
  name: "properties",
  initialState: propertyInitState,
  reducers: {
    setProperties: (state, { payload }) => {
      state.properties = payload;
    },
    setSelectedProperty: (state, { payload }) => {
      state.selectedProperty = payload;
    },
  },
});
export const { setProperties, setSelectedProperty } = propertySlice.actions;
export const getProperties = (state) => state.properties.properties;
export const getSelectedProperty = (state) => state.properties.selectedProperty;
export default propertySlice.reducer;
