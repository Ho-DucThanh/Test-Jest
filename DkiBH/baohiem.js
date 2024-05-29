class BaoHiem {
  constructor(type, duration) {
    this.type = type;
    this.duration = duration;
  }

  isComplete() {
    return this.type && this.duration ? true : false;
  }

  isValidType() {
    const validTypes = ["vip", "thường"];
    return validTypes.includes(this.type.toLowerCase());
  }

  isValidDuration() {
    return (
      Number.isInteger(this.duration) &&
      this.duration >= 1 &&
      this.duration <= 5
    );
  }

  isValidTypeAndDuration() {
    return this.isComplete() && this.isValidType() && this.isValidDuration();
  }

  calculateInsuranceCost() {
    if (!this.isComplete()) {
      throw new Error("Thông tin bảo hiểm không đầy đủ");
    }
    if (!this.isValidType()) {
      throw new Error("Loại bảo hiểm không hợp lệ");
    }
    if (!this.isValidDuration()) {
      throw new Error("Thời hạn bảo hiểm không hợp lệ");
    }
    const costPerYear = this.type.toLowerCase() === "vip" ? 800000 : 500000;
    return costPerYear * this.duration;
  }
}

export default BaoHiem;
