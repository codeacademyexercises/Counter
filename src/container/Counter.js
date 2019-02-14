import { connect } from 'react-redux';
import Counter from '../components/Counter/Counter.js';

const mapStatetoProps = (state) => {
    return {
        count: state.count,
    }
}

export default connect(
    mapStatetoProps
)(Counter);