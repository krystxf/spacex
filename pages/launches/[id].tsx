import { Layout } from "@components/Layout";
import { MissionsScreen } from "@components/Screens";
import client from "@lib/apollo-client";
import { NextPage, NextPageContext } from "next";
import React from "react"
import { LaunchDocument, LaunchQuery } from "types/generated";

type LaunchPageProps = { data: LaunchQuery }

const Launch: NextPage<LaunchPageProps> = ({ data }) => {
    return <Layout pathname="/" >
        <MissionsScreen title="missions">
            <div className="max-w-7xl m-auto w-full flex items-center flex-col min-h-screen gap-16 py-16 px-8">
                <div
                    className={`flex`}
                >
                    <span className="w-full hidden md:block" />
                    {JSON.stringify(data)}
                </div>
            </div>
        </MissionsScreen>
    </Layout>

}

export const getServerSideProps = async (
    context: NextPageContext
): Promise<{
    props: { data: LaunchQuery }
}> => {
    const { data }: { data: LaunchQuery } = await client.query({
        variables: {
            id: context.query.id
        },
        query: LaunchDocument,
    });

    return {
        props: {
            data
        },
    };
};

export default Launch