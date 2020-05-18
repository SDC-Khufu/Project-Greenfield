import { connect } from 'react-redux';
import ReviewsSection from '../components/ReviewsSection.jsx';
import {
  getReviewData,
  changeSortCriteriaReview,
} from '../actions/reviewsAction.js';
import { getAvgRating } from '../actions/ratingsAction.js';

const mapStateToProps = (state) => {
  return {
    sorting: state.reviews.sortingCriteria,
    ratingSort: state.ratings.ratingFilter,
    reviews: state.reviews.reviews,
    product_id: state.app.product_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewData: (id, sort, ratingSort) => {
      dispatch(getReviewData(id, sort, ratingSort));
    },
    getAvgRating: (arg) => {
      dispatch(getAverageRating(arg));
    },
    changeSortCriteriaReview: (arg) => {
      dispatch(changeSortCriteriaReview(arg));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsSection);
