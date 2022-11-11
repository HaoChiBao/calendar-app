import React, { Component } from 'react';
import "./note.css";

class Note extends Component {
    state = {
        "loaded": false,
    } 

    render() { 
        this.onLoaded()
        return (
            <React.Fragment>
                <section id = "add-modal" class = "modal">
                    {this.bindCard()}
                </section>
                <div id = "content">
                    <section id = "slide">
                        <div className = "slider" id = "slider-left"></div>
                        <div id = "slideInfo">
                            <h1 id = "header1">welcome to the simple note taker.</h1>
                            <h2 id = "header2">JOTME.</h2>
                        </div>
                        <div className = "slider" id = "slider-right"></div>
                        <div id = "add">
                            <div class = "add-plus" id = "horizontal"></div>
                            <div class = "add-plus" id = "vertical"></div>
                        </div>
                    </section>
                    <section id = "tiblits">
                        <div id = "cart">

                        </div>
                    </section>
                    <section id = "info">
                        
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
                const content = document.getElementById("content");
                
                const addModal = document.getElementById("add-modal");
                addModal.style.top = "-50rem";

                const slide = document.getElementById("slide");
                const slideInfo = document.getElementById("slideInfo");
                slideInfo.style.width = "33rem";

                const info = document.getElementById("info");

                const sliderLeft = document.getElementById("slider-left");
                const sliderRight = document.getElementById("slider-right");

                const header1 = document.getElementById("header1");
                const header2 = document.getElementById("header2");

                const tiblits = document.getElementById("tiblits");
                const add = document.getElementById("add");

                const addHorizontal = document.getElementById("horizontal");
                const addVertical = document.getElementById("vertical");



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

                                
                                tiblits.style.animationName = "fadeIn"
                                tiblits.style.animationDuration = "2s";
                                tiblits.style.opacity = "1";

                                // info.style.animationName = "fadeIn"
                                // info.style.animationDuration = "2s";
                                // info.style.opacity = "1"
                                // info.style.animationDuration = "0s"
                                setTimeout(() => {
                                    add.style.opacity = "1";
                                    add.style.animationName = "addSlide"
                                    add.style.animationDuration = "1s";
                                    add.style.right = "-5rem";

                                    setTimeout(() => {
                                        addHorizontal.style.width = "3.5rem";
                                        addVertical.style.height = "3.5rem";

                                        setTimeout(() => {
                                            addHorizontal.style.width = "3rem";
                                            addVertical.style.height = "3rem";
                                        }, 600)

                                        window.addEventListener("keypress", (e) => {
                                            if(e.key == "Enter"){
                                                this.runModal(addModal, content)
                                            }
                                        })

                                        add.addEventListener("click", () => {
                                            add.style.transform = "scale(0.8)";
                                            setTimeout(() => {
                                                add.style.transform = "scale(1)";
                                                setTimeout(() => {
                                                    this.runModal(addModal, content)
                                                }, 500)
                                            }, 500)
                                        })
                                    }, 1000)

                                }, 2000)

                            }, 1000)

                        }, 1000)

                    }, 800)

                }, 2000)

            }, 1000);

// test
            //                                     }, 0)
            //                                 }, 0)
            //                             })
            //                         }, 0)
            //                     }, 0)
            //                 }, 0)
            //             }, 0)
            //         }, 0)
            //     }, 0)
            // }, 0);


        } else {
            console.log(-1)
        }
    }

    modalState(){
        const modal = document.getElementById("add-modal");
        if(modal.style.top == "-50rem"){return false} else {return true}
   }
    runModal(modal, content){
        const modalState = this.modalState();
        if(modalState){
            content.style.filter = "blur(0px)";
            modal.style.top = "-50rem"
        } else {
            content.style.filter = "blur(5px)";
            modal.style.top = "4rem"
        }
    }
}
 
export default Note;

// Hi honey this me coding