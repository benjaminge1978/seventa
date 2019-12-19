import React from "react";
import Case from "../../case/case";

import "./cases.scss";

export default props => {
    let index = 0;

    return (
        <div className="cases-list">
            {
                props.data.allContentfulCaseCategory.edges.map(item => {
                    const node = item.node;

                    if ( node.cases && node.cases.length ) {
                        const firstCase = node.cases[0];

                        return (
                            <Case
                                key={index++}
                                index={index}
                                category={node.name}
                                src={firstCase.thumbnail.fixed.src}
                                title={firstCase.title}
                                thumbDesc={firstCase.thumb_excerpt}
                            />
                        );
                    }

                    return null;
                })
            }
        </div>
    );
}