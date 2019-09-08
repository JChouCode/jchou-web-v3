import React from 'react'
import { Link, Router } from 'components/Router'
import "./css/work.css"


export default () => (
  <div className="white">
    <div className="container">
      <Link to="/" className="back">
        ←  Home
    </Link>
      <h1>Work</h1>
      <ul>
        <li>
          <span>IoTeX: Software Engineer Intern</span>
          <p>I spent my last summer interning at IoTeX, an IoT blockchain startup.
             There, I created and solely managed codelabs.iotex.io, a community hub for
             IoTeX developers. I also implemented the backend GraphQL api for IoPay discovery feed and feature flag manager using
             MongoDB and React. Additionally, I developed decentralized apps on their blockchain with Solidity and React, such as
           IoTeX RPS, to demonstrate the useability of IoTeX antenna-sdk.</p>
        </li>
        <li>
          <span>NASA: Planetary Science Intern</span>
          <p>I spent my last summer interning at IoTeX, an IoT blockchain startup.
             There, I created and solely managed codelabs.iotex.io, a community hub for
             IoTeX developers. I also implemented the backend GraphQL api for IoPay discovery feed and feature flag manager using
             MongoDB and React. Additionally, I developed decentralized apps on their blockchain with Solidity and React, such as
           IoTeX RPS, to demonstrate the useability of IoTeX antenna-sdk.</p>
        </li>
      </ul>
      <h1>Languages</h1>
      <ul>
        <li>Python</li>
        <li>Javascript/Typescript</li>
        <li>Java</li>
        <li>Golang</li>
        <li>Solidity</li>
        <li>OCaml</li>
      </ul>
      <h1>Knowledge/Frameworks</h1>
      <ul>
        <li>React</li>
        <li>GraphQL</li>
        <li>Node</li>
        <li>Webpack</li>
        <li>Truffle</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
      </ul>

    </div>
  </div>
)
