import * as yup from "yup";

const baseTranslationPath = "PostDetail.errors.";

export const commentFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required(`${baseTranslationPath}emailEmpty`)
    .email(`${baseTranslationPath}emailIncorrect`),
  name: yup.string().required(`${baseTranslationPath}nameEmpty`),
  body: yup.string().required(`${baseTranslationPath}bodyEmpty`),
});
