import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import {AppLayout} from "../components/AppLayout";
import NewPost from "./post/new";
import {getAppProps} from "../utils/getAppProps";

export default function TokenTopup() {
    const handleClick = async () => {
        const result = await fetch(`/api/addTokens`, {
            method: 'POST',
        });
        const json = await result.json();
        window.location.href = json.session.url;
    }

    return (
        <div>
            <button className={"btn"} onClick={handleClick}>Add tokens</button>
        </div>
    )
}

TokenTopup.getLayout = function getLayout(page, pageProps){
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