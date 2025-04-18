import React, { Component, ErrorInfo } from 'react';
import Button from '@mui/material/Button';

type Props = {
  children: React.ReactNode;
};

type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("エラーログ:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>エラーが発生しました。</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;