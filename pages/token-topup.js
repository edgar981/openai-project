import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import {AppLayout} from "../components/AppLayout";
import NewPost from "./post/new";

export default function TokenTopup() {
    const handleClick = async () => {
        await fetch(`/api/addTokens`, {
            method: 'POST',
        })
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

export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props: {}
    }
});