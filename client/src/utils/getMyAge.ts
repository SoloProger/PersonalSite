export default function getAge(): number {
  const nowDate = new Date();
  const today = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate()
  );
  const birthDayDate = new Date(2002, 3, 22);
  let age = today.getFullYear() - birthDayDate.getFullYear();
  return age;
}
