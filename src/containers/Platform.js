import { connect } from "react-redux";
import Platform from "../components/Platform";
import {add} from '../redux/actions'

const mapDispatch = (dispatch) => {
    return {
        add_Rocket: (rocket) => dispatch(add(rocket))
    }
}


export default connect(null, mapDispatch)(Platform);
