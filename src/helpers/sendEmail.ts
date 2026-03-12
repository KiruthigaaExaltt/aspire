interface EmailResponseType {
  status: "success" | "error";
  statusCode?: number;
  message?: string;
  data?: {
    status: string;
    response: string;
  };
}

export const toUrlEncoded = (data: Record<string, unknown>) => {
  const params = new URLSearchParams();

  const isPrimitive = (val: unknown): boolean =>
    typeof val === "string" ||
    typeof val === "number" ||
    typeof val === "boolean" ||
    val === undefined;

  const appendValue = (key: string, value: unknown): void => {
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (isPrimitive(item)) {
          params.append(`${key}[${index}]`, String(item));
        } else if (typeof item === "object" && item !== null) {
          appendObject(`${key}[${index}]`, item);
        }
      });
    } else if (typeof value === "object" && value !== null) {
      appendObject(key, value as Record<string, unknown>);
    } else if (isPrimitive(value)) {
      params.append(key, String(value));
    }
  };

  const appendObject = (prefix: string, obj: Record<string, unknown>): void => {
    Object.entries(obj).forEach(([subKey, subValue]) => {
      appendValue(`${prefix}[${subKey}]`, subValue);
    });
  };

  Object.entries(data).forEach(([key, value]) => {
    appendValue(key, value);
  });

  return params.toString();
};

const sendEmail = async (
  emailPayload: Record<string, unknown>,
): Promise<EmailResponseType> => {
  console.log(import.meta.env?.VITE_MAIL_API_ENDPOINT);
  const url = import.meta.env?.VITE_MAIL_API_ENDPOINT ?? "";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: toUrlEncoded(emailPayload),
  });

  return response.json();
};

export default sendEmail;
