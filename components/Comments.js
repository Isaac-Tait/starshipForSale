import React from "react"

import Giscus from '@giscus/react'

export default function Comments() {
    return (
        <Giscus
            id="comments"
            repo="Isaac-Tait/comments_starshipForSale"
            repoId="R_kgDOH1iQ4g"
            category="General"
            categoryId="DIC_kwDOH1iQ4s4CQ4kY"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="light"
            lang="en"
            loading="lazy"
        />
    );
}