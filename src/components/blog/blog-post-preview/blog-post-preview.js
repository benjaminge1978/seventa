import React from "react";
import PropsTypes from "prop-types";
import { Link } from "gatsby";
import Arrow from "../../../images/arrow-right.svg";

import "./blog-post-preview.scss";

const BlogPostPreview = ({title, excerpt, thumb, date, slug}) => {
    return (
        <Link to={`/blog/${slug}`} className="blog-post-preview">
            <figure className="blog-post-preview__thumb">
                <img src={thumb.src} alt={thumb.title} />
            </figure>
            <p className="blog-post-preview__date">{date}</p>
            <h2 className="blog-post-preview__title">{title}</h2>
            <p className="blog-post-preview__excerpt">{excerpt}</p>
            <Arrow />
        </Link>
    );
};

BlogPostPreview.propTypes = {
    title: PropsTypes.string.isRequired,
    excerpt: PropsTypes.string.isRequired,
    thumb: PropsTypes.object.isRequired,
    date: PropsTypes.string.isRequired,
    slug: PropsTypes.string.isRequired,
};

export default BlogPostPreview;