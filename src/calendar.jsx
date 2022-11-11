import React, { Component } from 'react';
import "./calendar.css";

class Calendar extends Component {
    state = {
        "loaded": false,
    } 

    render() { 
        this.onLoaded()
        return (
            <React.Fragment>
                <div id = "content">
                    <section id = "slide">
                        <div className = "slider" id = "slider-left"></div>
                        <div id = "slideInfo">
                            <h1 id = "header1">welcome to the simple note taker.</h1>
                            <h2 id = "header2">JOTME.</h2>
                        </div>
                        <div className = "slider" id = "slider-right"></div>
                    </section>

                    <section id = "info">
                        {this.bindCard()}
                    </section> 
                    
                </div>
            </React.Fragment>
        );
    }
    bindCard(){
        return (
            <section id = "container">
                <section id = "title">
                    <h2>TITLE</h2>
                </section>

                <div className = "divider"></div>
                <section className = "page" id = "page1">
                    {/* <textarea className = "text">Cum</textarea> */}
                    <div className='text'>
                        <div>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</div>
                    </div>
                </section>

                <section id = "body">
                    <div id = "footer">
                        <div id = "quick-bar">
                            <div className = "quick-button"></div>
                            <div className = "quick-button"></div>
                            <div className = "quick-button"></div>
                            <div className = "quick-button"></div>
                            <div className = "quick-button"></div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }

    onLoaded = () =>{
        if(!this.state.loaded){
            this.state.loaded = true;
            
            // setTimeout(() => {}, 1000)

            let run = setTimeout(() => {
                const slide = document.getElementById("slide");
                const slideInfo = document.getElementById("slideInfo");
                const info = document.getElementById("info");

                const sliderLeft = document.getElementById("slider-left");
                const sliderRight = document.getElementById("slider-right");

                const header1 = document.getElementById("header1");
                const header2 = document.getElementById("header2");

                slideInfo.style.width = "33rem";

                setTimeout(() => {
                    slideInfo.style.width = "0rem";

                    setTimeout(() => {
                        sliderLeft.style.height = "6rem"
                        sliderRight.style.height = "6rem"
                        header1.style.color = "transparent";
                        header2.style.color = "black";

                        setTimeout(() => {
                            slideInfo.style.width = "20rem";
                            slide.style.width = "20rem";
                            slide.style.left = "40%";

                            setTimeout(() => {
                                slide.style.animationName = "move";
                                slide.style.animationDuration = "2s";
                                // slide.style.animationDuration = "0s";

                                slide.style.top = "2%"
                                slide.style.left = "2%"

                                info.style.animationName = "fadeIn"
                                info.style.animationDuration = "2s";
                                // info.style.animationDuration = "0s"
                                info.style.opacity = "1"

                            }, 1000)

                        }, 1000)

                    }, 800)

                }, 1500)

            }, 1000);

// test
            //                 }, 0)

            //             }, 0)

            //         }, 0)

            //     }, 0)

            // }, 0);


        } else {
            console.log(-1)
        }
    }

    openSlide() {

    }
}
 
export default Calendar;

// Hi honey this me coding