export function getAge(): number {
  const nowDate: Date = new Date();
  const today: Date = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate()
  );
  const birthDayDate: Date = new Date(2002, 3, 22);
  return today.getFullYear() - birthDayDate.getFullYear();
}
