import React from 'react';
import { Icon } from '@iconify/react';

const Home = () => (
  <section id="about-me">
    <div className="profile ">
      <p className="headline mb-2">Welcome</p>
      <h1 style={{ width: '70%', fontWeight: '600' }}>
        <span className="text-success">Glad</span>
        {' '}
        to see you!, I&apos;m
        {' '}
        <span className="text-success">Ronnie Bisaso</span>
        .
      </h1>
      <p>
        I&apos;m a software developer! I can help you build a product, feature or website.
        If you like what you see and have a project you need coded,
        don&apos;t hesitate to contact me.
      </p>
      <button type="button" className="btn btn-success btn-sm mt-2">contact me</button>
    </div>
    <div className="profile-pic">
      <img className="profile-img" src="./images/profile.png" alt="profile-pic" />
    </div>
    <div className="social-connection">
      <div className="vertical-text">
        Follow me on:
        <hr className="vertical-line" />
      </div>
      <ul>
        <li><Icon className="icon" icon="pajamas:twitter" color="white" /></li>
        <li><Icon className="icon" icon="formkit:linkedin" /></li>
        <li><Icon className="icon" icon="mingcute:medium-fill" /></li>
        <li><Icon className="icon" icon="charm:github" /></li>
        <li><Icon className="icon" icon="simple-icons:wellfound" /></li>
      </ul>
    </div>
  </section>
);

export default Home;
