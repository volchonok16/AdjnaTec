import {AtpOnline} from './Atp-online/AtpOnline';

/*type OurProductsType = 'ATP'*/

export const OurProducts = () => {

    // Логика для расширения линейки продуктов
 /*   const navigate = useNavigate();

    const [content, setContent] = useState<OurProductsType>('ATP')

    const mainPageHandler = () => {
        navigate(RoutPath.MainPage)
    }*/

    return (
        <div>
            <AtpOnline/>
            {/*// Логика для расширения линейки продуктов*/}
            {/*{
                content === 'ATP' && (
                    <PageWrapper title={'АТП-онлайн'} leftBtnFunc={mainPageHandler}
                                 rightBtn={false}>
                        <AtpOnline/>
                    </PageWrapper>
                )
            }*/}
        </div>
    )
}