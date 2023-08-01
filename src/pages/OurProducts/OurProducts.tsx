import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {AtpOnline} from './Atp-online/AtpOnline';

type OurProductsType = 'ATP'

export const OurProducts = () => {

    const navigate = useNavigate();

    const [content, setContent] = useState<OurProductsType>('ATP')

    const mainPageHandler = () => {
        navigate(RoutPath.MainPage)
    }

    return (
        <div>
            {
                content === 'ATP' && (
                    <PageWrapper title={'АТП-онлайн'} leftBtnFunc={mainPageHandler}
                                 rightBtn={false}>
                        <AtpOnline/>
                    </PageWrapper>
                )
            }
        </div>
    )
}