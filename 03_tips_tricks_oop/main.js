const increment = function () {
  let _x = 1;
  let _y = 'string';

  const getY = () => {
    return _y;
  }

  const incrementY = () => {
    _y = _y++;
    console.log(_y);
    return _y;
  }

  const increment = (x) => {
    incrementY();
    return x + 1;
  }

  return {
    public_x: _x,
    getY: getY,
    increase: increment,
  }
};

console.log(increment());

const x = increment;
const y = increment();

console.log(y);
console.log(y.getY());
console.log(increment().getY());
console.log(y.increase(5));
console.log(y.getY());
console.log('increment', increment().increase(5));
console.log(increment().getY());

class CD {
  duration;

  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }

  getDuration() {
    return this.duration;
  }

  setDuration(duration) {
    this.duration = duration;
  }
}

const newCd = new CD('Led Zeppelin I', 'Led Zeppelin');
newCd.setDuration(3);
console.log(newCd.getDuration());
