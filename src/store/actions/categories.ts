import {createAction} from "../utils";
import * as Categories from "../constants/categories";

const GetCategories = createAction(Categories.GetCategories.REQUEST);

export {
    GetCategories
}
