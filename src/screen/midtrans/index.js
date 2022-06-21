import React from 'react';
import {WebView} from 'react-native-webview';

export default function Midtrands(props) {
  const URL = props.route.params.uri;
  return (
    <WebView
      source={{
        uri: URL,
      }}
      //   style={{marginTop: 20}}
    />
  );
}
