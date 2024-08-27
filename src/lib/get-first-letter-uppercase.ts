export default function getFirstLetterUpperCase(
  inputString: string | null | undefined
): string {
  if (inputString !== null && inputString !== undefined) {
    return inputString.charAt(0).toUpperCase();
  } else {
    return "";
  }
}
