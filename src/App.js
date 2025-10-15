import React from 'react';
import './App.css';
// import QuoteCounter from './QuoteCounter';

import ren_logo from './new_logo.gif';

function App() {
  
  return (
      <div className="Homepage">
        <div className="container">
          {/* Left/Title Column */}
          <div className="left-column">
            <img src={ren_logo} alt="Renishaw Logo" height={125} width={330} />
            <p style={{fontSize: '32px', fontWeight: 'bold', color: 'black'}}>
              Welcome to the MT Software Sales Tool!  
            </p>
            <img src='./softwarepyramid.png' alt="MT Software Structure" height={300} width={400} />
            <p style={{fontSize: '24px', color: 'black'}}>
              <b>Version:</b> 0.0.1
              <br></br>
              <b>Last Updated:</b> 10/15/2025
              <br></br>
              <br></br>
              <b>Software Contacts</b>
            </p>
            <p style={{fontSize: '18px', color: 'black'}}>
              <b>MSP</b> 
              <br></br>
              Main Contact: Gianni Prioriello, Backup: Trent Oracko
              <br></br>
              <b>CappsNC</b> 
              <br></br>
              Main Contact: Kevin Foland, Backup: Quinn O'Rourke
              <br></br>
              <b>Productivity+</b> 
              <br></br>
              Main Contact: Quinn O'Rourke, Backup: Gianni Prioriello
              <br></br>
              <b>Renishaw Central</b>
              <br></br>
              Main Contact: Trent Oracko, Backup: Kevin Foland
              <br></br>
              <br></br>
              <b>Set & Inspect/Reporter:</b> Contact MTP Support
              <br></br>
              <br></br>
              <b>Manager:</b> Brandon Golab
            </p>
          </div>

          {/* Middle/First Column */}
          <div className="middle-column">
            <div className="wrapper">
              <p style={{fontSize: '24px', fontWeight: 'bold', color: 'blue'}}>
                MSP: 
              </p>
              <video width="600" controls loop>
                <source src="/AutoClock-Technical-Promo-Video.mp4" type="video/mp4" />
                ERROR: Your browser does not support the video tag.
              </video>
              <p style={{fontSize: '18px', color: 'black'}}>
                MSP is a suite of software applications (NC-Autoclock, NC-PerfectPart, NC-Checker, etc) for advanced measurement routines, part alignments, machine health checks
                and more, with a focus on alignments, lights out machining support, and quality checking. The software(s) are ran on PCs for programming and connected via ethernet for data communcation with the CNC.
              </p>
              <p style={{fontSize: '18px', color: 'black'}}>
                <b>Strengths:</b> Alignments, Machine Verification, Kinematic/Machine Health Checks (with Reports), Archiving, Automation, 3D Best Fit
              </p>
              <p style={{fontSize: '18px', color: 'black'}}>
                <b>Weaknesses:</b> High price, multiple weeks of onsite work/training, Advanced measurement cycles (that aren't alignments), customizability. Maintance fees.
              </p>
            </div>

            &nbsp;

            <div className="wrapper">
              <p style={{fontSize: '24px', fontWeight: 'bold', color: 'orange'}}>
                Productivity+: 
              </p>
              <video width="600" controls loop>
                <source src="/pplus.mp4" type="video/mp4" />
                ERROR: Your browser does not support the video tag.
              </video>
              <p style={{fontSize: '18px', color: 'black'}}>
                Productivity+ provides a simple-to-use CAM-like programming environment for incorporating measurement and inspection probe routines and in‑process decision making into machining cycles. The software is ran on a PC and is posted into G-code via a post processor file commissioned onsite by an apps engineer.
              </p>
              <p style={{fontSize: '18px', color: 'black'}}>
                <b>Strengths:</b> Simple CAD programming, feature-to-feature measurement programs, cut-measure-cut, logic building, basic measurement cycles, can be configured for Reporter onsite. No maintance or support fees, licenses are permanent for life of product. No PC ethernet connection needed (unless using SPRINT scanning probes)
              </p>
              <p style={{fontSize: '18px', color: 'black'}}>
                <b>Weaknesses: </b> Complex measurement cycles, no alignment functionality, seperate variables/macros needed from Inspection+. 
              </p>
            </div>
            
          </div>

          {/* Right/Second Column */}  
          <div className="right-column">
            <div className="wrapper">
              <p style={{fontSize: '24px', fontWeight: 'bold', color: 'red'}}>
                CappsNC: 
              </p>
              <video width="600" controls loop>
                <source src="/cappsexample.mp4" type="video/mp4" />
                ERROR: Your browser does not support the video tag.
              </video>
              <p style={{fontSize: '18px', color: 'black'}}>
                CAPPS-NC software allows you to use your CNC machine like a CMM. With CAPPS-NC you can do on-machine probing and scanning, run measure-cut-measure cycles, automate manufacturing, and analyze real-time results. The software is ran on a PC for programming and connected via ethernet for data communcation with the CNC. The "programming" and "execution" modules can be done on seperate PCs.
              </p>
              <p style={{fontSize: '18px', color: 'black'}}>
                <b>Strengths:</b> GD&T, Advanced measurement cycles, Customizable reports, Alignments, High relatability to CMMs, built-in text editor for own DMIS program writing
              </p>
              <p style={{fontSize: '18px', color: 'black'}}>
                <b>Weaknesses: </b> High price, multiple weeks of onsite work/training, big learning curve, longer programming time for simple programs. Maintance fees.
              </p>
            </div>

            &nbsp;

            <div className="wrapper">
              <p style={{fontSize: '24px', fontWeight: 'bold', color: 'grey'}}>
                Set and Inspect: 
              </p>
              <video width="600" controls loop>
                <source src="/setandinspect.mp4" type="video/mp4" />
                ERROR: Your browser does not support the video tag.
              </video>
              <p style={{fontSize: '18px', color: 'black'}}>
                Set and Inspect is a simple, intuitive, on-machine probing app for customers who require an easy-to-use probing solution. Set and Inspect is perfect for users who are new to probing and those with little machine code knowledge, whilst still offering operational benefits to more experienced users. The app is installed onto a Windows® based CNC control or Windows tablet connected to the control via Ethernet.
              </p>
              <p style={{fontSize: '18px', color: 'black'}}>
                <b>Strengths:</b> Simple and intuitive UI, easy on-the-fly programming, little training required, utilizes Inspection+ macro package, can be installed with Reporter
              </p>
              <p style={{fontSize: '18px', color: 'black'}}>
                <b>Weaknesses: </b> No CAD programming, program creation is manual, difficult and/or impossible with non-simple programs, no alignment functionality
              </p>
            </div>
          </div>
        </div>


        {/* Structure Pyramid mockup*/}


        {/* Structure Pyramid mockup level 1*/}
        <div className="container2">
          <p style={{fontSize: '32px', fontWeight: 'bold', color: 'black'}}>
              <u>The MT Software Structure Pyramid</u>  
          </p>
          <div style={{ display: 'flex', 
            justifyContent: 'space-between', 
            gap: '20px', border: '5px solid orange', 
            padding: '150px', 
            width: '1200px', height: '10px', 
            margin: '20px auto', 
            alignItems: 'center' }}>

            <img
              src="./msplogo.png"
              alt="MSP Logo"
              style={{ width: '300px', height: '300px', cursor: 'pointer' }}
              onClick={() => window.open('https://renishawplc.sharepoint.com/sites/MTPPCSoftware/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FMTPPCSoftware%2FShared%20Documents%2FMSP%20%28NC%20Perfect%20Part%29&viewid=a3c15553%2D3791%2D46d5%2D920c%2Db731ee1e8d93', '_blank', 'noopener,noreferrer')}
            />
            <p style={{ fontSize: '18px', color: 'black', marginInline: '10px' }}>
                <span style={{ fontSize: '32px', color: 'black', fontWeight: 'bold' }}>Advanced Metrology Software</span>
                <br />
                Advanced probing software that requires multiple weeks of work and training. Price for one machine can start at around $50,000.
              </p>
            <img
              src="./cappsnclogo.png"
              alt="Capps Logo"
              style={{ width: '400px', height: '150px', cursor: 'pointer' }}
              onClick={() => window.open('https://renishawplc.sharepoint.com/:f:/r/sites/MTPPCSoftware/Shared%20Documents/CappsNC?csf=1&web=1&e=NSeq7c', '_blank', 'noopener,noreferrer')}
            />
          </div>

        </div>

        {/* Structure Pyramid mockup level 2*/}
        <div className="container2">
          <div style={{ display: 'flex', 
            justifyContent: 'space-between', 
            gap: '20px', border: '5px solid orange', 
            padding: '150px', 
            width: '1000px', height: '10px', 
            margin: '20px auto', 
            alignItems: 'center' }}>

            <p style={{ fontSize: '18px', color: 'black', marginInline: '10px' }}>
                <span style={{ fontSize: '32px', color: 'black', fontWeight: 'bold' }}>Offline Macro Programming Software</span>
                <br />
                Simplified programming software that requires onsite services and training. All-in price can start from around $15,000. Seperate software, cycles, and variables/programs from Inspection+.
              </p>
            <img
              src="./ppluslogo.png"
              alt="PPlus Logo"
              style={{ width: '300px', height: '280px', cursor: 'pointer' }}
              onClick={() => window.open('https://renishawplc.sharepoint.com/sites/MTPPCSoftware/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FMTPPCSoftware%2FShared%20Documents%2FProductivity%2B%20%28Active%20Editor%20Pro%29&viewid=a3c15553%2D3791%2D46d5%2D920c%2Db731ee1e8d93', '_blank', 'noopener,noreferrer')}
            />
          </div>

        </div>


        {/* Structure Pyramid mockup level 3 */}
        <div className="container2">
          <div style={{ display: 'flex', 
            justifyContent: 'space-between', 
            gap: '20px', border: '5px solid orange', 
            padding: '150px', 
            width: '800px', height: '10px', 
            margin: '20px auto', 
            alignItems: 'center' }}>

            <p style={{ fontSize: '18px', color: 'black', marginInline: '10px' }}>
                <span style={{ fontSize: '32px', color: 'black', fontWeight: 'bold' }}>Macro Software</span>
                <br />
                Software that simplifies the process for calling on the Inspection+ macro packages. Must be installed on a Windows-based control or device. Kit without addons or onsite training is free, but Inspection+ is required on the control.
              </p>
            <img
              src="./setandinspectlogo.png"
              alt="S&I Logo"
              style={{ width: '250px', height: '250px', cursor: 'pointer' }}
              onClick={() => window.open('https://renishawplc.sharepoint.com/sites/MTPPCSoftware/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FMTPPCSoftware%2FShared%20Documents%2FGeneral%20Sales%20Info%20%28CNC%20%26%20PC%20Software%29&viewid=a3c15553%2D3791%2D46d5%2D920c%2Db731ee1e8d93', '_blank', 'noopener,noreferrer')}
            />
          </div>

        </div>
        
        <p style={{ fontSize: '16px', color: 'black', marginInline: '10px' }}>
                <span style={{ fontSize: '26px', color: 'black', fontWeight: 'bold' }}>Data Processing Software</span>
                <br />
                Software for processing machine/probe data into visual representations and actionable insights.
              </p>
        <div style={{ display: 'flex', 
            justifyContent: 'space-between', 
            gap: '20px', border: '5px solid gray', 
            padding: '150px', 
            width: '900px', height: '5px', 
            margin: '20px auto', 
            alignItems: 'center' }}>

            <img
              src="./centrallogo.png"
              alt="Central Logo"
              style={{ width: '450px', height: '90px', cursor: 'pointer' }}
              onClick={() => window.open('https://renishawplc.sharepoint.com/sites/MTPPCSoftware/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FMTPPCSoftware%2FShared%20Documents%2FCentral&viewid=a3c15553%2D3791%2D46d5%2D920c%2Db731ee1e8d93', '_blank', 'noopener,noreferrer')}
            />
            <img
              src="./reporterimage.jpg"
              alt="Reporter Logo"
              style={{ width: '250px', height: '250px', cursor: 'pointer' }}
              onClick={() => window.open('https://renishawplc.sharepoint.com/sites/MTPPCSoftware/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FMTPPCSoftware%2FShared%20Documents%2FGeneral%20Sales%20Info%20%28CNC%20%26%20PC%20Software%29&viewid=a3c15553%2D3791%2D46d5%2D920c%2Db731ee1e8d93', '_blank', 'noopener,noreferrer')}
            />
          </div>
          {/**
           * If wanted to have a basic quote estimater in there, something like this maybe
            <div className="MSP_Rough_Count">
              <h1>MSP</h1>
              <QuoteCounter initialValue={50000} incrementBy={10000} />
            </div>
            <div className="PPlus_Rough_Count">
              <h1>Productivity+</h1>
              <QuoteCounter initialValue={15000} incrementBy={5000} />
            </div>
          */}

        {/*  Kevin's Power App */}
        <div className="powerapp_container">
          <iframe
          title="MTS Products PowerApp Embedded"
          width="100%"
          height="600px"
          src="https://apps.powerapps.com/play/e/6c2a58a8-60b2-e4f4-9d9c-241765823c41/a/662c2b9f-6e7a-4aee-872f-d7d99ef80617?tenantId=be3b1b3b-ae03-462e-bf69-4110e380dc7b"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms"
          ></iframe>
        </div>

      </div>
    );

}

export default App;

