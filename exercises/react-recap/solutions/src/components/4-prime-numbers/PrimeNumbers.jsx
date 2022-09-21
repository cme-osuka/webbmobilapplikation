import { useState } from "react";
import LimitInput from "./LimitInput";
import ShowPrimeNumbers from "./ShowPrimeNumbers";

function PrimeNumbers() {
  const [limit, setLimit] = useState(100);

  return (
    <div>
      <LimitInput limit={limit} setLimit={setLimit} />
      <ShowPrimeNumbers limit={limit} />
    </div>
  );
}

export default PrimeNumbers;
