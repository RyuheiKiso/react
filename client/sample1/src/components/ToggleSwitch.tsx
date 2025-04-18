import React from 'react';
import Switch from '@mui/material/Switch';

type ToggleSwitchProps = {
  isOn: boolean;
  onToggle: () => void;
  trackInteraction?: (event: Event, metadata?: any) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle, trackInteraction }) => {
  const handleToggle = () => {
    if (trackInteraction) {
      trackInteraction(new Event('toggle'), { isOn: !isOn });
    }
    onToggle();
  };

  const simulateRapidToggle = (count: number) => {
	for (let i = 0; i < count; i++) {
		setTimeout(() => onToggle(), i * 100);
	}
};

  return (
    <Switch checked={isOn} onChange={handleToggle} />
  );
};

export default ToggleSwitch;
