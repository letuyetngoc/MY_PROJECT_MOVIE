import { Spin } from 'antd';
import { useSelector } from 'react-redux';

const LoadingChildren = () => {
    const { isLoading } = useSelector(state => state.LoadingReducer)
    if (isLoading) {
        return <Spin tip="Loading...">
        </Spin>
    }
    return ''
}

export default LoadingChildren;