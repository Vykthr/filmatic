import movieReducer from "./movieReducer";
import userReducer from "./userReducer";

const rootReducer = {
  movie: movieReducer,
  user: userReducer,
};

export default rootReducer;
