export const inquiryMessageMaxLength = 2_000;
export const inquiryClientTimeoutMs = 12_000;

export const clampInquiryMessage = (value: string) =>
  value.slice(0, inquiryMessageMaxLength);
