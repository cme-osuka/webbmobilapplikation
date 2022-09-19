import { useState } from "react";

import DisplayText from "./DisplayText";
import Input from "./Input";

const Parent = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <DisplayText text={text} />
      <Input value={text} setValue={setText} />
    </div>
  );
};

export default Parent;