import React from 'react'
import Image from './Image'

const Page = () => {
  return( 
    <div className="page">
    <div className="grid-container">
      <div className="box picture">
        <Image/>
        <h1>Emre Neumann</h1>
        <h4>Frontend Developer</h4>
      </div>
      <div className="box facts-and-skills">

        <h3>Languages</h3>
        <ul>
          <li><span>German</span>
            <span className="container-dots">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </span>
          </li>
          <li><span>English</span>
            <span className="container-dots">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot empty"></span>
            </span>
          </li>
          <li><span>Turkish</span> <span className="container-dots">
            <span className="dot filled"></span>
            <span className="dot filled"></span>
            <span className="dot filled"></span>
            <span className="dot empty"></span>
            <span className="dot empty"></span>
          </span>
        <span className="language-comment">Fluent within 2 days</span>
        <span className="language-comment">No technical conversations</span>
      </li>
          <li><span>Italian</span>
            <span className="container-dots">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot empty"></span>
              <span className="dot empty"></span>
              <span className="dot empty"></span>
            </span>
            <span className="language-comment">Fluent within 2 days</span>
            <span className="language-comment">No technical conversations</span>
          </li>
        </ul>
      </div>
      <div className="box education">
        <h3>Education</h3>
      </div>
      <div className="box jobs">
        <h3>Jobs</h3>
      </div>
      <div className="box projects">
        <h3>Projects</h3>
      </div>
    </div>
  </div>
  )
}

export default Page