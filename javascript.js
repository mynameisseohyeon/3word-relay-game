const number = Number(prompt("참가자는 몇 명 입니까?"));

if(number) { // promt창에서 확인을 누른 경우 쿵쿵따 실행
    const $applicant = document.querySelector("#applicant");
    const $suggestion = document.querySelector("#suggestion");
    const $input = document.querySelector("input");
    const $button = document.querySelector("button");
    alert(number);
    let word; //제시어
    let newWord; //새로 입력한 단어

    const onClickInput = function (event) {
        newWord = event.target.value;
    }

    $input.addEventListener("input", onClickInput);

    const onClickButton = function () {
        if (!word || (word[word.length - 1] === newWord[0] && newWord.length === 3)) { //제시어 입력 확인
            word = newWord;
            $suggestion.textContent = word; //화면에 제시어 표시
            const order = Number($applicant.textContent); //현재 순서 표시
            if (order + 1 > number ) { // 순서 넘기기
                $applicant.textContent = 1;
            }else {
                $applicant.textContent = order + 1;
            }
        } else { //올바르지 않은 단어를 입력한 경우
            alert("올바르지 않은 단어입니다.");
        }
        $input.value = ""; //input 값을 빈값으로 만들어줌
        $input.focus(); // 입력창에 하이라이트
    }
        
    $button.addEventListener("click", onClickButton);
}