import React from 'react';
import { Button } from '../../../ui/button';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import SectionTitle from '../../../_common/SectionTitle';
import SectionDescription from '../../../_common/SectionDescription';
import SectionLink from '../../../_common/SectionLink';

const HeroSection = () => {
  return (
    <section className=" container flex flex-col gap-16  px-4 md:pt-16 pt-[10px] pb-12 md:pb-24  ">
      <div
        id="text-div"
        className=" flex flex-col gap-8 items-center md:pt-12 pt-8 "
      >
        <div className=" flex flex-col md:items-center">
          <div className="pb-4 flex md:justify-center justify-start">
            {/* <Link
              className="flex gap-1 flex-row w-[192px] text-sm items-center bg-muted rounded-[80px] px-3 py-1 whitespace-nowrap  border dark:border-background"
              href="/#"
            >
              <Sparkles />
              <span>Introducing</span>
              <ArrowRight />
            </Link> */}
            <SectionLink icon={Sparkles} href='/'>Introducing</SectionLink>
          </div>
          <SectionTitle hero value="Nextbase Ultimate Landing Page" />
        </div>

        <div>
          <SectionDescription value="Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of Excellence and Elevate Your Experience." />
        </div>

        <div className=" w-full md:w-auto flex md:flex-row flex-col  gap-3 pt-3">
          <Button
            variant="default"
            className="  py-2 px-4  md:w-[200px] flex flex-grow md:flex-grow-0 gap-2"
          >
            Login
            <ArrowRight />
          </Button>
          <Button
            variant="secondary"
            size="default"
            className="  py-2 px-4  md:w-[200px] flex flex-grow md:flex-grow-0 gap-2 "
          >
            Learn More
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className=" ">
        <Image
          alt="hero-image"
          src={'/images/hero-image.png'}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: '514px',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '8px',
          }} // optional
        />
      </div>
    </section>
  );
};

export default HeroSection;