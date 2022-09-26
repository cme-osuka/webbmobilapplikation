import React, { useState, useEffect } from 'react';

function EffectCleanup() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNumber(number + 1)
    }, 1000)

    return () => {
      clearInterval(id);
    }
  }, [number])

  /* https://javascript.info/fetch-abort
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://k4backend.osuka.dev", { signal: controller.signal });

    return () => {
      controller.abort();
    }
  }, [])
  */

  return (
    <div>{number}</div>
  )
}

export default EffectCleanup