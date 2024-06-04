
import { configureStore} from "@reduxjs/toolkit";
import taskReducer from '../components/Features/TasksSlice';

export default configureStore({
    reducer: {
        task:taskReducer
    }
});