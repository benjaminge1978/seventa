import React from "react";
import Case from "../../case/case";

import "./cases.scss";

export default props => {
    let index = -1;
    const alreadyShowed = [];

    return (
        <div className="cases-list">
            {
                props.data.allContentfulCaseCategory.edges.map(item => {
                    const node = item.node;

                    if ( node.cases && node.cases.length ) {

                        for ( let i = 0; i <= node.cases.length; i++ ) {
                            const { id } = node.cases[i];

                            if ( ! alreadyShowed.includes(id) ) {
                                alreadyShowed.push(id);
                                index++;

                                const { title, thumb_excerpt, thumbnail } = node.cases[i];

                                return (
                                    <Case
                                        key={index}
                                        index={index}
                                        category={node.name}
                                        src={thumbnail.fixed.src}
                                        title={title}
                                        thumbDesc={thumb_excerpt}
                                    />
                                );
                            }
                        }

                        return null;
                    }

                    return null;
                })
            }
        </div>
    );
}