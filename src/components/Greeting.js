import { useSelector } from 'react-redux';

function Greeting() {
  const { phrase, language } = useSelector((state) => state.greeting);

  return (
    <div className="wrapper">
      <p className="language">
        <span>&quot;Hello&quot; in</span>
        <span className="language_name">{language}</span>
      </p>
      <div className="greeting">{phrase}</div>
    </div>
  );
}

export default Greeting;
