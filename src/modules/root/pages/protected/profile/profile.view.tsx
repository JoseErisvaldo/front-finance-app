import React from "react";
import Typography from "@mui/material/Typography";

const ProfileView: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Meu Perfil
      </Typography>
      <Typography>Detalhes e preferências do usuário.</Typography>
    </div>
  );
};

export { ProfileView };
