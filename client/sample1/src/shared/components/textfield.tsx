import TextField from '@mui/material/TextField';

// 共通テキストボックス
export default function CustomTextField({ placeholder }: { placeholder: string }) {
    return <TextField variant="outlined" placeholder={placeholder} />;
}
