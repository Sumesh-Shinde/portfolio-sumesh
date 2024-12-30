import react from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Value } from "sass";

import { Animate } from "react-simple-animate";
import '../about/styles.scss'
import { FaDev, FaDatabase } from 'react-icons/fa'

const personalDetails = [
    {
        label: "Name",
        Value: "Sumesh Shinde"
    },
    {
        label: "Age",
        Value: "25"
    },
    {
        label: "Address",
        Value: "Pune"
    },
    {
        label: "Email",
        Value: "sumeshshinde9@gamil.com"
    },
    {
        label: "Conatct No",
        Value: "8766924531"
    }
]
const JobSummery = 'Innovative and detail-oriented software developer with expertise in MERN stackand Java full-stack development. Skilled in building dynamic, responsive web and mobile applications, backend services, and database management systems. Proficient in React, Node.js, Express, MongoDB, Java, and SQL. Eager to leverage strong problem-solving skills and technical expertise to deliver impactful solutions in a collaborative environment.'
const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />




            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateY(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Mern And Java Full Stack Developer</h3>
                        <p>{JobSummery}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateY(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.Value}</span>
                                    </li>
                                ))

                            }
                        </ul>

                    </Animate>
                </div>
                <div className="about__content__serviceWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateY(600px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <div className="about__content__serviceWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>

                </div>
            </div>


        </section>

    )
}

export default About;