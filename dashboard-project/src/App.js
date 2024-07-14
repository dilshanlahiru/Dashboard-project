
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import HardwareUsageWidget from './views/HardwareUsageWidget';
// eslint-disable-next-line
import TestingViewComponet from './views/TestingViewCompnent';
// eslint-disable-next-line
import ResponseTimeWidget from './views/ResponseTimeWidget';
// eslint-disable-next-line
import CpuUtilizationWidget from './views/CpuUtilizationWidget';
// eslint-disable-next-line
import CostAnalysisWidget from './views/CostAnalysisWidget';
// eslint-disable-next-line
import SystemStateWidget from './views/SystemStateWidget';
function App() {
  return (
    <div className="App">
            {/* <HardwareUsageWidget /> */}
            {/* <TestingViewComponet /> */}
            {/* <ResponseTimeWidget/> */}
            {/* <CpuUtilizationWidget/> */}
            {/* <CostAnalysisWidget/> */}
            <SystemStateWidget/>
        </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
