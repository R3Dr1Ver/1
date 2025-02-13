const messages = [
    "m chắc chứ?",
    "thật à T_T ??",
    "lạc quan lên đi mà?",
    "xin m đấy...",
    "thử nghĩ xem!",
    "nếu m từ chối, t sẽ rất buồn...",
    "t sẽ rất buồn...",
    "t sẽ rất rất rất buồn ...",
    "Ok, t sẽ ko hỏi m nx...",
    "chỉ là đùa thôi, chấp nhận đi mà! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
