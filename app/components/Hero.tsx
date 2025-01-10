import React from 'react'

export default function Hero() {
    return (
        <div>
            <style>{`
       * {
box-sizing: border-box;
}

body {
margin: 0;
}

.gjs-heading {
margin: 0;
color: rgba(29, 40, 55, 1);
}

.gjs-grid-column {
flex: 1 1 0%;
padding: 5px 0;
}

.gjs-grid-row {
display: flex;
justify-content: flex-start;
align-items: stretch;
flex-direction: row;
min-height: auto;
padding: 10px 0;
}

#iqjl {
flex: 0 1 auto;
}

.gjs-link-box {
color: inherit;
display: inline-block;
vertical-align: top;
padding: 10px;
max-width: 100%;
text-decoration: none;
}

.gjs-link {
vertical-align: top;
max-width: 100%;
display: inline-block;
text-decoration: none;
color: inherit;
transition: color 0.3s ease 0s;
}

#id7x {
flex: 0 1 auto;
display: block;
padding-left: 10px;
padding-right: 10px;
}

#iffs {
flex: 0 1 auto;
}

#iyd2 {
align-items: center;
justify-content: space-between;
padding-top: 0px;
padding-bottom: 0px;
background-color: rgba(255, 255, 255, 0.8);
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
backdrop-filter: blur(13px);
box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.14);
}

#i6po {
justify-content: center;
position: sticky;
top: 15px;
padding-top: 0px;
padding-bottom: 0px;
padding-left: 20px;
padding-right: 20px;
}

#itjq {
width: 100%;
max-width: 1200px;
}

#iucmr {
display: block;
padding-top: 0px;
padding-bottom: 0px;
}

#it00l {
padding-top: 0px;
padding-bottom: 0px;
}

#icfyb {
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
padding-left: 20px;
padding-right: 20px;
}

#irtfd {
flex: 0 1 auto;
}

#i88iz {
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
padding-left: 20px;
padding-right: 20px;
}

#icyzp {
flex: 0 1 auto;
}

#irz7b {
justify-content: center;
padding-top: 80px;
padding-bottom: 80px;
padding-left: 20px;
padding-right: 20px;
}

#iycz3 {
max-width: 1200px;
align-items: center;
display: flex;
flex-direction: column;
gap: 10px;
}

#irjua {
font-size: 3rem;
text-align: center;
}

#itndw {
padding: 10px;
max-width: 750px;
margin-bottom: 25px;
text-align: center;
}

#i3vvs {
color: black;
border-top-left-radius: 35px;
border-top-right-radius: 35px;
border-bottom-right-radius: 35px;
border-bottom-left-radius: 35px;
max-width: 100%;
margin-top: 38px;
margin-right: 38px;
margin-bottom: 38px;
margin-left: 38px;
}

.text-main-content {
line-height: 30px;
font-size: 1.2rem;
}

#iau9 {
font-family: Arial, Helvetica, sans-serif;
background-image: linear-gradient(180deg, rgba(59, 130, 245, 0.11), white 14%);
background-position: 0px 0px;
background-size: 100% 100%;
background-repeat: repeat;
background-attachment: scroll;
background-origin: padding-box;
color: #475569;
}

#ij2gh {
font-size: 1.2rem;
margin-bottom: 15px;
}

#igrx8 {
padding: 10px;
max-width: 750px;
margin-bottom: 25px;
padding-left: 0px;
padding-right: 0px;
}

#i466d {
color: black;
border-top-left-radius: 35px;
border-top-right-radius: 35px;
border-bottom-right-radius: 35px;
border-bottom-left-radius: 35px;
max-width: 100%;
}

#imymf {
max-width: 1200px;
align-items: center;
display: flex;
flex-direction: column;
}

#feature-section {
justify-content: center;
padding-top: 80px;
padding-bottom: 80px;
padding-left: 20px;
padding-right: 20px;
}

#ib541 {
gap: 100px;
justify-content: space-between;
}

#iz8m8 {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
}

#in9ef {
font-size: 1.5rem;
}

#i8isa {
padding: 10px;
padding-left: 0px;
padding-right: 0px;
}

#i8w4i {
max-width: 1200px;
display: flex;
flex-direction: column;
}

#ioyxg {
justify-content: center;
padding-top: 80px;
padding-bottom: 80px;
padding-left: 20px;
padding-right: 20px;
}

#iiacm {
font-size: 2.5rem;
margin-bottom: 10px;
max-width: 750px;
}

#ixzh1 {
width: 100%;
flex-wrap: wrap;
justify-content: flex-start;
gap: 50px;
}

.gjs-grid-column.feature-item {
padding-top: 15px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 15px;
display: flex;
flex-direction: column;
gap: 15px;
min-width: 30%;
}

#ia21sa {
padding: 10px;
max-width: 750px;
margin-bottom: 70px;
padding-left: 0px;
padding-right: 0px;
}

#ihap8q {
font-size: 2.5rem;
margin-bottom: 10px;
text-align: center;
}

#i6fjjy {
padding: 10px;
max-width: 750px;
margin-bottom: 70px;
padding-left: 0px;
padding-right: 0px;
text-align: center;
}

#ia7pcr {
color: black;
border-top-left-radius: 100%;
border-top-right-radius: 100%;
border-bottom-right-radius: 100%;
border-bottom-left-radius: 100%;
max-width: 100%;
width: 75px;
border-top-width: 3px;
border-right-width: 3px;
border-bottom-width: 3px;
border-left-width: 3px;
border-top-style: solid;
border-right-style: solid;
border-bottom-style: solid;
border-left-style: solid;
border-top-color: rgb(36, 99, 235);
border-right-color: rgb(36, 99, 235);
border-bottom-color: rgb(36, 99, 235);
border-left-color: rgb(36, 99, 235);
}

#iqroa4 {
font-size: 1.5rem;
}

#i5k4nf {
width: 100%;
flex-wrap: wrap;
justify-content: flex-start;
gap: 50px;
}

#infwen {
max-width: 1200px;
align-items: center;
display: flex;
flex-direction: column;
}

#testimonial-section {
justify-content: center;
padding-top: 80px;
padding-bottom: 80px;
padding-left: 20px;
padding-right: 20px;
}

#inea73 {
justify-content: space-between;
}

.gjs-grid-column.testimonial-item {
padding-top: 15px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 15px;
display: flex;
flex-direction: column;
gap: 15px;
min-width: 45%;
background-color: rgba(247, 247, 247, 0.23);
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
align-items: flex-start;
border-top-width: 1px;
border-right-width: 1px;
border-bottom-width: 1px;
border-left-width: 1px;
border-top-style: solid;
border-right-style: solid;
border-bottom-style: solid;
border-left-style: solid;
border-top-color: rgba(0, 0, 0, 0.06);
border-right-color: rgba(0, 0, 0, 0.06);
border-bottom-color: rgba(0, 0, 0, 0.06);
border-left-color: rgba(0, 0, 0, 0.06);
}

#idva29 {
flex: 0 1 auto;
}

#i2d7qp {
width: 100%;
gap: 20px;
align-items: center;
}

#iaqf2c {
color: rgba(0, 0, 0, 0.5);
}

#it3yug {
padding: 10px;
padding-left: 0px;
padding-right: 0px;
}

#i8gt4n {
padding: 10px;
padding-left: 0px;
padding-right: 0px;
}

#ixzdlj {
color: black;
border-top-left-radius: 100%;
border-top-right-radius: 100%;
border-bottom-right-radius: 100%;
border-bottom-left-radius: 100%;
max-width: 100%;
width: 75px;
border-top-width: 3px;
border-right-width: 3px;
border-bottom-width: 3px;
border-left-width: 3px;
border-top-color: rgb(36, 99, 235);
border-right-color: rgb(36, 99, 235);
border-bottom-color: rgb(36, 99, 235);
border-left-color: rgb(36, 99, 235);
border-top-style: solid;
border-right-style: solid;
border-bottom-style: solid;
border-left-style: solid;
}

#inucqu {
flex: 0 1 auto;
}

#i04ztt {
font-size: 1.5rem;
}

#ia9ts3 {
color: rgba(0, 0, 0, 0.5);
}

#ish0zj {
width: 100%;
gap: 20px;
align-items: center;
}

#idndjn {
justify-content: space-between;
}

#ilriti {
max-width: 1200px;
display: flex;
flex-direction: column;
}

#iv3be5 {
justify-content: center;
padding-top: 80px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 80px;
}

#im0rle {
flex-direction: column;
}

#iih6cv {
display: block;
padding-top: 0px;
padding-bottom: 0px;
}

#iotp6j {
align-self: center;
}

#it6g1v {
padding: 10px;
text-align: center;
font-size: 0.8rem;
margin-top: 20px;
opacity: 75%;
}

#ij7g8t {
display: block;
}

#ipjdtn {
display: block;
}

#ikj01e {
display: block;
}

#i1hx7l {
display: flex;
gap: 30px;
flex: 0 1 auto;
justify-content: center;
margin-top: 30px;
margin-bottom: 30px;
}

#i2sl68 {
display: block;
}

.gjs-button {
vertical-align: top;
max-width: 100%;
display: inline-block;
text-decoration: none;
color: white;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;
background-color: rgb(36, 99, 235);
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
padding-top: 10px;
font-size: 1.1rem;
text-align: center;
}

.gjs-text-blue {
color: rgb(36, 99, 235);
}

#ism014 {
font-size: 2.5rem;
}

#in201n {
padding: 10px;
max-width: 750px;
margin-bottom: 35px;
padding-left: 0px;
padding-right: 0px;
text-align: center;
margin-top: 35px;
}

#ik2rdi {
max-width: 1200px;
align-items: center;
display: flex;
flex-direction: column;
padding-top: 50px;
padding-right: 50px;
padding-bottom: 50px;
padding-left: 50px;
border-top-left-radius: 50px;
border-top-right-radius: 50px;
border-bottom-right-radius: 50px;
border-bottom-left-radius: 50px;
border-top-width: 1px;
border-right-width: 1px;
border-bottom-width: 1px;
border-left-width: 1px;
border-top-style: solid;
border-right-style: solid;
border-bottom-style: solid;
border-left-style: solid;
border-top-color: rgba(0, 0, 0, 0.06);
border-right-color: rgba(0, 0, 0, 0.06);
border-bottom-color: rgba(0, 0, 0, 0.06);
border-left-color: rgba(0, 0, 0, 0.06);
background-image: radial-gradient(515px at 50% 141%, rgba(35, 98, 235, 0.22) 10%, white 90%);
background-position: 0px 0px;
background-size: 100% 100%;
background-repeat: repeat;
background-attachment: scroll;
background-origin: padding-box;
box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.07);
}

#iz29ek {
justify-content: center;
padding-top: 80px;
padding-bottom: 80px;
padding-left: 20px;
padding-right: 20px;
}

.gjs-link:hover {
color: rgb(36, 99, 235);
text-decoration: underline;
}

.gjs-icon {
display: inline-block;
text-decoration: none;
color: inherit;
vertical-align: middle;
fill: currentColor;
width: 50px;
height: 50px;
}

#irfl3k {
width: 196px;
height: 41px;
}

#ip6zoj {
width: 213px;
height: 44px;
}

#ihs4lb {
font-size: 1.2rem;
margin-bottom: 15px;
}

.gjs-icon.gjs-feature-icon {
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
padding-left: 10px;
background-color: rgb(36, 99, 235);
color: white;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
}

#ieu6p6 {
font-size: 1.5rem;
}

#izqkf7 {
padding: 10px;
padding-left: 0px;
padding-right: 0px;
}

#ica43q {
font-size: 1.5rem;
}

#ickn3f {
padding: 10px;
padding-left: 0px;
padding-right: 0px;
}

#i83vu9 {
font-size: 2.5rem;
text-align: center;
}

#infmy1 {
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
padding-left: 20px;
padding-right: 20px;
}

@media (max-width:992px) {
.gjs-grid-row {
flex-direction: column;
}

#i2d7qp {
flex-direction: row;
}

#ish0zj {
flex-direction: row;
}

#iyd2 {
flex-direction: row;
}

#it00l {
flex-direction: row;
}
}

@media (max-width:768px) {
#iffs {
display: none;
}
}

@media (max-width:480px) {
#irfl3k {
width: 116px;
height: 24px;
}
}
    `}</style>
            <div id="irz7b" className="gjs-grid-row">
                <div id="iycz3" className="gjs-grid-column">
                    <h1 id="irjua" className="gjs-heading">
                        Insert Hero{" "}
                        <span id="i4jn1p" className="gjs-text-blue">
                            text here
                        </span>
                    </h1>
                    <div id="itndw" className="text-main-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        <br />
                    </div>
                    <a id="iar3s" className="gjs-button">
                        Join Waitlist
                    </a>
                    <img
                        id="i3vvs"
                        src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=2"
                    />
                </div>
            </div>;


        </div>
    )
}
