import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  //Reviews Data
  reviewsData: null,
  loading: false,
  error: null,
  //Post Review
  userReviewPosted: false,
  loadingPost: false,
  errorPost: null,
  //Verify User Review
  userReviewLoading: false,
  userReviewEnabled: false,
  userReviewError: null,
};

//* GET REVIEWS
export const fetchReviews = createAsyncThunk(
  'reviewsState/fetchReviews',
  async (productId) => {
    try {
      const response = await axios.get(
        `https://servidor-teesa.onrender.com/reviews/${productId}`
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

//*POST REVIEW

export const postReview = createAsyncThunk(
  'reviewsState/postReview',
  async ({ userId, ProductId, comentario, estrellas }) => {
    try {
      const response = await axios.post(
        `https://servidor-teesa.onrender.com/reviews/${userId}`,
        { ProductId, comentario, estrellas }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

//*GET VERIFY USER REVIEW

export const verifyUserReview = createAsyncThunk(
  'reviews/verifyUserReview',
  async ({ userID, productID }) => {
    const url = `https://servidor-teesa.onrender.com/reviews/validate/${userID}?ProductId=${productID}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }
);

const reviewsSlice = createSlice({
  name: 'reviewState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //GET REVIEWS
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviewsData = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //POST REVIEW
      .addCase(postReview.pending, (state) => {
        state.loadingPost = true;
        state.errorPost = null;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.loadingPost = false;
        state.userReviewPosted = true;
      })
      .addCase(postReview.rejected, (state, action) => {
        state.loadingPost = false;
        state.errorPost = action.error.message;
        state.userReviewEnabled = false;
      })
      //GET VERIFY
      .addCase(verifyUserReview.pending, (state) => {
        state.userReviewLoading = true;
        state.userReviewError = null;
        state.userReviewEnabled = false;
      })
      .addCase(verifyUserReview.fulfilled, (state) => {
        state.userReviewLoading = false;
        state.userReviewEnabled = true;
      })
      .addCase(verifyUserReview.rejected, (state, action) => {
        state.userReviewLoading = false;
        state.userReviewError = action.error.message;
        state.userReviewEnabled = false;
      });
  },
});

export default reviewsSlice.reducer;
