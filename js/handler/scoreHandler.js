const scoreEl = document.querySelector("#scoreEl");
const bigScoreEl = document.querySelector("#bigScoreEl");

let score = 0;

const setScore = (value) => {
  score = value;
  scoreEl.innerHTML = score;
  bigScoreEl.innerHTML = score;
};

const getScore = () => {
  return score;
};

export { setScore, getScore, scoreEl, bigScoreEl };
