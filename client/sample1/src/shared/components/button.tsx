// 共通ボタンコンポーネント
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import React, { useEffect, useRef } from 'react';

// CustomButtonPropsインターフェース
interface CustomButtonProps extends ButtonProps {
    // ボタンに表示するラベル
    label: string;
    // 外部からキーを指定できるようにする
    triggerKey?: string;
}

// デフォルトの色を設定
const defaultColor = "primary";

// CustomButtonコンポーネント
export default function CustomButton({ label, triggerKey, color = defaultColor, ...props }: CustomButtonProps) {
    // ボタン要素への参照
    const buttonRef = useRef<HTMLButtonElement>(null);

    // キーボードイベントのリスナーを設定
    useEffect(() => {
        // キーボードイベントのハンドラ
        const handleKeyDown = (event: KeyboardEvent) => {
            // triggerKeyが指定されている場合、指定されたキーが押されたらボタンをクリック
            if (triggerKey && event.key === triggerKey) {
                event.preventDefault();
                buttonRef.current?.click();
            }
        };

        // イベントリスナーを登録
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            // イベントリスナーをクリーンアップ
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [triggerKey]);

    // ボタンのレンダリング
    return (
        <Button {...props} color={color} ref={buttonRef}>
            {label}
        </Button>
    );
}
