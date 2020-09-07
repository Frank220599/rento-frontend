import {connect} from "react-redux";
import CategoriesSectionController from "./controller";

const mapStateToProps = ({categories}) => ({
    categories: categories.all
});

export default connect(
    mapStateToProps,
)(CategoriesSectionController);
