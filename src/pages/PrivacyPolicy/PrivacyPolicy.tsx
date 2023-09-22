import {useNavigate} from 'react-router-dom';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {PrivacyPolicyContent} from './PrivacyPolicyContent/PrivacyPolicyContent';

export const PrivacyPolicy = () => {

    const navigate = useNavigate()

    const previousPage = () => {
        navigate(-1)
    }

    return (
        <PageWrapper title={'Политика конфиденциальности'} rightBtn={false}
                     leftBtnFunc={previousPage}>
            <PrivacyPolicyContent/>
        </PageWrapper>
    )
}