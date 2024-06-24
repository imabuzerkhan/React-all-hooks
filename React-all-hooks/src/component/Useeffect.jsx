import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
      setCount(count => count+1)
    },2000)
  },[] );

  return (
    <div>
      <p>I am rendering {count} times! </p>
    </div>
  );
}
export default ExampleComponent;