import { Box, Typography, Button, Paper } from "@mui/material";
import { useRouteError, useNavigate } from "react-router-dom";

export const ErrorElement: React.FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        padding: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Erro ao carregar a página
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Algo deu errado. Tente novamente ou volte para o início.
        </Typography>

        <Button variant="contained" fullWidth onClick={() => navigate("/")}>
          Voltar para início
        </Button>
      </Paper>
    </Box>
  );
};
