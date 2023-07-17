import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {AboutUsContent} from './AboutUsContent/AboutUsContent';

export const AboutUs = () => {

    const navigate = useNavigate();

    const mainPageHandler = () => {
        navigate(RoutPath.MainPage)
    }

    return (
        <PageWrapper title={'О нас'} rightBtn={false} leftBtnFunc={mainPageHandler}>
            <AboutUsContent/>
        </PageWrapper>
    )
}