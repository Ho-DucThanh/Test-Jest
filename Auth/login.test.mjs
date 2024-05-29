import { describe, expect, test } from "@jest/globals";
import Auth_User from "./login";

describe("Kiểm tra tài khoản người dùng", () => {
  // Test case 1: Tên đăng nhập và mật khẩu đúng định dạng => True
  test("Tên đăng nhập và mật khẩu đúng định dạng", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 2: Tên đăng nhập bỏ trống => False
  test("Tên đăng nhập bỏ trống", () => {
    const user_Login = new Auth_User("", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 3: Mật khẩu bỏ trống => False
  test("Mật khẩu bỏ trống", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 4: Tên đăng nhập và mật khẩu bỏ trống => False
  test("Tên đăng nhập và mật khẩu bỏ trống", () => {
    const user_Login = new Auth_User("", "");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 5: Email không đúng định dạng (không có @gmail.com) => False
  test("Email không đúng định dạng (không có @gmail.com)", () => {
    const user_Login = new Auth_User("thanhbr06@gmail", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 6: Mật khẩu không hợp lệ (< 8 ký tự) => False
  test("Mật khẩu không hợp lệ", () => {
    const user_Login = new Auth_User("thanh123@gmail.com", "123456");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 7: Email và mật khẩu không hợp lệ => False
  test("Email và mật khẩu không hợp lệ", () => {
    const user_Login = new Auth_User("thanhbr06@gmail", "12345");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 8: Email có thêm dấu cách => False
  test("Email có thêm dấu cách", () => {
    const user_Login = new Auth_User(" thanhbr06@gmail.com ", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 9: Email hợp lệ, mật khẩu chứa ký tự đặc biệt => True
  test("Email hợp lệ, mật khẩu chứa ký tự đặc biệt", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "1234$5678");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 10: Email hợp lệ, mật khẩu chỉ chứa ký tự số => True
  test("Email hợp lệ, mật khẩu chỉ chứa ký tự số", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 11: Email hợp lệ, mật khẩu chỉ chứa ký tự chữ => True
  test("Email hợp lệ, mật khẩu chỉ chứa ký tự chữ", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "abcdefgh");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 12: Email hợp lệ, mật khẩu chứa khoảng trắng => True
  test("Email hợp lệ, mật khẩu chứa khoảng trắng", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "abcd efgh");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 13: Email hợp lệ, mật khẩu rất dài => True
  test("Email hợp lệ, mật khẩu rất dài", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "a".repeat(100));
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 14: Email không hợp lệ, mật khẩu hợp lệ => False
  test("Email không hợp lệ, mật khẩu hợp lệ", () => {
    const user_Login = new Auth_User("thanhbr06gmail.com", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 15: Email hợp lệ, mật khẩu chỉ chứa dấu cách => False
  test("Email hợp lệ, mật khẩu chỉ chứa dấu cách", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "        ");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 16: Email hợp lệ, mật khẩu chứa ký tự đặc biệt không hợp lệ => True
  test("Email hợp lệ, mật khẩu chứa ký tự đặc biệt không hợp lệ", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "1234$5678");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 17: Email không hợp lệ, mật khẩu chứa ký tự đặc biệt => False
  test("Email không hợp lệ, mật khẩu chứa ký tự đặc biệt", () => {
    const user_Login = new Auth_User("thanhbr06gmail.com", "1234$5678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 18: Email hợp lệ, mật khẩu chứa ký tự unicode => True
  test("Email hợp lệ, mật khẩu chứa ký tự unicode", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "mậtkhẩu123");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });
});
