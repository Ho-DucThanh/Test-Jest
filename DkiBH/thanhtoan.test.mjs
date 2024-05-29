import { describe, expect, test } from "@jest/globals";
import BaoHiem from "./baohiem";

describe("Thanh toán tiền bảo hiểm", () => {
  // Test case 1: Tính số tiền bảo hiểm loại VIP với thời hạn 1 năm
  test("Tính số tiền bảo hiểm loại VIP với thời hạn 1 năm", () => {
    const baohiem = new BaoHiem("Vip", 1);
    expect(baohiem.calculateInsuranceCost()).toBe(800000);
  });

  // Test case 2: Tính số tiền bảo hiểm loại VIP với thời hạn 3 năm
  test("Tính số tiền bảo hiểm loại VIP với thời hạn 3 năm", () => {
    const baohiem = new BaoHiem("Vip", 3);
    expect(baohiem.calculateInsuranceCost()).toBe(2400000);
  });

  // Test case 3: Tính số tiền bảo hiểm loại VIP với thời hạn 5 năm
  test("Tính số tiền bảo hiểm loại VIP với thời hạn 5 năm", () => {
    const baohiem = new BaoHiem("Vip", 5);
    expect(baohiem.calculateInsuranceCost()).toBe(4000000);
  });

  // Test case 4: Tính số tiền bảo hiểm loại Thường với thời hạn 1 năm
  test("Tính số tiền bảo hiểm loại Thường với thời hạn 1 năm", () => {
    const baohiem = new BaoHiem("Thường", 1);
    expect(baohiem.calculateInsuranceCost()).toBe(500000);
  });

  // Test case 5: Tính số tiền bảo hiểm loại Thường với thời hạn 2 năm
  test("Tính số tiền bảo hiểm loại Thường với thời hạn 2 năm", () => {
    const baohiem = new BaoHiem("Thường", 2);
    expect(baohiem.calculateInsuranceCost()).toBe(1000000);
  });

  // Test case 6: Tính số tiền bảo hiểm loại Thường với thời hạn 5 năm
  test("Tính số tiền bảo hiểm loại Thường với thời hạn 5 năm", () => {
    const baohiem = new BaoHiem("Thường", 5);
    expect(baohiem.calculateInsuranceCost()).toBe(2500000);
  });

  // Test case 7: Loại bảo hiểm không hợp lệ => Exception (hoặc giá trị không hợp lệ)
  test("Loại bảo hiểm không hợp lệ", () => {
    const baohiem = new BaoHiem("InvalidType", 3);
    expect(() => baohiem.calculateInsuranceCost()).toThrow();
  });

  // Test case 8: Thời hạn bảo hiểm không hợp lệ (dưới 1 năm) => Exception (hoặc giá trị không hợp lệ)
  test("Thời hạn bảo hiểm không hợp lệ (dưới 1 năm)", () => {
    const baohiem = new BaoHiem("Vip", 0);
    expect(() => baohiem.calculateInsuranceCost()).toThrow();
  });

  // Test case 9: Thời hạn bảo hiểm không hợp lệ (trên 5 năm) => Exception (hoặc giá trị không hợp lệ)
  test("Thời hạn bảo hiểm không hợp lệ (trên 5 năm)", () => {
    const baohiem = new BaoHiem("Vip", 6);
    expect(() => baohiem.calculateInsuranceCost()).toThrow();
  });

  // Test case 10: Thời hạn bảo hiểm không phải là số nguyên => Exception (hoặc giá trị không hợp lệ)
  test("Thời hạn bảo hiểm không phải là số nguyên", () => {
    const baohiem = new BaoHiem("Vip", 3.5);
    expect(() => baohiem.calculateInsuranceCost()).toThrow();
  });

  // Test case 11: Loại bảo hiểm trống => Exception (hoặc giá trị không hợp lệ)
  test("Loại bảo hiểm trống", () => {
    const baohiem = new BaoHiem("", 2);
    expect(() => baohiem.calculateInsuranceCost()).toThrow();
  });

  // Test case 12: Thời hạn bảo hiểm trống => Exception (hoặc giá trị không hợp lệ)
  test("Thời hạn bảo hiểm trống", () => {
    const baohiem = new BaoHiem("Vip", null);
    expect(() => baohiem.calculateInsuranceCost()).toThrow();
  });

  // Test case 13: Loại bảo hiểm "VIP" với thời hạn hợp lệ không phân biệt chữ hoa chữ thường
  test("Loại bảo hiểm 'VIP' với thời hạn hợp lệ không phân biệt chữ hoa chữ thường", () => {
    const baohiem = new BaoHiem("vIp", 2);
    expect(baohiem.calculateInsuranceCost()).toBe(1600000);
  });

  // Test case 14: Loại bảo hiểm "Thường" với thời hạn hợp lệ không phân biệt chữ hoa chữ thường
  test("Loại bảo hiểm 'Thường' với thời hạn hợp lệ không phân biệt chữ hoa chữ thường", () => {
    const baohiem = new BaoHiem("thƯờng", 2);
    expect(baohiem.calculateInsuranceCost()).toBe(1000000);
  });
});
