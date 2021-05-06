import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: null,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload.jobs;
    },
  },
});

export const { setJobs } = jobsSlice.actions;

export const selectJobs = (state) => state.jobs.jobs;

export default jobsSlice.reducer;
