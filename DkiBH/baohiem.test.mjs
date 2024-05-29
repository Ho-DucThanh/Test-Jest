import { describe, expect, test } from "@jest/globals";
import BaoHiem from "./baohiem";

describe("Đăng kí bảo hiểm", () => {
  // Test case 1: Bảo hiểm đầy đủ thông tin hợp lệ => True
  test("Bảo hiểm đầy đủ thông tin hợp lệ", () => {
    const baohiem = new BaoHiem("VIP", 3);
    expect(baohiem.isValidTypeAndDuration()).toBe(true);
  });

  // Test case 2: Thiếu thông tin loại bảo hiểm => False
  test("Thiếu thông tin loại bảo hiểm", () => {
    const baohiem = new BaoHiem("", 3);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 3: Thiếu thông tin thời hạn bảo hiểm => False
  test("Thiếu thông tin thời hạn bảo hiểm", () => {
    const baohiem = new BaoHiem("Vip", "");
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 4: Thiếu thông tin loại bảo hiểm và thời hạn bảo hiểm => False
  test("Thiếu thông tin loại bảo hiểm và thời hạn bảo hiểm", () => {
    const baohiem = new BaoHiem("", "");
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 5: Loại bảo hiểm không hợp lệ => False
  test("Loại bảo hiểm không hợp lệ", () => {
    const baohiem = new BaoHiem("InvalidType", 3);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 6: Loại bảo hiểm không hợp lệ => False
  test("Loại bảo hiểm có kí tự đặc biệt", () => {
    const baohiem = new BaoHiem("Vip@!", 3);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 7: Thời hạn bảo hiểm không hợp lệ (dưới 1 năm) => False
  test("Thời hạn bảo hiểm không hợp lệ (dưới 1 năm)", () => {
    const baohiem = new BaoHiem("Vip", 0);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 8: Thời hạn bảo hiểm là kí tự khác chữ số => False
  test("Thời hạn bảo hiểm là kí tự khác chữ số", () => {
    const baohiem = new BaoHiem("Vip", "abc");
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 9: Thời hạn bảo hiểm không hợp lệ (trên 5 năm) => False
  test("Thời hạn bảo hiểm không hợp lệ (trên 5 năm)", () => {
    const baohiem = new BaoHiem("Vip", 6);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 10: Thời hạn bảo hiểm không phải là số nguyên => False
  test("Thời hạn bảo hiểm không phải là số nguyên", () => {
    const baohiem = new BaoHiem("Vip", 3.5);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 11: Kiểm tra loại bảo hiểm không phân biệt chữ hoa chữ thường
  test("Kiểm tra loại bảo hiểm không phân biệt chữ hoa chữ thường", () => {
    const baohiem = new BaoHiem("vIp", 2);
    expect(baohiem.isValidTypeAndDuration()).toBe(true);
  });

  // Test case 12: Kiểm tra thời hạn bảo hiểm là 1 năm => True
  test("Kiểm tra thời hạn bảo hiểm là 1 năm", () => {
    const baohiem = new BaoHiem("Thường", 1);
    expect(baohiem.isValidTypeAndDuration()).toBe(true);
  });

  // Test case 13: Kiểm tra thời hạn bảo hiểm là 5 năm => True
  test("Kiểm tra thời hạn bảo hiểm là 5 năm", () => {
    const baohiem = new BaoHiem("Thường", 5);
    expect(baohiem.isValidTypeAndDuration()).toBe(true);
  });

  // Test case 14: Kiểm tra loại bảo hiểm trống và thời hạn bảo hiểm hợp lệ => False
  test("Kiểm tra loại bảo hiểm trống và thời hạn bảo hiểm hợp lệ", () => {
    const baohiem = new BaoHiem("", 2);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 15: Kiểm tra loại bảo hiểm hợp lệ và thời hạn bảo hiểm trống => False
  test("Kiểm tra loại bảo hiểm hợp lệ và thời hạn bảo hiểm trống", () => {
    const baohiem = new BaoHiem("Vip", null);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });
});
