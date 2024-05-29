import { describe, expect, test } from "@jest/globals";
import User_Infor from "./khaibao";

describe("Khai báo thông tin đăng kí bảo hiểm", () => {
  // Test case 1: User có đầy đủ thông tin hợp lệ => True
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

  // Test case 2: User không có đầy đủ thông tin => False
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

  // Test case 4: Tuổi User không hợp lệ (số nguyên và nằm trong khoảng từ (0, 120)) => False
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

  // Test case 5: Giới tính không hợp lệ => False
  test("Giới tính không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Other",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 6: User có số điện thoại không hợp lệ (bắt đầu bằng số 0 và đủ 10 số) => False
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

  // Test case 10: Tên chứa ký tự đặc biệt => False
  test("Tên chứa ký tự đặc biệt", () => {
    const user = new User_Infor(
      "John@Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 11: Tuổi là số âm => False
  test("Tuổi là số âm", () => {
    const user = new User_Infor(
      "John Doe",
      -5,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 12: Số điện thoại có ký tự chữ => False
  test("Số điện thoại có ký tự chữ", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "01234abcd9",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 13: Tên hợp lệ, tuổi hợp lệ, giới tính hợp lệ, số điện thoại hợp lệ, địa chỉ có dấu tiếng Việt => True
  test("Thông tin hợp lệ, địa chỉ có dấu tiếng Việt", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Đường Số 1"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 14: Tuổi là số thập phân => False
  test("Tuổi là số thập phân", () => {
    const user = new User_Infor(
      "John Doe",
      25.5,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 15: Địa chỉ trống => False
  test("Địa chỉ trống", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "0123456789", "");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 16: Thiếu tên => False
  test("Thiếu tên", () => {
    const user = new User_Infor("", 30, "Nam", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 17: Thiếu tuổi => False
  test("Thiếu tuổi", () => {
    const user = new User_Infor(
      "John Doe",
      null,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 18: Thiếu giới tính => False
  test("Thiếu giới tính", () => {
    const user = new User_Infor("John Doe", 30, "", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 19: Thiếu số điện thoại => False
  test("Thiếu số điện thoại", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 20: Thiếu địa chỉ => False
  test("Thiếu địa chỉ", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "0123456789", "");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 21: Tên chứa số => False
  test("Tên chứa số", () => {
    const user = new User_Infor(
      "John123 Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 22: Tuổi vượt quá giới hạn => False
  test("Tuổi vượt quá giới hạn", () => {
    const user = new User_Infor(
      "John Doe",
      121,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 23: Giới tính không hợp lệ => False
  test("Giới tính không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Khác",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 24: Số điện thoại không đủ 10 số => False
  test("Số điện thoại không đủ 10 số", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "012345678",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 25: Địa chỉ chứa ký tự đặc biệt => False
  test("Địa chỉ chứa ký tự đặc biệt", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street!@#"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 26: Tên chứa dấu tiếng Việt => True
  test("Tên chứa dấu tiếng Việt", () => {
    const user = new User_Infor(
      "Nguyễn Văn A",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 27: Địa chỉ chứa dấu tiếng Việt => True
  test("Địa chỉ chứa dấu tiếng Việt", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Đường Số 1"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 28: Tên trống, tuổi hợp lệ, giới tính hợp lệ, số điện thoại hợp lệ, địa chỉ hợp lệ => False
  test("Tên trống, các thông tin khác hợp lệ", () => {
    const user = new User_Infor("", 30, "Nam", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 29: Tên hợp lệ, tuổi trống, giới tính hợp lệ, số điện thoại hợp lệ, địa chỉ hợp lệ => False
  test("Tuổi trống, các thông tin khác hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      null,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 30: Tên hợp lệ, tuổi hợp lệ, giới tính trống, số điện thoại hợp lệ, địa chỉ hợp lệ => False
  test("Giới tính trống, các thông tin khác hợp lệ", () => {
    const user = new User_Infor("John Doe", 30, "", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 31: Tên hợp lệ, tuổi hợp lệ, giới tính hợp lệ, số điện thoại trống, địa chỉ hợp lệ => False
  test("Số điện thoại trống, các thông tin khác hợp lệ", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 32: Tên hợp lệ, tuổi hợp lệ, giới tính hợp lệ, số điện thoại hợp lệ, địa chỉ trống => False
  test("Địa chỉ trống, các thông tin khác hợp lệ", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "0123456789", "");
    expect(user.isValidUser()).toBe(false);
  });
});
