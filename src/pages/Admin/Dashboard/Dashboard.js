import { Button, Tooltip } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { history } from '../../../App';
const text = <span>prompt text</span>;

const App = () => (
    <div onClick={() => {
        history.push(`/admin/films/showtime/`)
    }}>
        <Tooltip placement="bottom" title={text}>
            <CalendarOutlined className='text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer' />
        </Tooltip>
    </div>

);

export default App;