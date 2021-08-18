import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { GiMeat } from 'react-icons/gi';
import { GiSwissArmyKnife } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';

class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="false" initiallyVisible ={true}>
                    <span  className={classes.head} style={{fontSize: 14}}>MY STUDYING JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="false" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >HES-SO <span>2021-Today</span></h2>
                                                <p> I'm actually on my way to get my Master at the HES-SO in Switzerland. It's a 1.5 years formation. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                       <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="false" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >HEIA-FR <span>2018-2021</span></h2>
                                                <p>I graduated from <a href='https://www.heia-fr.ch/fr/'>HEIA-FR</a>, where I got my Bachelor of Sciences with a result mark of 4.5/6. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="false" initiallyVisible ={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Ecole des Métiers <span>2013-2017</span></h2>
                                                <p>Completed my apprenticeship at the <a href='https://www.fr.ch/emf'>EMF</a> of Fribourg in Switzerland. I got my Federal VET Diploma and my Federal Vocational Baccalaureate with 5.4/6 & 4.6/6. </p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
					<span  className={classes.head} style={{fontSize: 14}}>MY WORKING JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="false" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <GiMeat />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Micarna SA<span>2020-2020</span></h2>
                                                <p> I worked at <a href='https://www.micarna.ch/fr'>Micarna SA</a> during my summer vacations. My tasks were to manage and operate on machines to be sure the production was going.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                       <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="false" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
													<GiSwissArmyKnife />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 > Swiss army <span>2018-2018</span></h2>
                                                <p> I completed my mandatory military service in the Swiss army as an infantry security soldier. I learned how to push myself, teamwork and how to manipulate weapons. I really liked this time of my life! </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="false" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <GiMeat />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Micarna SA <span>2017-2017</span> </h2>
                                                <p> I worked at <a href='https://www.micarna.ch/fr'>Micarna SA</a> during 6 months. My tasks were to manage and operate on machines to be sure the production was going. I also worked during night shifts, which I enjoyed.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
										<ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="false" initiallyVisible ={true}>
                                            <article>
                                                <div className={classes.timeline_icon} >
                                                    <MdComputer />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Swisscom <span>2016-2017</span> </h2>
                                                <p> I worked at <a href='https://www.swisscom.ch/fr/about.html'>Swisscom company</a> during 1 year. My main project was to implement a MeteorJS web app to live manage Docker containers. I also created a Ruby dashboard for the call center.</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                </div>
     
        )
    }
}

export default Education;