import { describe, expect, test } from "@jest/globals";
import User_Login from "./login";

describe("Kiểm tra tài khoản người dùng", () => {
  // Test case 1:  Tên đăng nhập và mật khẩu đúng định dạng => True
  test("Tên đăng nhập và mật khẩu đúng định dạng", () => {
    const user_Login = new User_Login("thanhbr06@gmail.com", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 2:  Tên đăng nhập bỏ trống => False
  test("Tên đăng nhập bỏ trống", () => {
    const user_Login = new User_Login("", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 3:  Mật khẩu bỏ trống => False
  test("Mật khẩu bỏ trống", () => {
    const user_Login = new User_Login("thanhbr06@gmail.com", "");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 4:  Tên đăng nhập và mật khẩu bỏ trống => False
  test("Tên đăng nhập và mật khẩu bỏ trống", () => {
    const user_Login = new User_Login("", "");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 5:  Email không đúng định dạng => False
  test("Email không đúng định dạng (không có @gmail.com)", () => {
    const user_Login = new User_Login("thanhbr06@gmail", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 6: Mật khẩu không hợp lệ ( < 8 ký tự) => False
  test("Mật khẩu không hợp lệ", () => {
    const user_Login = new User_Login("thanh123@gmail.com", "123456");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 7: Email và mật khẩu không hợp lệ => False
  test("Email và mật khẩu không hợp lệ", () => {
    const user_Login = new User_Login("thanhbr06@gmail", "12345");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });
});
