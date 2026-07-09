import { Box, CircularProgress, Typography } from "@mui/material";

export const FallbackLoading = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <CircularProgress />

      <Typography variant="body1" color="text.secondary">
        Carregando conteúdo...
      </Typography>
    </Box>
  );
};
