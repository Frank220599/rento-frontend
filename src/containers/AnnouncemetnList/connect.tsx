import {connect} from "react-redux";
import AnnouncementListController from "./controller";
import {bindActionCreators} from "redux";
import {GetAnnouncements} from "../../store/actions/announcements";

const mapStateToProps = ({announcements}) => ({
    announcements: announcements.all
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    GetAnnouncements
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnnouncementListController);
