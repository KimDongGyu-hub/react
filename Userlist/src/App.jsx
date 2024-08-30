import Profile from "./assets/ProFileCard/ProFileCard";
import userData from "./userData";
import { useState } from "react";

function App() {
  // 이메일 선택하기
  const [selectedLable, setSelectedLable] = useState("버튼을 클릭해주세요..");

  function showEmail(email) {
    setSelectedLable(email);
  }

  // 숫자 바꾸기
  const [click, setClick] = useState("10000원");

  function changeClick() {
    setClick("5000원");
  }

  // +,- 버튼 만들기
  const [addSubClick, setAddSubClick] = useState(0);

  function addclick() {
    setAddSubClick(addSubClick + 1);
  }

  function subClick() {
    setAddSubClick(addSubClick - 1);
  }

  // 랜덤 숫자 나오기
  const [array, setArray] = useState([0]);

  function click2() {
    let random = Math.floor(Math.random() * 100);
    setArray([...array, random]);
  }

  return (
    <div>
      <div className="App">
        <Profile {...userData[0]}>
          <li>{userData[0].hobbies[0]}</li>
          <button
            // 이메일 선택 버튼 만들기
            onClick={() => showEmail(`선택된 이메일은 ${userData[0].email}`)}
          >
            메일보내기
          </button>
        </Profile>
        <Profile {...userData[1]}>
          <li>{userData[1].hobbies[0]}</li>
          <li>{userData[1].hobbies[1]}</li>
          <button
            onClick={() => showEmail(`선택된 이메일은 ${userData[1].email}`)}
          >
            메일보내기
          </button>
        </Profile>
        <Profile {...userData[2]}>
          <li>{userData[2].hobbies[0]}</li>
          <li>{userData[2].hobbies[1]}</li>
          <li>{userData[2].hobbies[2]}</li>
          <button
            onClick={() => showEmail(`선택된 이메일은 ${userData[2].email}`)}
          >
            메일보내기
          </button>
        </Profile>
        <Profile {...userData[3]}>
          <li>{userData[3].hobbies[0]}</li>
          <li>{userData[3].hobbies[1]}</li>
          <li>{userData[3].hobbies[2]}</li>
          <li>{userData[3].hobbies[3]}</li>
          <button
            onClick={() => showEmail(`선택된 이메일은 ${userData[3].email}`)}
          >
            메일보내기
          </button>
        </Profile>
        <Profile {...userData[4]}>
          <li>{userData[4].hobbies[0]}</li>
          <li>{userData[4].hobbies[1]}</li>
          <li>{userData[4].hobbies[2]}</li>
          <li>{userData[4].hobbies[3]}</li>
          <li>{userData[4].hobbies[4]}</li>
          <button
            onClick={() => showEmail(`선택된 이메일은 ${userData[4].email}`)}
          >
            메일보내기
          </button>
        </Profile>
      </div>

      {/* 숫자 바꾸기 */}
      <p>{selectedLable}</p>
      <div className="app">
        <h1>{click}</h1>
        <button onClick={() => changeClick()}>가격할인하기</button>
      </div>

      {/* +, - 버튼 만들기 */}
      <div className="app">
        <h1>{addSubClick}</h1>
        <button onClick={() => addclick()}>+</button>
        <button onClick={() => subClick()}>-</button>
      </div>

      {/* 랜덤 숫자만들기 */}
      <div className="app">
        <h1>{array.join(",")}</h1>
        <button onClick={click2}>랜덤</button>
      </div>
    </div>
  );
}

export default App;
