import {connect} from "react-redux";
import AnnouncementInfoPageController from "./controller";
import {bindActionCreators} from "redux";
import {GetAnnouncement} from "../../../store/actions/announcements";

const mapStateToProps = ({announcements}) => ({
    announcement: announcements.one
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    GetAnnouncement
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnnouncementInfoPageController);
