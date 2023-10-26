const ID = crypto.randomUUID().substring(0, 191)

console.log(ID)

const res = await fetch(`http://52.78.156.134:3000/join?username=${ID}`)

console.log(await res.text())

const check = async () => {
  const res = await fetch(`http://52.78.156.134:3000/check?username=${ID}`)
  console.log(await res.text())
}

let now = Date.now()

for (const i of Array.from(Array(128).keys())) {
  check()
  // setTimeout(check, 1000 - (Date.now() - now))
  // now = Date.now()
}
