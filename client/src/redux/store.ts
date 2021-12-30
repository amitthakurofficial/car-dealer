import { configureStore } from '@reduxjs/toolkit'
import {submitLoginDetailsRedcuer} from './reducer/index';

export default configureStore({
    reducer:{auth:submitLoginDetailsRedcuer}
})