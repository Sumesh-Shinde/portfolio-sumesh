import react from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import {skillsData} from '../skills/util'
import { Line } from "rc-progress";
import '../skills/styles.scss'

const Skills=()=>{
    return(
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40}/>}
            />

            <div className="skills__content-wrapper">
                {
                    skillsData.map((item,i)=>(
                        <div key={i} className="skills__content-wrapper__inner-contnt">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform :'translateX(-200px)'
                                }}

                                end={{
                                     transform :'translateX(0px)'
                                }}
                            >
                                <h3 className="skills__content-wrapper__inner-contnt__catagory-text">
                                    {item.label}
                                    </h3>
                                <div className="skills__content-wrapper__inner-contnt__progressbar-container">
                                    {
                                        item.data.map((skillsitem ,j)=>(
                                            <AnimateKeyframes
                                            play
                                            duration={1}
                                            keyframes={["opacity : 1","opacity : 0"]}
                                            iterationCount="1"
                                            >
                                                <div className="progressbar-wrapper" key={j}>
                                                    <p>{skillsitem.skillname}</p>
                                                    <Line
                                                    percent={skillsitem.percentage}
                                                    strokeWidth="2"
                                                    strokeColor="var(--yellow-theme-main-color)"
                                                    trailWidth="2"
                                                    strokeLinecap="square"
                                                    />
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
       </section>
    )
}

export default Skills;