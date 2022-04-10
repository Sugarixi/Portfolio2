import React from "react";
import Styles from "./Contact.module.css";
import Letter from "./Letter";
import LetterStyles from "./Letter.module.css";

export default function Contact(props) {
  const [letterClasses, setLetterClasses] = React.useState([
    LetterStyles.letter,
  ]);

  const [flapClasses, setFlapClasses] = React.useState([
    LetterStyles.envelopeFlap,
  ]);

  const [envelopeClasses, setEnvelopeClasses] = React.useState([
    LetterStyles.envelope,
  ]);

  function handleSend(e) {
    e.preventDefault();

    if (!document.contactForm.checkValidity()) {
      if (document.getElementById("nameInput").value === "") {
        alert("please write your name");
      } else if (document.getElementById("msgInput").value === "") {
        alert("please add message");
      } else {
        alert("please write a correct email address");
      }
      return false;
    }

    setLetterClasses((oldClasses) => {
      const newClasses = [...oldClasses];
      if (!oldClasses.includes(LetterStyles.letterIn)) {
        newClasses.push(LetterStyles.letterIn);
      }
      return newClasses;
    });

    setFlapClasses((oldClasses) => {
      const newClasses = [...oldClasses];
      if (!oldClasses.includes(LetterStyles.envelopeFlapIn)) {
        newClasses.push(LetterStyles.envelopeFlapIn);
      }
      return newClasses;
    });

    setEnvelopeClasses((oldClasses) => {
      const newClasses = [...oldClasses];
      if (!oldClasses.includes(LetterStyles.envelopePoof)) {
        newClasses.push(LetterStyles.envelopePoof);
      }
      return newClasses;
    });

    setTimeout(function () {
      setLetterClasses([LetterStyles.letter]);
      setFlapClasses([LetterStyles.envelopeFlap]);
      setEnvelopeClasses([LetterStyles.envelope]);

      const data = new URLSearchParams();
      for (const pair of new FormData(document.contactForm)) {
        data.append(pair[0], pair[1]);
      }

      fetch("https://formsubmit.co/sugarixi@gmail.com", {
        method: "post",
        body: data,
      }).then((response) => {
        if (response.status == 200) {
          alert("WORKING");
        } else {
          alert("not working");
        }
      });
    }, 2500);
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        {/*letter*/}
        <div className={envelopeClasses.join(" ")}>
          <div className={LetterStyles.envelopeBack}></div>
          <div className={letterClasses.join(" ")}>message</div>
          <div className={LetterStyles.envelopeFront}></div>
          <div className={flapClasses.join(" ")}></div>
        </div>

        <form name="contactForm" className={Styles.form}>
          <input type="hidden" name="_captcha" value="false"></input>
          <div className={Styles.title}>Contact Me 🖊️</div>
          <input
            type="text"
            placeholder="Name:"
            name="name"
            id="nameInput"
            required
          ></input>
          <input
            type="email"
            placeholder="Email:"
            name="email"
            id="emailInput"
            required
          ></input>
          <textarea name="message" id="msgInput"></textarea>
          <div className={Styles.buttons}>
            <button type="submit" onClick={handleSend}>
              Submit
            </button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </div>
      <div className={Styles.footer}>
        Made with {props.isDarkTheme ? "❤️" : "💙"} in 2022 by Tuire Nissinen
      </div>
    </div>
  );
}