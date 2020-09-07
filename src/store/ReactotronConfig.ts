import Reactotron from 'reactotron-react-js'
import sagaPlugin from 'reactotron-redux-saga'
import {reactotronRedux} from 'reactotron-redux'

export default Reactotron
    .configure()
    // .configure({host: '192.168.1.106'})
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();
