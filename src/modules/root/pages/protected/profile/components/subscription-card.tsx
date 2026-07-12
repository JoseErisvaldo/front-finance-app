import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import { CalendarToday, Cancel, CreditCard, Tag } from "@mui/icons-material";

import {
  formatCurrency,
  formatDateLocal,
  getIntervalText,
  getPlanName,
  getStatusConfig,
  type Subscription,
} from "../helpers/subscription-helpers";

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
      <Box sx={{ mt: 0.3, color: "text.secondary", flexShrink: 0 }}>{icon}</Box>
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block" }}
        >
          {label}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
}

export function SubscriptionCard({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) {
  if (!subscriptions || subscriptions.length === 0) return null;

  return (
    <Box>
      {/* Section header */}
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
        <CreditCard sx={{ color: "text.secondary" }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Minhas Assinaturas
        </Typography>
        <Chip
          label={subscriptions.length}
          size="small"
          sx={{ fontWeight: 600, minWidth: 28 }}
        />
      </Stack>

      <Grid container spacing={2}>
        {subscriptions.map((sub) => {
          const status = getStatusConfig(sub.status);
          const price = formatCurrency(sub);
          const interval = getIntervalText(sub);

          return (
            <Grid size={{ xs: 12, md: 6 }} key={sub.id}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Card header row */}
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, wordBreak: "break-word" }}
                      >
                        {getPlanName(sub)}
                      </Typography>

                      {price && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.5 }}
                        >
                          <Box
                            component="span"
                            sx={{
                              fontSize: 18,
                              fontWeight: 700,
                              color: "text.primary",
                            }}
                          >
                            {price}
                          </Box>{" "}
                          {interval}
                        </Typography>
                      )}
                    </Box>

                    <Chip
                      size="small"
                      label={status.label}
                      color={status.chipColor}
                      sx={{ fontWeight: 500, flexShrink: 0 }}
                    />
                  </Stack>

                  <Divider sx={{ my: 2 }} />

                  {/* Info grid */}
                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <InfoRow
                        icon={<Tag fontSize="small" />}
                        label="Quantidade"
                        value={sub.quantity ?? "-"}
                      />
                    </Grid>

                    <Grid size={6}>
                      <InfoRow
                        icon={<CalendarToday fontSize="small" />}
                        label="Criada em"
                        value={formatDateLocal(sub.created)}
                      />
                    </Grid>

                    <Grid size={6}>
                      <InfoRow
                        icon={<CalendarToday fontSize="small" />}
                        label="Início do período"
                        value={formatDateLocal(sub.current_period_start)}
                      />
                    </Grid>

                    <Grid size={6}>
                      <InfoRow
                        icon={<CalendarToday fontSize="small" />}
                        label="Fim do período"
                        value={formatDateLocal(sub.current_period_end)}
                      />
                    </Grid>
                  </Grid>

                  {/* Cancel footer */}
                  {sub.cancel_at_period_end && (
                    <Box
                      sx={{
                        mt: 3,
                        px: 2,
                        py: 1.5,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "warning.light",
                        bgcolor: "warning.50",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center" }}
                      >
                        <Cancel
                          fontSize="small"
                          sx={{ color: "warning.main" }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          Cancela ao fim do período atual
                        </Typography>
                      </Stack>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default SubscriptionCard;
