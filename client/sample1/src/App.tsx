import React, { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch';
// import ToastNotification from './components/ToastNotification';
import Timer from './components/Timer';
import TextField from './components/TextField';
import Table from './components/Table';
import Snackbar from './components/Snackbar';
import QRGenerator from './components/QRGenerator';
import ProgressBar from './components/ProgressBar';
import CustomModal from './components/Modal';
import DropdownMenu from './components/DropdownMenu';
import CustomDatePicker from './components/DatePicker';
import Carousel from './components/Carousel';
import Camera from './components/Camera';
import CustomButton from './components/Button';
import CustomAlert from './components/Alert';
import CustomAccordion from './components/Accordion';

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [timerReset, setTimerReset] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleToggle = () => setIsOn(prev => !prev);
  const handleToastClose = () => setToastVisible(false);
  const handleTimerEnd = () => console.log('Timer completed');
  const handleModalClose = () => setModalOpen(false);
  const handleSnackbarClose = () => setSnackbarVisible(false);
  
  const sampleData = [
    { Name: 'Alice', Age: 25 },
    { Name: 'Bob', Age: 30 },
    { Name: 'Charlie', Age: 28 }
  ];

  // trackInteractionは各コンポーネントに渡す例として統一的にログ出力
  const trackInteraction = (event: Event, metadata?: any) => {
    console.log('Interaction:', event.type, metadata);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Front-end Demo App</h1>

      {/* ToggleSwitchのデモ */}
      <div>
        <h2>ToggleSwitch</h2>
        <ToggleSwitch isOn={isOn} onToggle={handleToggle} trackInteraction={trackInteraction} />
        <p>スイッチ状態: {isOn ? 'ON' : 'OFF'}</p>
      </div>

      {/* Timerのデモ */}
      <div>
        <h2>Timer</h2>
        <Timer initialTime={10} onTimeUp={handleTimerEnd} trackInteraction={trackInteraction} />
        <CustomButton label="タイマー再設定" onClick={() => setTimerReset(!timerReset)} />
      </div>

      {/* TextFieldのデモ */}
      <div>
        <h2>TextField</h2>
        <TextField value={textValue} onChange={setTextValue} placeholder="入力してください" trackInteraction={trackInteraction} />
        <p>入力値: {textValue}</p>
      </div>

      {/* Tableのデモ */}
      <div>
        <h2>Table</h2>
        <Table headers={['Name', 'Age']} data={sampleData} trackInteraction={trackInteraction} />
      </div>

      {/* Snackbarのデモ */}
      <div>
        <h2>Snackbar</h2>
        <CustomButton label="Snackbar表示" onClick={() => setSnackbarVisible(true)} />
        <Snackbar message="サンプルスナックバー" isVisible={snackbarVisible} onClose={handleSnackbarClose} trackInteraction={trackInteraction} />
      </div>

      {/* QRGeneratorのデモ */}
      <div>
        <h2>QRGenerator</h2>
        <QRGenerator value="https://example.com" />
      </div>

      {/* ProgressBarのデモ */}
      <div>
        <h2>ProgressBar</h2>
        <ProgressBar progress={70} />
      </div>

      {/* Modalのデモ */}
      <div>
        <h2>Modal</h2>
        <CustomButton label="Modal表示" onClick={() => setModalOpen(true)} />
        <CustomModal isOpen={modalOpen} onClose={handleModalClose} title="Modalタイトル">
          <p>モーダルの内容です。</p>
        </CustomModal>
      </div>

      {/* DropdownMenuのデモ */}
      <div>
        <h2>DropdownMenu</h2>
        <DropdownMenu options={['Option1', 'Option2', 'Option3']} onSelect={(option) => console.log('選択:', option)} />
      </div>

      {/* DatePickerのデモ */}
      <div>
        <h2>DatePicker</h2>
        <CustomDatePicker onDateChange={(date) => { setSelectedDate(date); console.log('選択日:', date); }} />
        <p>選択された日付: {selectedDate}</p>
      </div>

      {/* Carouselのデモ */}
      <div>
        <h2>Carousel</h2>
        <Carousel items={[
          <div key="1" style={{ background: '#ffcccc', padding: '20px' }}>Slide 1</div>,
          <div key="2" style={{ background: '#ccffcc', padding: '20px' }}>Slide 2</div>,
          <div key="3" style={{ background: '#ccccff', padding: '20px' }}>Slide 3</div>
        ]} />
      </div>

      {/* Cameraのデモ */}
      <div>
        <h2>Camera</h2>
        <Camera onCapture={(imageData) => { console.log('撮影画像:', imageData); }} />
      </div>

      {/* Button, Alert, Accordionのデモ */}
      <div>
        <h2>Button / Alert / Accordion</h2>
        <CustomButton label="クリック" onClick={() => alert('ボタンがクリックされました')} />
        <CustomAlert message="警告メッセージ" type="warning" />
        <CustomAccordion title="アコーディオンタイトル">
          <p>アコーディオンの詳細情報です。</p>
        </CustomAccordion>
      </div>
    </div>
  );
};

export default App;
