import React from 'react';
import { Item, Label, Input } from 'native-base';
import styles from './styles';

export default (props) => (
  <Item stackedLabel>
    <Label>{props.name}</Label>
    <Input
      {...props}
      autoCapitalize="none"
      style={styles.small}
      maxLength={props.type ? 140 : 30}
      multiline={props.type ? true : false}
      numberOfLines={props.type ? 5 : 1}
      keyboardType={props.type ? 'default' : 'numeric' }
    />
  </Item>
)