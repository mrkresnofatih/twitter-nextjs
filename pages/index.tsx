import type {NextPage} from 'next'
import {BaseLayout} from "../components/layout/BaseLayout";
import {HomeHeader} from "../components/header/HomeHeader";
import {NavMenu} from "../components/nav/NavMenu";

const Home: NextPage = () => {
    return (
        <BaseLayout
            left={
                <NavMenu/>
            }
            middle={
                <HomeHeader/>
            }
            right={
                <p>Right</p>
            }
        />
    )
}

export default Home
