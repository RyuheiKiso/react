// ---------------------------------------------------------------
// 各コンポーネントは個別のページで以下のようにインポートしてJSX内で使用します。
// 例：
// import { ToggleSwitch, ToastNotification } from 'components';
// <ToggleSwitch checked={value} onChange={handleToggle} />
// <ToastNotification message="完了しました" type="success" />
// ---------------------------------------------------------------

// ToggleSwitch
// 使用例: <ToggleSwitch checked={value} onChange={handleToggle} />
export { default as ToggleSwitch } from './ToggleSwitch';

// ToastNotification
// 使用例: <ToastNotification message="完了しました" type="success" />
export { default as ToastNotification } from './ToastNotification';

// Timer
// 使用例: <Timer duration={60} onFinish={handleFinish} />
export { default as Timer } from './Timer';

// TextField
// 使用例: <TextField value={text} onChange={handleChange} placeholder="入力" />
export { default as TextField } from './TextField';

// Table
// 使用例: <Table data={rows} columns={cols} />
export { default as Table } from './Table';

// Snackbar
// 使用例: <Snackbar message="エラーが発生しました" severity="error" />
export { default as Snackbar } from './Snackbar';

// QRGenerator
// 使用例: <QRGenerator value="https://example.com" size={128} />
export { default as QRGenerator } from './QRGenerator';

// ProgressBar
// 使用例: <ProgressBar progress={50} />
export { default as ProgressBar } from './ProgressBar';

// Modal
// 使用例: <Modal isOpen={open} onClose={handleClose}>内容</Modal>
export { default as Modal } from './Modal';

// DropdownMenu
// 使用例: <DropdownMenu options={items} onSelect={handleSelect} />
export { default as DropdownMenu } from './DropdownMenu';

// DatePicker
// 使用例: <DatePicker selected={date} onChange={handleDateChange} />
export { default as DatePicker } from './DatePicker';

// Carousel
// 使用例: <Carousel items={images} />
export { default as Carousel } from './Carousel';

// Camera
// 使用例: <Camera onCapture={handleCapture} />
export { default as Camera } from './Camera';

// Button
// 使用例: <Button variant="primary" onClick={handleClick}>送信</Button>
export { default as Button } from './Button';

// Alert
// 使用例: <Alert message="警告です" type="warning" />
export { default as Alert } from './Alert';

// Accordion
// 使用例: <Accordion title="詳細"><p>内容</p></Accordion>
export { default as Accordion } from './Accordion';
