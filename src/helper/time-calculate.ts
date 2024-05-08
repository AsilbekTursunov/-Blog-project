export const estimatedCalculateTimeToRead = (text: string) => {
  const wpm = 120
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  console.log(time)

  return time
}
