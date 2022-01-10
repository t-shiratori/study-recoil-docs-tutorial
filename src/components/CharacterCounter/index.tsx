import { useRecoilValue } from "recoil";
import { charCountState } from "../../recoil/textInput";
import { TextInput } from "./TextInput";

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}

export function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
