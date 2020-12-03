export default function generateColor() {
  return `#${(0 | (Math.random() * 0xeeeeee + 0x111111)).toString(16)}`;
}
