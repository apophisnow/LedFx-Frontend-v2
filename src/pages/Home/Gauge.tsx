import { useTheme } from '@mui/material/styles';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Gauge(props: any) {
  const theme = useTheme();
  const { unit, total, current, value, onClick } = props;
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      <CircularProgress
        size="12rem"
        variant="determinate"
        value={100}
        style={{
          position: 'absolute',
          color: `${theme.palette.primary.main}30`,
        }}
      />
      <CircularProgress
        size="12rem"
        variant="determinate"
        value={value || (total === 0 ? 0 : Math.round((current * 100) / total))}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" color="secondary" style={{ lineHeight: 1 }}>
          {current}
        </Typography>
        <Typography
          variant="caption"
          color="secondary"
          style={{ lineHeight: 1 }}
        >
          {unit}
        </Typography>
      </Box>
    </Box>
  );
}
