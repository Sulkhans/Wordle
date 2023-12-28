import { LetterInput } from "../letter-input";
import { SmallLetterInput } from "../small-letter-input";
import x from "../../assets/x-solid.svg";
import { Dispatch, SetStateAction } from "react";

const colors = ["bg-custom-green", "bg-custom-yellow", "bg-custom-dark"];

type Props = {
  setShowRules: Dispatch<SetStateAction<boolean>>;
};

export const HowToPlay = ({ setShowRules }: Props) => {
  return (
    <div className="font-custom">
      <div className="mb-2.5 border w-full border-1 rounded-lg bg-custom-div flex items-center justify-between p-2">
        <div></div>
        <h2 className="pt-1 text-lg">როგორ ვითამაშოთ</h2>
        <button onClick={() => setShowRules(false)}>
          <img src={x} alt="x" />
        </button>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <p className="font-light text-center">
          თქვენ უნდა გამოიცნოთ უცნობი სიტყვა 6 ცდაში. ასოების ფერი <br />{" "}
          იცვლება იმის საჩვენებლად, თუ რამდენად ახლოს ხართ. <br />
          <br />
          თამაშის დასაწყებად, უბრალოდ ჩაწერეთ რაიმე სიტყვა, მაგალითად:
        </p>
        <div className="flex items-center justify-center">
          {"მაგიდა".split("").map((letter, index) => (
            <LetterInput
              key={index}
              letter={letter}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-start justify-center flex-col p-5 w-9/12 bg-custom-lightGrey border-1 rounded-lg">
            <div className="flex items-center justify-center">
              <SmallLetterInput letter="გ" color={colors[2]} />
              <span className="mr-2">,</span>
              <SmallLetterInput letter="ა" color={colors[2]} />
              <p className="pt-1 font-light">არ არის სიტყვაში</p>
            </div>
            <div className="flex items-center justify-center">
              <SmallLetterInput letter="ა" color={colors[1]} />
              <span className="mr-2">,</span>
              <SmallLetterInput letter="დ" color={colors[1]} />
              <p className="pt-1 font-light">
                სიტყვაშია, თუმცა არასწორ ადგილას
              </p>
            </div>
            <div className="flex items-center justify-center">
              <SmallLetterInput letter="მ" color={colors[0]} />
              <span className="mr-2">,</span>
              <SmallLetterInput letter="ი" color={colors[0]} />
              <p className="pt-1 font-light">სიტყვაშია, სწორ ადგილას</p>
            </div>
          </div>
          <p>კიდევ ერთი ცდა, რომ იპოვოთ შესაბამისი ასოები სიტყვაში.</p>
          <div className="flex items-center justify-center">
            {"კალამი".split("").map((letter, index) => (
              <LetterInput
                key={index}
                letter={letter}
                color={colors[index < 4 ? 0 : 2]}
              />
            ))}
          </div>
          <p>ახლოსაა!</p>
          <div className="flex items-center justify-center">
            {"კალათა".split("").map((letter, index) => (
              <LetterInput key={index} letter={letter} color={colors[0]} />
            ))}
          </div>
          <p>სწორია!</p>
        </div>
      </div>
    </div>
  );
};
