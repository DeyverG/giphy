import { Input } from 'antd';
import GetGif from '../../services/GetGif';
import './SearchInput.css'

const { Search } = Input;

interface props {
    setData: Function
}

export const SearchInput = ({ setData }: props) => {

    const onSearch = async (value: string) => {
        if (value === "") return;

        const response = await GetGif(value);

        setData(response);
    };

    return (
        <Search
            className='input-size'
            placeholder="Busca tu Gif aquí"
            allowClear
            enterButton="Buscar"
            size="large"
            onSearch={onSearch}
        />
    );
};
