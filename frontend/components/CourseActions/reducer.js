import Immutable from 'immutable';

const initialState = {
  speGetCourse: {}
};

const CourseActionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEED_SPE_GET_COURSE': {
      const spe = action.payload;
      if (spe.status === 'success') {
        return {
          ...state,
          speGetCourse: spe
        };
      } else {
        return {
          ...state,
          speGetCourse: spe
        };
      }
    }
    case 'CHANGE_AMOUNT_OF_PROBLEMS_TO_REVIEW_BY':
      return Immutable.fromJS(state)
        .updateIn(
          ['speGetCourse', 'payload', 'amountOfProblemsToReview'],
          amount => amount + action.payload
        )
        .toJS();
    case 'CHANGE_AMOUNT_OF_PROBLEMS_TO_LEARN_BY':
      return Immutable.fromJS(state)
        .updateIn(
          ['speGetCourse', 'payload', 'amountOfProblemsToLearn'],
          amount => amount + action.payload
        )
        .toJS();
    default:
      return state;
  }
};

export {
  CourseActionsReducer
};
