import { useState } from 'react';
import TextField from '@mui/material/TextField';

/**
 * 共通テキストボックス
 * @param placeholder テキストボックス内に表示するプレースホルダー文字列
 * @param validate 入力値を検証するための関数（エラーがある場合はエラーメッセージを返す）
 */
export default function Textbox({ placeholder, validate }: { placeholder: string; validate?: (value: string) => string | null }) {
    const [value, setValue] = useState(''); // 入力値を管理するステート
    const [error, setError] = useState<string | null>(null); // エラーメッセージを管理するステート

    /**
     * 入力値が変更されたときの処理
     * @param event 入力イベント
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue); // 入力値を更新
        if (validate) {
            setError(validate(newValue)); // バリデーションを実行し、エラーを更新
        }
    };

    return (
        <TextField
            variant="outlined" // テキストボックスのスタイルを指定
            placeholder={placeholder} // プレースホルダーを設定
            value={value} // 入力値をバインド
            onChange={handleChange} // 入力値変更時のイベントハンドラを設定
            error={!!error} // エラーがある場合にエラースタイルを適用
            helperText={error} // エラーメッセージを表示
        />
    );
}
