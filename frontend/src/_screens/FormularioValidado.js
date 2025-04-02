import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("El nombre es obligatorio"),
    age: yup
      .number()
      .typeError("La edad debe ser un número")
      .required("La edad es obligatoria")
      .min(18, "Debe ser mayor de 18"),
    gender: yup.string().required("El género es obligatorio"),
  })
  .required();

function FormularioValidado() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Formulario con Validaciones
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
              margin="normal"
              fullWidth
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Edad"
              variant="outlined"
              type="number"
              error={!!errors.age}
              helperText={errors.age ? errors.age.message : ""}
              margin="normal"
              fullWidth
            />
          )}
        />
        <Controller
          name="gender"
          control={control}
          defaultValue="male"
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Masculino"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Femenino"
              />
            </RadioGroup>
          )}
        />
        {errors.gender && (
          <FormHelperText error>{errors.gender.message}</FormHelperText>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default FormularioValidado;
