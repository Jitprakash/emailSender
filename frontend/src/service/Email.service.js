import { customAxios } from "./emailHealper";

export const sendEmail = async (emailData) => {
    const responce = await customAxios.post("/email/send", emailData);
    const result = await responce.data;
    return result;
}