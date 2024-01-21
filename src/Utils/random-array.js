export default function Random({length}) {
    const randomArray = Array.from({length: length}, () => Math.floor(5 + Math.random() * 50));
  return (
    randomArray
  )
}
