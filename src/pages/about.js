import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";
import SectionHeading from "../components/section-heading/section-heading";
import ContainerLabelled from "../components/container-labelled/container-labelled";
import Arrow from "../images/arrow-down.svg";
import LongDashText from "../components/long-dash-text/long-dash-text";
import TeamMember from "../components/team-member/team-member";
import PromoImage from "../components/about-page/promo";
import Image1 from "../components/about-page/image-1";
import Image2 from "../components/about-page/image-2";

import "./scss/about.scss";

export default ({ data }) => {
    const members = data.allContentfulTeamMember.nodes;

    return (
        <Layout className="about-page-layout">
            <SEO title="About us"/>
            <PageHeading
                pageName="About us"
                pageTitle="We are the awesome team that does something"
                description="At Seventa we take pride in knowing our customers. Completely leverage existing real-time information. Dramatically orchestrate web-enabled mosql. Monotonectally utilize"
            />
            <ContainerLabelled label={<Arrow />} className="about-page-promo" innerClassName="about-page-promo__inner" labelClassName="about-page-promo__label">
                <PromoImage />
            </ContainerLabelled>
            <ContainerLabelled className="about-page-text about-page-text--blue">
                <h3>About us</h3>
                <LongDashText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi enim et, libero magni quas rem ullam. Aspernatur debitis explicabo inventore laudantium maiores natus quis quos rerum tempore voluptatibus. Blanditiis.</p>
                </LongDashText>
            </ContainerLabelled>
            <div className="about-page-images">
                <div className="about-page-images__item">
                    <Image1 />
                </div>
                <div className="about-page-images__item">
                    <Image2 />
                </div>
            </div>
            <ContainerLabelled className="about-page-text about-page-text--grey" innerClassName="light-bg">
                <p className="light-text">It all stared here</p>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                <LongDashText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi enim et, libero magni quas rem ullam. Aspernatur debitis explicabo inventore laudantium maiores natus quis quos rerum tempore voluptatibus. Blanditiis.</p>
                </LongDashText>
            </ContainerLabelled>
            {
                members && members.length
                ?   <div className="team-members-section">
                        <SectionHeading
                            sectionName="The team"
                            sectionTitle="Meet the team"
                        />
                        <ContainerLabelled label={<span className="team-members-section__label">The team ———</span>}>
                            <div className="team-members-list">
                                {
                                    members.map((member, index) => (
                                        <div className="team-members-list__item" key={index}>
                                            <TeamMember
                                                name={member.name}
                                                position={member.position}
                                                photo={member.photo.fluid}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </ContainerLabelled>
                    </div>
                : null
            }
        </Layout>
    );
}

export const query = graphql`
    query Members {
        allContentfulTeamMember {
            nodes {
                name
                photo {
                    title
                    fluid(maxWidth: 400, quality: 75) {
                        base64
                        src
                        srcSet
                        srcSetWebp
                        srcWebp
                    }
                }
                position
            }
        }
    }
`;