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
});
