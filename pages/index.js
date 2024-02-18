import HeadObject from "../components/head";
import Nav from "../components/nav";
import Photos from "../components/photo";
import Image from "next/image";
import Faq from "../components/faq";

export default function Home() {
  return (
    <div className="overflow-x-hidden dark:bg-black dark:text-white">
      <HeadObject>
        {/*blossom, hack club blossom, blossom hack club, hack club days of service, hack club days of service blossom, blossom girl scouts, girl scouts coding event, girl scouts hackathon, blossom hackathon, hack club days of service atlanta, days of service atlanta, atlanta georgia girl scouts hackathon, atlanta blossom, georgia days of service*/}
      </HeadObject>
      <Nav />
      <Image
        src="/blossomlogo.png"
        width={900}
        height={900}
        alt="blossom logo"
        style={{
          margin: "0 auto",
          display: "block",
        }}
      />

      <div className="hcdos font-bold">a hack club days of service</div>
      <div className="dates">March 16th | Atlanta, GA</div>

      <br></br>
      <br></br>

      <div
        className="containerwutdos mx-8 flex w-full items-center justify-center gap-2"
        id="dos"
      >
        <div className="libre mx-4 w-[50%] text-3xl">
          <p className="font-bold">what is a days of service?</p>
          <br></br>
          blossom is a gender-focused hackathon (social coding event) open to
          all Girl Scouts! we welcome you come together for a day to discover
          the joy of code, build awesome projects, and share them with one
          another.
        </div>

        <Image
          src="/dos-girls.png"
          width={500}
          height={500}
          alt="days of service girls"
          className="w=[50%]"
        />
      </div>

      <div className="hcdos font-bold" id="past-dos">
        <p>past events</p>
        <br></br>
        <Photos />
      </div>

      <br></br>
      <br></br>
      <p className="hcdos">workshop tracks:</p>
      <br></br>
      <br></br>
      <section className="flex justify-center gap-20">
        <div className="flex flex-col">
          <div className="hcdos flex flex-row ">
            circuit board design w/ onboard
          </div>
          <div className="flex flex-row ">
            <Image src="/pcb.png" width={400} height={400} alt="pcb" />
          </div>
          <div className="libre flex flex-row text-2xl text-sm">
            In this workshop, participants will learn the fundamentals of
            circuit board design with Hack Club's OnBoard program. They’ll use
            EasyEDA, a free circuit design software, to complete this. With this
            track, attendees will learn to use that software as well as the
            basics of PCB design. As a bonus, after students complete this
            track, they’ll be shipped their PCB to have a physical copy of their
            creation!
          </div>
        </div>

        <div className="flex flex-col">
          <div className="hcdos flex flex-row">
            computer-generated art w/ blot
          </div>
          <div className="flex flex-row">
            <Image src="/blot.png" width={400} height={400} alt="blot" />
          </div>
          <div className="libre flex flex-row text-2xl text-sm">
            In this workshop, participants will learn to create
            computer-generated art by drawing a flower (or squares or a tree).
            They’ll use Blot, a robotic arm created by Hack Club that translates
            code to creation. With this track, attendees will learn JavaScript
            and digital fabrication. After students complete this track, they’ll
            be shipped their own robot arm to draw out their creation!
          </div>
        </div>
      </section>

      <br></br>
      <br></br>

      <div>
        <p className="hcdos my-2" id="faq">
          faq:
        </p>
        <Faq />
      </div>
    </div>
  );
}
