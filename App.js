function App() {
  return (
    <div>
      Ivan Cherednichenko IIST 6.1 <br/>
      IP: <em>{window.location.href}</em> <br/>
      Hostname: <em>{window.location.hostname}</em> <br/>
      Wersja: <em>{process.env.REACT_APP_VERSION}</em>
    </div>
  );
}
export default App;