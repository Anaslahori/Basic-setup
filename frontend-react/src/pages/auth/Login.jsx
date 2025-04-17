import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { generateSHA512 } from "../../utils/utils";
import request from "utils/request";

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
  username: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    const clonedValues = structuredClone(values);
    clonedValues.password = generateSHA512(values.password);
    const response = await request("/login", {
      method: "POST",
      body: clonedValues,
    });
    if (response.success) {
      console.log(response.data?.data);
      navigate("/sample-page");
      // emailPasswordSignIn(response.data.user);
    } else {
      // toast(response.error.message, { variant: 'error' });
    }
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
              Log In
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Enter your details below.
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4}>
                <Grid item size={12}>
                  <RHFTextField
                    name="username"
                    type="text"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    required
                    focused
                  />
                </Grid>
                <Grid item size={12}>
                  <RHFTextField
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <IconEye /> : <IconEyeOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
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
                    Login
                  </Button>
                </Grid>
                <Grid item size={12}>
                  <Typography align="center">
                    Don't have an account?
                    <Link component={RouterLink} to="/sign-up">
                      Sign up
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

export default Login;
