import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button';

const Posts: React.FC = () => {
    return (
        <>
            <Head>
                <title> Second post - blog page</title>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <div>
                <h1>
                    First or Second post
                </h1>
                <h2>
                    <Link href="/">
                        <Button
                            label="Go back"
                            colour={"yellow"}
                            large
                        />
                    </Link>
                </h2>
            </div>
        </>
    );
};

export default Posts;
