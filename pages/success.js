import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import {AppLayout} from "../components/AppLayout";
import NewPost from "./post/new";
import {getAppProps} from "../utils/getAppProps";

export default function Success() {
    const handleClick = async () => {
        await fetch(`/api/addTokens`, {
            method: 'POST',
        })
    }

    return (
        <div>
            <div >Payment successfully</div>
        </div>
    )
}

Success.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired ({
    async getServerSideProps(ctx){
        const props = await getAppProps(ctx);
        return {
            props,
        }
    }
});