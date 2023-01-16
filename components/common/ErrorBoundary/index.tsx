'use client';

// Libs
import { Center, Text } from '@chakra-ui/react';
import React, { Component, ErrorInfo } from 'react';

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface Props {
  children: React.ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  state = { error: null, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <Center py="24px">
          <Text fontSize="2xl">Oops! Something went wrong.</Text>
        </Center>
      );
    }

    return this.props.children;
  }
}
