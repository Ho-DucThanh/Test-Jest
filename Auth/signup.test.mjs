import { describe, expect, test } from "@jest/globals";
import User_Signup from "./signup";

describe("Kiểm tra đăng kí tài khoản người dùng", () => {
  // Test case 1: Thông tin đăng kí tài khoản hợp lệ => True
  test("Thông tin đăng kí tài khoản hợp lệ", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "12345678",
      "12345678"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 2: Bỏ trống tất cả thông tin => False
  test("Bỏ trống tất cả thông tin", () => {
    const user_Signup = new User_Signup("", "", "");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 3: Tên đăng nhập bỏ trống => False
  test("Tên đăng nhập bỏ trống", () => {
    const user_Signup = new User_Signup("", "12345678", "12345678");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 4: Mật khẩu bỏ trống => False
  test("Mật khẩu bỏ trống", () => {
    const user_Signup = new User_Signup("thanhbr06@gmail.com", "", "12345678");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 5: Không confirm Mật khẩu => False
  test("Không confirm Mật khẩu", () => {
    const user_Signup = new User_Signup("thanhbr06@gmail.com", "12345678", "");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 6: Email không đúng định dạng (không có @gmail.com) => False
  test("Email không đúng định dạng (không có @gmail.com)", () => {
    const user_Signup = new User_Signup("thanh123", "12345678", "12345678");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 7: Mật khẩu không hợp lệ (< 8 ký tự) => False
  test("Mật khẩu không hợp lệ", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "123456",
      "123456"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 8: Mật khẩu và xác nhận mật khẩu không khớp => False
  test("Mật khẩu và xác nhận mật khẩu không khớp", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "12345678",
      "1234567"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 9: Email và mật khẩu không hợp lệ => False
  test("Email và mật khẩu không hợp lệ", () => {
    const user_Signup = new User_Signup("thanhbr06@gmail", "123456", "123456");
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 10: Email có thêm dấu cách => False
  test("Email có thêm dấu cách", () => {
    const user_Signup = new User_Signup(
      " thanhbr06@gmail.com ",
      "12345678",
      "12345678"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 11: Email hợp lệ, mật khẩu chứa ký tự đặc biệt => True
  test("Email hợp lệ, mật khẩu chứa ký tự đặc biệt", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "1234$5678",
      "1234$5678"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 12: Email hợp lệ, mật khẩu chỉ chứa ký tự số => True
  test("Email hợp lệ, mật khẩu chỉ chứa ký tự số", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "12345678",
      "12345678"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 13: Email hợp lệ, mật khẩu chỉ chứa ký tự chữ => True
  test("Email hợp lệ, mật khẩu chỉ chứa ký tự chữ", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "abcdefgh",
      "abcdefgh"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 14: Email hợp lệ, mật khẩu chứa khoảng trắng => True
  test("Email hợp lệ, mật khẩu chứa khoảng trắng", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "abcd efgh",
      "abcd efgh"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 15: Email hợp lệ, mật khẩu rất dài => True
  test("Email hợp lệ, mật khẩu rất dài", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "a".repeat(100),
      "a".repeat(100)
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 16: Email không hợp lệ, mật khẩu hợp lệ => False
  test("Email không hợp lệ, mật khẩu hợp lệ", () => {
    const user_Signup = new User_Signup(
      "thanhbr06gmail.com",
      "12345678",
      "12345678"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 17: Email hợp lệ, mật khẩu chỉ chứa dấu cách => False
  test("Email hợp lệ, mật khẩu chỉ chứa dấu cách", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "        ",
      "        "
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 18: Email không hợp lệ, mật khẩu chứa ký tự đặc biệt => False
  test("Email không hợp lệ, mật khẩu chứa ký tự đặc biệt", () => {
    const user_Signup = new User_Signup(
      "thanhbr06gmail.com",
      "1234$5678",
      "1234$5678"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 19: Email hợp lệ, mật khẩu chứa ký tự unicode => True
  test("Email hợp lệ, mật khẩu chứa ký tự unicode", () => {
    const user_Signup = new User_Signup(
      "thanhbr06@gmail.com",
      "mậtkhẩu123",
      "mậtkhẩu123"
    );
    expect(user_Signup.isValidEmailAndPassword()).toBe(true);
  });
});
