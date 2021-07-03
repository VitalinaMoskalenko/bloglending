import { Formik, FormikHelpers } from "formik";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button, Input, TextField } from "../../../components";
import { useFormikErrorMessage } from "../../../lib/hooks";
import { commentFormValidationSchema } from "../../../lib/validators";
import {
  BreakpointType,
  CommentFormikValues,
  CreateCommentRequestType,
} from "../../../types";

const FormContainer = styled.div`
  margin: 10px 40px;
  @media (max-width: ${BreakpointType.xs}px) {
    margin: 10px 0px;
  }
`;

const StyledInput = styled(Input).attrs({})``;

const DescriptionInput = styled(TextField).attrs({})``;

const SubmitButton = styled(Button).attrs({
  style: {
    margin: "20px 0px",
    float: "right",
  },
})``;

const baseTranslationPath = "PostDetail.";

const commentInitialFormikValues = {
  email: "",
  name: "",
  body: "",
};

const FormComments = () => {
  const { t } = useTranslation();
  const { getErrorMessage } = useFormikErrorMessage();

  const onSubmit = async (
    values: CommentFormikValues,
    { validateForm }: FormikHelpers<CommentFormikValues>
  ) => {
    await validateForm(values);

    const commentData: CreateCommentRequestType = {
      name: values.name,
      email: values.email,
      body: values.body,
    };
  };

  return (
    <Formik
      initialValues={commentInitialFormikValues}
      onSubmit={onSubmit}
      validateOnChange={true}
      validationSchema={commentFormValidationSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => {
        return (
          <FormContainer>
            <StyledInput
              value={values.email}
              onChange={handleChange("email")}
              label={t(`${baseTranslationPath}email`)}
              errorMessage={getErrorMessage(errors.email)}
            />
            <StyledInput
              value={values.name}
              onChange={handleChange("name")}
              label={t(`${baseTranslationPath}name`)}
              errorMessage={getErrorMessage(errors.name)}
            />
            <DescriptionInput
              value={values.body}
              onChange={handleChange("body")}
              label={t(`${baseTranslationPath}body`)}
              errorMessage={getErrorMessage(errors.body)}
            />
            <SubmitButton
              text={t(`${baseTranslationPath}send`)}
              onClick={handleSubmit}
            />
          </FormContainer>
        );
      }}
    </Formik>
  );
};

export default FormComments;
