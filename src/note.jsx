import React, { Component } from 'react';
import Jot from './jot';
import "./note.css";

class Note extends Component {
    state = {
        "loaded": false,
        editModal: {
            stage: "",
            weight: false,
        },
        quickBtns: {
            "master": {
                "colour": "#d3d3d3",
                "btn": "none"
            },
            "quick-btn1": false,
            "quick-btn2": false,
            "quick-btn3": false,
            "quick-btn4": false,
            "quick-btn5": false
        },
    } 

    localData = {
        "jots": {},
        "aisles": {},
        "localTemp": {}
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
                            {/* <div className = "aisle" id = "aisle-1">
                                <div className = "jot">TITLE</div>
                                <div className = "jot">VORMIR</div>
                            </div>
                            <div className = "aisle"></div> */}
                        </div>
                    </section>
                    {/* <section id = "info">
                        
                    </section>*/}
                </div>
            </React.Fragment>
        );
    }
    bindCard(){
        return (
            <section id = "container">
                <section id = "title">
                    <input type = "text" id = "title-input" placeholder = "ENTER TITLE"></input>
                </section>

                <div className = "divider"></div>
                <section className = "page" id = "page1">
                    <textarea className = "text" placeholder='jot your thoughts' id = "textarea"></textarea>
                </section>

                <section id = "body">
                    <div id = "footer">
                        <div id = "quick-bar">
                            <div className = "quick-button" id = "quick-btn1"></div>
                            <div className = "quick-button" id = "quick-btn2"></div>
                            <div className = "quick-button" id = "quick-btn3"></div>
                            <div className = "quick-button" id = "quick-btn4"></div>
                            <div className = "quick-button" id = "quick-btn5"></div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }

    instantiateData(){
        if(localStorage.getItem("localData") == null){
            // this.localData = {
            //     "jots": {},
            //     "aisles": {}
            // }
        } else {
            // localStorage.removeItem("localData")
            this.localData.localTemp = JSON.parse(localStorage.getItem("localData"));
            console.log(this.localData)
            // this.incurData()
        }
    }

    incurData(){
        const elements = this.localData.localTemp.jots;
        if(elements != null){
            const jots = Object.keys(this.localData.localTemp.jots)
    
            for(let i = 0; i < jots.length; i++){
                const title = document.getElementById("title-input");
                const text = document.getElementById("textarea");
                
                title.value = elements[jots[i]].title;
                text.value = elements[jots[i]].text;
                this.state.quickBtns["master"] = elements[jots[i]].level;
    
                this.createJot()
            }
        }

    }

    onLoaded = () =>{
        if(!this.state.loaded){
            this.state.loaded = true;
            this.instantiateData()

            // setTimeout(() => {}, 1000)

            let run = setTimeout(() => {
                const content = document.getElementById("content");
                
                const addModal = document.getElementById("add-modal");
                addModal.style.top = "-50rem";

                const textarea = document.getElementById("textarea");
                const textTitle = document.getElementById("title-input");

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

                const quickbtn1 = document.getElementById("quick-btn1");
                const quickbtn2 = document.getElementById("quick-btn2");
                const quickbtn3 = document.getElementById("quick-btn3");
                const quickbtn4 = document.getElementById("quick-btn4");
                const quickbtn5 = document.getElementById("quick-btn5");

                const quickBtns = [quickbtn1, quickbtn2, quickbtn3, quickbtn4, quickbtn5];

                quickbtn1.addEventListener("click", () => {this.clickQuickBtn("#ffb3ba", quickbtn1, quickBtns)});
                quickbtn2.addEventListener("click", () => {this.clickQuickBtn("#ffdfba", quickbtn2, quickBtns)});
                quickbtn3.addEventListener("click", () => {this.clickQuickBtn("#ffffba", quickbtn3, quickBtns)});
                quickbtn4.addEventListener("click", () => {this.clickQuickBtn("#baffc9", quickbtn4, quickBtns)});
                quickbtn5.addEventListener("click", () => {this.clickQuickBtn("#bae1ff", quickbtn5, quickBtns)});

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

                                this.incurData()

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

                                        
                                        window.addEventListener("keydown", (e) => {
                                            if(e.key == "Enter"){
                                                this.openModal(addModal, content)
                                                // console.log(this.state.quickBtns)
                                            }
                                            if(e.key == "Escape"){
                                                if(this.modalState()){
                                                    this.createJot();
                                                }
                                                this.closeModal(addModal, content)
                                            }
                                            // console.log(textTitle.value, textarea.value)
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
                                                // }, 0)
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
            this.closeModal(modal, content)
        } else {
            this.openModal(modal, content)
        }
    }

    closeModal(modal, content){
        content.style.filter = "blur(0px)";
        modal.style.top = "-50rem"
    }

    openModal(modal, content){
        content.style.filter = "blur(5px)";
        modal.style.top = "4rem"
    }

    clickQuickBtn(colour, btn, quickBtns){
        if(btn != null){
            const len = quickBtns.length;
            this.state.quickBtns[btn.id] = true
            this.state.quickBtns["master"] = {"colour": colour, "btn": btn.id }
            btn.style.backgroundColor = colour
            for(let i = 0; i < len; i++){
                if(quickBtns[i] != btn){
                    quickBtns[i].style.backgroundColor = "transparent"
                    this.state.quickBtns[quickBtns[i].id] = false
                }
            }
        }
    }
    createJot(){
        if(!this.isJotEmpty()){
            const title = document.getElementById("title-input").value;
            const text = document.getElementById("textarea").value;
            const level = this.state.quickBtns["master"];
            const jot = new Jot(title, text, level);

            if(this.state.editModal.weight){
                const id = this.state.editModal.stage;
                this.localData.jots[id] = jot;

                const element = document.getElementById(id);
                element.innerHTML = jot.title;
                element.style.backgroundColor = jot.level["colour"];
                element.style.color = jot.level["colour"]

                this.state.editModal.weight = false;

            } else {

    
                // if(this.localData.jots[title] == undefined){
                //     this.localData.jots[title] = [];
                // }
                // this.localData.jots[title].push(jot);
    
                const len = Object.keys(this.localData.jots).length;
                this.localData.jots[`jot${len}`] = jot;
    
                console.log(this.localData)
    
                
                this.jotElement(jot)
                
            }
            this.resetJot();

            localStorage.setItem('localData', JSON.stringify(this.localData))
        }
    }
    createNewAisle(){
        const cart = document.getElementById("cart");
        const len = Object.keys(this.localData.aisles).length

        const createaisle = document.createElement("div");
        createaisle.className = "aisle";
        createaisle.id = `aisle-${len}`;
        this.localData.aisles[createaisle.id] = [];

        cart.appendChild(createaisle);
    }

    changeJotColour(jotElement){
        jotElement.style.color = jotElement.style.backgroundColor;
    }

    jotElement(jot){
        const len = Object.keys(this.localData.aisles).length 

        if(len == 0){
            this.createNewAisle();
        }
        const keys = Object.keys(this.localData.aisles);

        let aisle = document.getElementById(`aisle-${keys.length-1}`);
        
        aisle = document.getElementById(`aisle-${keys.length-1}`);
        
        const elementsLen = Object.keys(this.localData.jots).length - 1
        const jotElement = document.createElement("div");
        jotElement.className = "jot";
        jotElement.id = `jot${elementsLen}`;
        jotElement.innerHTML = jot.title
        jotElement.style.backgroundColor = jot.level["colour"];
        jotElement.style.color = jot.level["colour"];
        
        jotElement.addEventListener("mouseover", () => {
            jotElement.style.color = "black";
        })
        jotElement.addEventListener("mouseout", () => {
            jotElement.style.color = jot.level["colour"];
            this.changeJotColour(jotElement)
        })

        jotElement.addEventListener("click", () => {
            this.editModal(jotElement.id)
        })

        aisle.appendChild(jotElement)

        if(aisle.getBoundingClientRect().width >= 600){
            aisle.removeChild(jotElement)
            this.createNewAisle();

            aisle = document.getElementById(`aisle-${keys.length}`);
            aisle.appendChild(jotElement)
        }

        this.localData.aisles[aisle.id].push(jotElement.id)
    }

    resetJot(){
        const title = document.getElementById("title-input");
        const text = document.getElementById("textarea");
        
        title.value = ""
        text.value = ""
        this.resetQuickBtns();
    }

    resetQuickBtns(){
        const quickBtns = this.state.quickBtns
        for(let i = 1; i < 6; i++){
            document.getElementById(`quick-btn${i}`).style.backgroundColor = "transparent"
            quickBtns[`quick-btn${i}`] = false
        }
        this.state.quickBtns["master"] = {"colour": "#d3d3d3", "btn": "none" }
    }

    isJotEmpty(){
        const textTitle = document.getElementById("title-input");
        const textarea = document.getElementById("textarea");
        if(textTitle.value == "" && textarea.value == ""){ return true }
        else {return false}
    }

    editModal(jotID){
        this.state.editModal.weight = true
        this.state.editModal.stage = jotID

        const jot = this.localData.jots[jotID]
        const textTitle = document.getElementById("title-input");
        const textarea = document.getElementById("textarea");
        
        const modal = document.getElementById("add-modal");
        const content = document.getElementById("content");
        const level = this.localData.jots[jotID].level
        const btn = document.getElementById(level["btn"])

        let quickBtns = []
        let len = Object.keys(this.state.quickBtns).length
        for(let i = 1; i < len; i++){
            quickBtns.push(document.getElementById(`quick-btn${i}`))
        }
        // console.log(quickBtns)
        this.clickQuickBtn(level["colour"], btn, quickBtns)

        // btn.style.backgroundColor = level["colour"]
        // this.state.quickBtns[level["btn"]] = true

        textTitle.value = jot.title;
        textarea.value = jot.text;

        this.openModal(modal, content)
    }
}
 
export default Note;

// Hi honey this me coding