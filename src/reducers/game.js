import { SHOW_CONGRATS, INCREASE_FLIP_COUNT } from "../actions/game";

export default function game(state = { flipCount: 0 }, action) {
  switch (action.type) {
    case SHOW_CONGRATS:
      return {
        ...state,
        showCongrats: action.desiredState,
      };

    case INCREASE_FLIP_COUNT:
      return {
        ...state,
        flipCount: (state.flipCount += 1),
      };

    default:
      return state;
  }
}
