import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { CalendarToday, Email, Verified } from "@mui/icons-material";

export type ProfileUser = {
  id: string;
  full_name: string;
  email: string;
  member_since: string;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export const CardProfile = ({ mockUser }: { mockUser: ProfileUser }) => {
  const initials = getInitials(mockUser.full_name);

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 3, mb: 4, overflow: "visible" }}
    >
      {/* Banner */}
      <Box
        sx={{
          height: 120,
          bgcolor: "grey.100",
          borderRadius: "12px 12px 0 0",
        }}
      />

      {/* Body */}
      <Box sx={{ px: 3, pb: 3 }}>
        {/* Avatar */}
        <Box
          sx={{
            width: 80,
            height: 80,
            bgcolor: "grey.900",
            color: "#fff",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            fontWeight: 700,
            mt: -5,
            mb: 2,
            border: "3px solid",
            borderColor: "background.paper",
            userSelect: "none",
          }}
        >
          {initials}
        </Box>

        {/* Name */}
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ alignItems: "center", mb: 0.25 }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {mockUser.full_name}
          </Typography>
          <Verified sx={{ color: "primary.main", fontSize: 22 }} />
        </Stack>

        {/* ID */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          ID: {mockUser.id}
        </Typography>

        {/* Info boxes */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                px: 2,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Email sx={{ color: "text.secondary", flexShrink: 0 }} />
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block" }}
                >
                  E-mail
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {mockUser.email}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                px: 2,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <CalendarToday sx={{ color: "text.secondary", flexShrink: 0 }} />
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block" }}
                >
                  Membro desde
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {mockUser.member_since}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
