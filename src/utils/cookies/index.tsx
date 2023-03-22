export const setCookies = (cookieName: string, cookieValue: string) => {
  const date = new Date();
  date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
export const getCookies = (cookieName: string) => {
  // 获取所有Cookie
  const cookies = document.cookie;

  // 将字符串分割成单个Cookie
  const cookiesArray = cookies.split(";");

  // 循环遍历Cookie
  for (let i = 0; i < cookiesArray.length; i++) {
    const cookie = cookiesArray[i].trim();
    // 查找需要的Cookie
    if (cookie.indexOf(cookieName+"=") == 0) {
      // 获取Cookie值
      const cookieValue = cookie.substring((cookieName + "=").length, cookie.length);
      // 使用Cookie值执行其他操作
      return cookieValue;
    }
  }
}