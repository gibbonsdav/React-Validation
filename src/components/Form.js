import React, { useState } from "react"
import validator from "validator"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Thankyou from "./Thankyou"

export default props => {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirm, setConfirm] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const [website, setWebsite] = useState("")
  const [websiteError, setWebsiteError] = useState("")
  const [submit, setSubmit] = useState("")
  const [submitError, setSubmitError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    let valid = true

    if (name === "") {
      valid = false
      setNameError("Cannot be blank")
    } else {
      setNameError("")
    }
    if (!validator.isEmail(email)) {
      valid = false
      setEmailError("Cannot be blank")
    } else {
      setEmailError("")
    }
    if (username === "") {
      valid = false
      setUsernameError("Cannot be blank")
    } else {
      setUsernameError("")
    }
    if (password === "") {
      valid = false
      setPasswordError("Cannot be blank")
    } else {
      setPasswordError("")
    }
    if (confirm != password) {
      valid = false
      setConfirmError("Passwords must match")
    } else {
      setConfirmError("")
    }
    if (!validator.isURL(website)) {
      valid = false
      setEmailError("Must be valid Url")
    } else {
      setEmailError("")
    }

    if (valid) {
      props.history.push("/thanks")
    } else {
    }
  }

  return (
    <div className="container">
      <p className="title">Profile Form- All Fields Required</p>
      <form onSubmit={handleSubmit}>
        <label className={nameError ? "error" : ""} htmlFor="name">
          Name {nameError && nameError}
        </label>
        <input
          type="text"
          id="name"
          placeholder="Michael"
          className={nameError ? "error" : ""}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label className={emailError ? "error" : ""} htmlFor="email">
          Email {emailError && emailError}
        </label>
        <input
          type="email"
          id="email"
          placeholder="email@test.com"
          className={emailError ? "error" : ""}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label className={usernameError ? "error" : ""} htmlFor="username">
          Username {usernameError && usernameError}
        </label>
        <input
          type="text"
          id="username"
          placeholder="myusername"
          className={usernameError ? "error" : ""}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label className={passwordError ? "error" : ""} htmlFor="password">
          Password {passwordError && passwordError}
        </label>
        <input
          type="password"
          id="password"
          placeholder="****"
          className={passwordError ? "error" : ""}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label className={confirmError ? "error" : ""} htmlFor="Confirm">
          Confirm Password {confirmError && confirmError}
        </label>
        <input
          type="password"
          id="confirm"
          placeholder="****"
          className={confirmError ? "error" : ""}
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        <label className={websiteError ? "error" : ""} htmlFor="website">
          Website {websiteError && websiteError}
        </label>
        <input
          type="website"
          id="website"
          placeholder="Please enter valid url."
          className={websiteError ? "error" : ""}
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />

        <button
          type="submit"
          id="submit"
          value={submit}
          onChange={e => setSubmit(e.target.value)}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
