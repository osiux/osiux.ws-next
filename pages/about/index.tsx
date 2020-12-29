import React, { Fragment } from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import Img from 'react-optimized-image';

import Me from '@images/eduardo-reveles.jpg';

import SEO from '@app/components/SEO';

const UnderlineSpan = tw.span`cursor-pointer border-b border-secondary border-dotted transition-colors duration-500 ease-linear`;
const Section = tw.section`min-w-full`;
const PhotoCredit = tw.p`text-center text-sm mb-3`;

const About = () => (
    <Fragment>
        <SEO title="About" />
        <Section>
            <Img css={tw`mx-auto`} src={Me} webp sizes={[500]} />
            <PhotoCredit>
                Photo by{' '}
                <a href="https://unsplash.com/@melspadawan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Melissa Castillo
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/@melspadawan/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </PhotoCredit>
            <p>
                Hi! I'm Eduardo.{' '}
                <UnderlineSpan data-rh="Laravel, NodeJs, React">
                    Full Stack Developer
                </UnderlineSpan>{' '}
                living in Mexico City, currently working as Web Engineer at{' '}
                <a href="https://mav.farm/">MavFarm</a>.
            </p>
            <p>
                Proudly married to a great{' '}
                <a href="https://unsplash.com/@melspadawan/">photographer</a>,
                we have{' '}
                <UnderlineSpan data-rh-image="cats" data-rh-image-at="bottom">
                    3 cats
                </UnderlineSpan>{' '}
                and{' '}
                <UnderlineSpan data-rh-image="dog" data-rh-image-at="bottom">
                    a dog
                </UnderlineSpan>
            </p>
            <p>
                Right now I do mostly Javascript, but for the majority of my
                career PHP was my main language.
            </p>
            <p>
                <Link href="/about/uses">
                    <a>My Uses page.</a>
                </Link>
            </p>
        </Section>
    </Fragment>
);

export default About;