import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Link,
  Box,
  CardHeader,
  Grid,
  InputAdornment,
  IconButton,
  Container,
  styled,
} from "@mui/material";
import { FormProvider, RHFTextField } from "../../hook-form";

const ContentStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const FormStyle = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  minHeight: "97vh",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const schema = yup.object({
  name: yup.string().required("Name is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle login logic here
  };
  const { handleSubmit } = methods;
  return (
    <Container maxWidth="xl">
      <FormStyle container>
        <Grid size={{ xs: 12, md: 7 }} p={5}>
          <img
            src="/static/11462643.jpg"
            width={600}
            height={500}
            alt="login"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} p={5}>
          <ContentStyle>
            <Typography variant="h3" gutterBottom>
              Sign Up
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Enter your details below.
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4} gap={2}>
                <Grid item size={12}>
                  <RHFTextField
                    name="name"
                    label="Name"
                    InputLabelProps={{ shrink: true }}
                    required
                    focused
                  />
                </Grid>
                <Grid item size={12}>
                  <RHFTextField
                    name="mobileNumber"
                    label="Mobile Number"
                    InputLabelProps={{ shrink: true }}
                    required
                    focused
                  />
                </Grid>
                <Grid item size={12}>
                  <RHFTextField
                    name="email"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    required
                    focused
                  />
                </Grid>
                <Grid item size={12}>
                  <RHFTextField
                    name="password"
                    type="password"
                    label="Password"
                    focused
                    required
                  />
                </Grid>
                <Grid item size={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign up
                  </Button>
                </Grid>
                <Grid item size={12}>
                  <Typography align="center">
                    Already have an account ?
                    <Link component={RouterLink} to="/login">
                      Login
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </FormProvider>
          </ContentStyle>
        </Grid>
      </FormStyle>
    </Container>
  );
};

export default SignUp;
