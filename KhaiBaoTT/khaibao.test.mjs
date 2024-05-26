import { describe, expect, test } from "@jest/globals";
import User_Infor from "./khaibao";

describe("Khai báo thông tin đăng kí bảo hiểm", () => {
  //  Test case 1: User có đầy đủ thông tin hợp lệ => True
  test("User có đầy đủ thông tin hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  //  Test case 2: User không có đầy đủ thông tin => False
  test("User không có đầy đủ thông tin", () => {
    const user = new User_Infor("John Doe", 30, "", "0123456789", "");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 3: Tên User không hợp lệ => False
  test("Tên User không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe123",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 4: Tuổi User không hợp lệ => False
  test("Tuổi User không hợp lệ (số nguyên và nằm trong khoảng từ (0, 120))", () => {
    const user = new User_Infor(
      "John Doe",
      120,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 6: User có số điện thoại không hợp lệ => False
  test("User có số điện thoại không hợp lệ (bắt đầu bằng số 0 và đủ 10 số)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "1234567890",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 7: Địa chỉ không hợp lệ => False
  test("User có địa chỉ không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street!@#"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 8: User có tất cả các thông tin không hợp lệ => False
  test("User có tất cả các thông tin không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe123",
      40.5,
      "Other",
      "0123456",
      "123 Street@@@"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 9: User có 1 hoặc cùng lúc nhiều thông tin không hợp lệ => False
  test("User có 1 hoặc cùng lúc nhiều thông tin không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      40,
      "Other",
      "0123456789",
      "123 Street@@@"
    );
    expect(user.isValidUser()).toBe(false);
  });
});
