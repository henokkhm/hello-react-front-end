import { useSelector } from 'react-redux';

function Greeting() {
  const { phrase, language } = useSelector(
    (state) => state.greeting,
  );

  return (
    <div>
      <span>{phrase}</span>
      <span> is &quot;Hello&quot; in </span>
      <span>{language}</span>
    </div>
  );
}

export default Greeting;
