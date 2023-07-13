import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {CollaborationContent} from './CollaborationContent/CollaborationContent';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';

export const Collaboration = () => {

    const navigate = useNavigate()

    const mainPageHandler = ()=>{
        navigate(RoutPath.MainPage)
    }

    return (
        <PageWrapper title={'Сотрудничество'} rightBtn={false} leftBtnFunc={mainPageHandler}>
            <CollaborationContent/>
        </PageWrapper>

    )
}