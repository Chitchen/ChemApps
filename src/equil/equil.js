import "./styles.css";

document.onload = () => {
  document.getElementById("equis").innerHTML = ``;
};

export function doMath(_ma, _mb, _ta, _tb, _ca, _cb) {
  const ca = _ca / _cb;
  const partA = (_ma / (+_ma + +_mb)) * _ta;
  const partB = (_mb / (+_ma + +_mb)) * _tb;
  //         a:tm  +  b:tm
  return partA + "\n" + partB + "\n" + (partA + partB) / ca;
}
