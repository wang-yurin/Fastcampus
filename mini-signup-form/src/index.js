// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. 페이지가 로드 된 시점에 ID 입력창에 Focus가 되어 있어야 합니다.
// 대상 : ID 입력창 input
// 시점, 이벤트 : 페이지가 로드 되었을 때
// 핸들러 : Focus()
// 아래와 같이 하는 방법도 있지만 input 속성에 autofocus 있음, 추가하면 더 간단.
const $id = document.querySelector('#id')
window.addEventListener('load', () => {
    $id.focus()
})

// 2. 유효성 검사 로직
// 대상 : ID, 비밀번호, 비밀번호 확인 input
// 이벤트 : (1) input focus out, (2) 가입하기 버튼 눌렀을 때
// 핸들러 : (1) 해당 input 유효성 검사, (2) 모든 필드의 유효성 검사
const $pw = document.querySelector('#pw')
const $pwCheck = document.querySelector('#pw-check')
const $submit = document.querySelector('#submit')
const $idMsg = document.querySelector('#id-msg')
const $pwMsg = document.querySelector('#pw-msg')
const $pwCheckMsg = document.querySelector('#pw-check-msg')

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

const ID_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
}
const PW_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
}
const PW_CHECK_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '비밀번호가 일치하지 않습니다.',
}

const checkIdValidation = (value) => {
    // 모든 필드의 값은 빠짐 없이 입력해야 합니다.
    // 5~20자. 영문 소문자, 숫자. 특수기호(_),(-)만 사용 가능
    let isValidId
    if (value.length === 0) {
        isValidId = 'required'
    } else {
        isValidId = ID_REGEX.test(value) ? true : 'invalid'
    }
    console.log(isValidId)
    // 3. 커스텀 에러 메시지
    // (1) 비어 있을 때, (2) 유효하지 않은 값일 때
    // input 태그에 border-red-600 class 추가 & **-msg div에 에러 메시지 추가
    if (isValidId !== true) {
        $id.classList.add('border-red-600')
        $idMsg.innerText = ID_ERROR_MSG[isValidId]
    } else {
        $id.classList.remove('border-red-600')
        $idMsg.innerText = ''
    }
}
$id.addEventListener('focusout', () => checkIdValidation($id.value))

const checkPwValidation = (value) => {
    // 모든 필드의 값은 빠짐 없이 입력해야 합니다.
    // 8~16자. 영문 대/소문자, 숫자 사용 가능
    let isValidPw
    if (value.length === 0) {
        isValidPw = 'required'
    } else {
        isValidPw = PW_REGEX.test(value) ? true : 'invalid'
    }

    // 3. 커스텀 에러 메시지 추가
    if (isValidPw !== true) {
        $pw.classList.add('border-red-600')
        $pwMsg.innerText = PW_ERROR_MSG[isValidPw]
    } else {
        $pw.classList.remove('border-red-600')
        $pwMsg.innerText = ''
    }
}
$pw.addEventListener('focusout', () => checkPwValidation($pw.value))

const checkPwCheckValidation = (value) => {
    // 비밀번호와 일치
    // 3. 커스텀 에러 메시지 추가
    let isValidPwCheck
    if (value.length === 0) {
        isValidPwCheck = 'required'
    } else {
        isValidPwCheck = $pw.value === value ? true : 'invalid'
    }

    if (isValidPwCheck !== true) {
        $pwCheck.classList.add('border-red-600')
        $pwCheckMsg.innerText = PW_CHECK_ERROR_MSG[isValidPwCheck]
    } else {
        $pwCheck.classList.remove('border-red-600')
        $pwCheckMsg.innerText = ''
    }
}
$pwCheck.addEventListener('focusout', () =>
    checkPwCheckValidation($pwCheck.value)
)

$submit.addEventListener('click', (event) => {
    checkIdValidation($id.value)
    checkPwValidation($pw.value)
    checkPwCheckValidation($pwCheck.value)
    event.preventDefault()
})
