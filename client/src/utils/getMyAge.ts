export default function getAge() {
  const nowDate = new Date();
  const today = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate(),
  );

  const birthDayDate = new Date(2002, 3, 22);
  //   const birthDayDateNow = new Date(
  //     today.getFullYear(),
  //     birthDayDate.getMonth(),
  //     birthDayDate.getDate()
  //   );
  // if (today < birthDayDateNow) {
  //   age -= age;
  // }
  return today.getFullYear() - birthDayDate.getFullYear();
}
