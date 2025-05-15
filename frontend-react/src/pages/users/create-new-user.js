import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Grid, Stack } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "hook-form";
import MainCard from "components/MainCard";
// import Validations from "constants/yupValidations";
import request from "utils/request";
import toast from "utils/ToastNotistack";
// import useAuth from "hooks/useAuth"

const CreateNewUser = (props) => {
  const dispatch = useDispatch();
  const { onClick, data, view, update, refreshPagination } = props;
  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .required("Email is required")
          .email("Email is not valid"),
        mobileNumber: Yup.string()
          .required("Mobile Number is required")
      })
    ),
    defaultValues: {},
    mode: "all",
  });

  const { handleSubmit, setValue } = methods;
//   const { user } = useAuth();

  const onFormSubmit = async (values) => {
    let response;
    if (update)
      response = await request("/users/update", {
        method: "PUT",
        body: values,
        params: data.id,
      });
    else
      response = await request("/users/create", {
        method: "POST",
        body: values,
      });
    if (response.success) {
      const successMessage = update
        ? "User updated successfully!"
        : "User added successfully!";
      toast(successMessage, { variant: "success", autoHideDuration: 10000 });
      onClick();
      refreshPagination();
    } else {
      toast(response?.error?.message || "Operation failed. Please try again.", {
        variant: "error",
      });
    }

  };


  

  const txtBox = (name, label, type, req, shrink = true) => {
    return (
      <Stack spacing={1}>
        <RHFTextField
          name={name}
          type={type}
          label={label}
          InputLabelProps={{ shrink: shrink }}
          {...(req && { required: true })}
          {...(view ? { disabled: true } : { disabled: false })}
        />
      </Stack>
    );
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onFormSubmit)}>
        <MainCard
          title={(view ? `View ` : update ? "Update " : "Add ") + "User"}
        >
          <Grid container spacing={4}>
            <Grid item md={3} xl={2}>
              {txtBox("name", "Name", "text", true)}
            </Grid>
            <Grid item md={3} xl={2}>
              {txtBox("email", "Email", "text", true)}
            </Grid>
            <Grid item md={3} xl={2}>
              {txtBox("mobileNumber", "Mobile Number", "number", true)}
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}
            >
              <Button
                onClick={onClick}
                size="small"
                variant="outlined"
                color="primary"
              >
                Back
              </Button>
              {!view && (
                <Button
                  size="small"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {update ? "Update" : "Save"}
                </Button>
              )}
            </Grid>
          </Grid>
        </MainCard>
      </FormProvider>
    </>
  );
};

CreateNewUser.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.object,
  view: PropTypes.bool,
  update: PropTypes.bool,
  refreshPagination: PropTypes.func,
};

export default CreateNewUser;
