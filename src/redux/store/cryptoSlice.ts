import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ICryptoSliceState {
  crypto: any;
  loading: boolean;
  error: null | string;
}

const initialState: ICryptoSliceState = {
  crypto: [],
  loading: false,
  error: null,
};

export const fetchCryptos = createAsyncThunk(
  "crypto/fetchCryptos",
  async function () {
    const response = await fetch("https://api.coincap.io/v2/assets");

    const data = await response.json();

    return data;
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    allCyptos() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        state.crypto = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCryptos.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      });
  },
});

export const {} = cryptoSlice.actions;

export default cryptoSlice.reducer;
