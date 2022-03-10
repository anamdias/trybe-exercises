const wakeUp = () => {
  return ('Acordando!!')
}

const comer = () => {
  return ('Bora tomar café!!')

}
const dormir = () => {
  return ('Partiu dormir!!')
}
const doingThings = (callback) => {
  console.log(callback())
}

doingThings(wakeUp)
