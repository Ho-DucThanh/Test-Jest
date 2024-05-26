import { describe, expect, test } from "@jest/globals";
import User_Signup from "./signup";

describe("Kiểm tra đăng kí tài khoản người dùng", () => {
  // Test case 1:  Tên đăng nhập và mật khẩu, xác nhận đúng định dạng => True
  test("Thông tin đăng kí tài khoản hợp lệ", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "12345678",
      "12345678"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(true);
  });

  //   Test case 2: Bỏ trống tất cả thông tin => False
  test("Bỏ trống tất cả thông tin", () => {
    const user_Signup = new User_Signup("", "", "");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 3:  Tên đăng nhập bỏ trống => False
  test("Tên đăng nhập bỏ trống", () => {
    const user_Signup = new User_Signup("", "12345678", "12345678");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 4:  Mật khẩu bỏ trống => False
  test("Mật khẩu bỏ trống", () => {
    const user_Signup = new User_Signup("thanhbr06@gmail.com", "", "12345678");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 5:  Không confirm Mật khẩu => False
  test("Không confirm Mật khẩu", () => {
    const user_Signup = new User_Signup("thanhbr06@gmail.com", "12345678", "");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  //   Test case 6:  Email không đúng định dạng => False
  test("Email không đúng định dạng (không có @gmail.com)", () => {
    const user_Signup = new User_Signup("thanh123", "12345678", "12345678");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  //   Test case 7: Mật khẩu không hợp lệ ( < 8 ký tự) => False
  test("Mật khẩu không hợp lệ", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "123456",
      "123456"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  //   Test case 8: Mật khẩu và xác nhận mật khẩu không khớp => False
  test("Mat khau khong hop le", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "12345678",
      "1234567"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  //   Test case 9: Email và mật khẩu không hợp lệ => False
  test("Email và mật khẩu không hợp lệ", () => {
    const user_Signup = new User_Signup("thanhbr06@gmail", "123456", "123456");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });
});
