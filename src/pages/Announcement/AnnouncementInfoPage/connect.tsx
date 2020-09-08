import {connect} from "react-redux";
import AnnouncementInfoPageController from "./controller";
import {bindActionCreators} from "redux";
import {GetAnnouncement, GetComments, AddComment} from "../../../store/actions/announcements";

const mapStateToProps = ({announcements}) => ({
    announcement: announcements.one
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    GetAnnouncement,
    GetComments,
    AddComment,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnnouncementInfoPageController);
